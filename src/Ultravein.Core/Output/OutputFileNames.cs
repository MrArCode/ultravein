using System.Text;

namespace Ultravein.Core.Output;

/// <summary>
/// Buduje nazwy plików wyjściowych, które są poprawne jednocześnie na Windows i macOS,
/// bo wygenerowane certyfikaty będą przenoszone między systemami.
/// </summary>
public static class OutputFileNames
{
    public const int MaxLength = 120;
    public const string DefaultFallback = "certyfikat";

    // Znaki zabronione na Windows (macOS jest łagodniejszy, ale trzymamy wspólny mianownik).
    private static readonly HashSet<char> InvalidChars = new("<>:\"/\\|?*");

    // Nazwy zarezerwowane przez Windows, także z rozszerzeniem (np. CON.pdf).
    private static readonly HashSet<string> ReservedNames = new(StringComparer.OrdinalIgnoreCase)
    {
        "CON", "PRN", "AUX", "NUL",
        "COM0", "COM1", "COM2", "COM3", "COM4", "COM5", "COM6", "COM7", "COM8", "COM9",
        "LPT0", "LPT1", "LPT2", "LPT3", "LPT4", "LPT5", "LPT6", "LPT7", "LPT8", "LPT9",
    };

    /// <summary>Zamienia dowolny tekst (np. imię i nazwisko z listy) na bezpieczną nazwę pliku bez rozszerzenia.</summary>
    public static string Sanitize(string? name, string fallback = DefaultFallback)
    {
        if (string.IsNullOrWhiteSpace(name))
            return fallback;

        var buffer = new StringBuilder(name.Length);
        foreach (var ch in name)
        {
            // Białe znaki (także twarde spacje z Excela), znaki sterujące i zabronione zamieniamy na spację.
            buffer.Append(InvalidChars.Contains(ch) || char.IsControl(ch) || char.IsWhiteSpace(ch) ? ' ' : ch);
        }

        // Sklejamy wielokrotne spacje w jedną, usuwamy kropki i spacje z końców (Windows ich nie toleruje,
        // a kropka na początku ukrywa plik na macOS).
        var result = string.Join(' ', buffer.ToString().Split(' ', StringSplitOptions.RemoveEmptyEntries))
            .Trim(' ', '.');

        if (result.Length > MaxLength)
            result = result[..MaxLength].TrimEnd(' ', '.');

        if (result.Length == 0)
            return fallback;

        if (ReservedNames.Contains(result))
            result += "_";

        return result;
    }
}

/// <summary>
/// Przydziela unikalne nazwy plików w obrębie jednego folderu wyjściowego.
/// Porównuje bez rozróżniania wielkości liter, bo tak działają systemy plików Windows i macOS.
/// </summary>
public sealed class OutputFileNameAllocator
{
    private readonly HashSet<string> _taken = new(StringComparer.OrdinalIgnoreCase);

    public string Allocate(string desiredName)
    {
        var baseName = OutputFileNames.Sanitize(desiredName);
        var candidate = baseName;

        for (var counter = 2; !_taken.Add(candidate); counter++)
            candidate = $"{baseName} ({counter})";

        return candidate;
    }
}

using System.Text;

namespace Ultravein.Core.Output;

/// <summary>
/// Builds output file names valid on both Windows and macOS,
/// ensuring generated documents can safely be transferred between systems.
/// </summary>
public static class OutputFileNames
{
    public const int MaxLength = 120;
    public const string DefaultFallback = "certificate";

    // Characters forbidden on Windows (macOS is more lenient, but we keep a common denominator).
    private static readonly HashSet<char> InvalidChars = new("<>:\"/\\|?*");

    // Names reserved by Windows, including with extensions (e.g. CON.pdf).
    private static readonly HashSet<string> ReservedNames = new(StringComparer.OrdinalIgnoreCase)
    {
        "CON", "PRN", "AUX", "NUL",
        "COM0", "COM1", "COM2", "COM3", "COM4", "COM5", "COM6", "COM7", "COM8", "COM9",
        "LPT0", "LPT1", "LPT2", "LPT3", "LPT4", "LPT5", "LPT6", "LPT7", "LPT8", "LPT9",
    };

    /// <summary>Converts any arbitrary text (e.g., person's name from a list) into a safe file name without an extension.</summary>
    public static string Sanitize(string? name, string fallback = DefaultFallback)
    {
        if (string.IsNullOrWhiteSpace(name))
            return fallback;

        StringBuilder buffer = new(name.Length);
        foreach (char ch in name)
        {
            // Whitespace (including non-breaking spaces from Excel), control characters, and forbidden characters are replaced with a space.
            buffer.Append(InvalidChars.Contains(ch) || char.IsControl(ch) || char.IsWhiteSpace(ch) ? ' ' : ch);
        }

        // Collapse multiple spaces into one, remove dots and spaces from ends (Windows disallows them,
        // and a leading dot hides the file on macOS).
        string result = string.Join(' ', buffer.ToString().Split(' ', StringSplitOptions.RemoveEmptyEntries))
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
/// Allocates unique file names within a single output folder.
/// Performs case-insensitive comparison to match Windows and macOS file system behavior.
/// </summary>
public sealed class OutputFileNameAllocator
{
    private readonly HashSet<string> _taken = new(StringComparer.OrdinalIgnoreCase);

    public string Allocate(string desiredName)
    {
        string baseName = OutputFileNames.Sanitize(desiredName);
        string candidate = baseName;

        for (int counter = 2; !_taken.Add(candidate); counter++)
            candidate = $"{baseName} ({counter})";

        return candidate;
    }
}

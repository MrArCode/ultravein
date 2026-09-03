namespace Ultravein.App;

/// <summary>Opcje wiersza poleceń przydatne tylko w trakcie prac nad aplikacją.</summary>
public static class DeveloperOptions
{
    private const string ScreenshotSwitch = "--screenshot";

    /// <summary>
    /// "--screenshot plik.png": po otwarciu okna zapisuje jego zrzut do pliku i kończy program.
    /// Pozwala sprawdzać interfejs automatycznie, bez uprawnień do nagrywania ekranu.
    /// </summary>
    public static string? GetScreenshotPath(string[]? args)
    {
        if (args is null)
            return null;

        var index = Array.IndexOf(args, ScreenshotSwitch);
        return index >= 0 && index + 1 < args.Length ? args[index + 1] : null;
    }
}

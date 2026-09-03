namespace Ultravein.App;

/// <summary>Command-line options useful during application development.</summary>
public static class DeveloperOptions
{
    private const string ScreenshotSwitch = "--screenshot";

    /// <summary>
    /// "--screenshot file.png": captures a screenshot of the main window upon opening and exits.
    /// Enables automated UI verification without requiring screen recording permissions.
    /// </summary>
    public static string? GetScreenshotPath(string[]? args)
    {
        if (args is null)
            return null;

        int index = Array.IndexOf(args, ScreenshotSwitch);
        return index >= 0 && index + 1 < args.Length ? args[index + 1] : null;
    }
}

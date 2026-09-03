using System.Reflection;

namespace Ultravein.Core;

/// <summary>Nazwa i wersja produktu, wspólne dla wszystkich projektów (wersja pochodzi z Directory.Build.props).</summary>
public static class AppInfo
{
    public const string ProductName = "Ultravein";

    public static string Version { get; } =
        typeof(AppInfo).Assembly
            .GetCustomAttribute<AssemblyInformationalVersionAttribute>()?
            .InformationalVersion.Split('+')[0]
        ?? "0.0.0";
}

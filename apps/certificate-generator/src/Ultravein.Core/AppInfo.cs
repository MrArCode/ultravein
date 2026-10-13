using System.Reflection;

namespace Ultravein.Core;

/// <summary>Product name and version shared across all projects (version is sourced from Directory.Build.props).</summary>
public static class AppInfo
{
    public const string ProductName = "Ultravein";

    public static string Version { get; } =
        typeof(AppInfo).Assembly
            .GetCustomAttribute<AssemblyInformationalVersionAttribute>()?
            .InformationalVersion.Split('+')[0]
        ?? "0.0.0";
}

using CommunityToolkit.Mvvm.ComponentModel;
using Ultravein.Core;

namespace Ultravein.App.ViewModels;

public partial class MainViewModel : ViewModelBase
{
    public string WindowTitle => $"{AppInfo.ProductName} {AppInfo.Version}";

    [ObservableProperty]
    public partial string StatusText { get; set; } = "Ready. Start by opening a PDF template.";
}

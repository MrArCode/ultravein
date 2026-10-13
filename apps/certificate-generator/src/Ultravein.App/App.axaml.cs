using Avalonia;
using Avalonia.Controls;
using Avalonia.Controls.ApplicationLifetimes;
using Avalonia.Markup.Xaml;
using Avalonia.Media.Imaging;
using Avalonia.Threading;
using Ultravein.App.ViewModels;
using Ultravein.App.Views;

namespace Ultravein.App;

public partial class App : Application
{
    public override void Initialize()
    {
        AvaloniaXamlLoader.Load(this);
    }

    public override void OnFrameworkInitializationCompleted()
    {
        if (ApplicationLifetime is IClassicDesktopStyleApplicationLifetime desktop)
        {
            MainWindow window = new MainWindow { DataContext = new MainViewModel() };
            desktop.MainWindow = window;

            string? screenshotPath = DeveloperOptions.GetScreenshotPath(desktop.Args);
            if (screenshotPath is not null)
                window.Opened += (_, _) => _ = SaveScreenshotAndExitAsync(window, screenshotPath, desktop);
        }

        base.OnFrameworkInitializationCompleted();
    }

    private static async Task SaveScreenshotAndExitAsync(
        Window window, string path, IClassicDesktopStyleApplicationLifetime desktop)
    {
        try
        {
            // Allow layout and fonts to settle after the window opens.
            await Task.Delay(700);
            await Dispatcher.UIThread.InvokeAsync(() => { }, DispatcherPriority.Render);

            double scale = window.RenderScaling;
            PixelSize size = new PixelSize(
                (int)Math.Round(window.ClientSize.Width * scale),
                (int)Math.Round(window.ClientSize.Height * scale));

            using RenderTargetBitmap bitmap = new RenderTargetBitmap(size, new Vector(96 * scale, 96 * scale));
            bitmap.Render(window);
            bitmap.Save(path, PngBitmapEncoderOptions.Default);
            Console.WriteLine($"Saved window screenshot: {path}");
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine($"Failed to save window screenshot: {ex}");
        }
        finally
        {
            desktop.Shutdown();
        }
    }
}

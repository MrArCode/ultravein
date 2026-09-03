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
            var window = new MainWindow { DataContext = new MainViewModel() };
            desktop.MainWindow = window;

            var screenshotPath = DeveloperOptions.GetScreenshotPath(desktop.Args);
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
            // Chwila na ustabilizowanie układu i czcionek po otwarciu okna.
            await Task.Delay(700);
            await Dispatcher.UIThread.InvokeAsync(() => { }, DispatcherPriority.Render);

            var scale = window.RenderScaling;
            var size = new PixelSize(
                (int)Math.Round(window.ClientSize.Width * scale),
                (int)Math.Round(window.ClientSize.Height * scale));

            using var bitmap = new RenderTargetBitmap(size, new Vector(96 * scale, 96 * scale));
            bitmap.Render(window);
            bitmap.Save(path, PngBitmapEncoderOptions.Default);
            Console.WriteLine($"Zapisano zrzut okna: {path}");
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine($"Nie udało się zapisać zrzutu okna: {ex}");
        }
        finally
        {
            desktop.Shutdown();
        }
    }
}

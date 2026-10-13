# Publishes the application as a single-file exe for Windows (default: win-x64). For execution on Windows.
param([string]$Rid = "win-x64")
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$out = Join-Path $root "artifacts\$Rid"

if (Test-Path $out) { Remove-Item -Recurse -Force $out }
dotnet publish "$root\src\Ultravein.App\Ultravein.App.csproj" `
  -c Release -r $Rid --self-contained true `
  -p:PublishSingleFile=true `
  -p:IncludeNativeLibrariesForSelfExtract=true `
  -p:EnableCompressionInSingleFile=true `
  -p:DebugType=none -p:DebugSymbols=false `
  -o $out

Write-Host ""
Write-Host "Done: $out"
Get-ChildItem $out

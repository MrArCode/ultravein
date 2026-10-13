#!/usr/bin/env bash
# Publishes the application as a .app bundle for macOS (default: osx-arm64, for Intel: osx-x64).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
RID="${1:-osx-arm64}"
OUT="$ROOT/artifacts/$RID"
PUBLISH="$OUT/publish"
APP="$OUT/Ultravein.app"

rm -rf "$OUT"
dotnet publish "$ROOT/src/Ultravein.App/Ultravein.App.csproj" \
  -c Release -r "$RID" --self-contained true \
  -p:DebugType=none -p:DebugSymbols=false \
  -o "$PUBLISH"

mkdir -p "$APP/Contents/MacOS" "$APP/Contents/Resources"
cp -R "$PUBLISH/." "$APP/Contents/MacOS/"
rm -rf "$PUBLISH"

VERSION="$(sed -n 's:.*<Version>\(.*\)</Version>.*:\1:p' "$ROOT/Directory.Build.props")"
sed "s/__VERSION__/$VERSION/g" "$ROOT/scripts/mac/Info.plist" > "$APP/Contents/Info.plist"

if [ -f "$ROOT/scripts/mac/Ultravein.icns" ]; then
  cp "$ROOT/scripts/mac/Ultravein.icns" "$APP/Contents/Resources/Ultravein.icns"
fi

# Ad-hoc signing: sufficient to run locally and on another Mac via "Right-click -> Open".
# Distribution without warnings requires an Apple Developer account and notarization.
codesign --force --deep --sign - "$APP"

echo
echo "Done: $APP"
du -sh "$APP"

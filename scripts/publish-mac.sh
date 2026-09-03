#!/usr/bin/env bash
# Publikuje aplikację jako pakiet .app dla macOS (domyślnie osx-arm64, dla Intela: osx-x64).
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

# Podpis ad hoc: wystarcza do uruchomienia lokalnie i na innym Macu po "prawy przycisk -> Otwórz".
# Do dystrybucji bez ostrzeżeń potrzebne jest konto Apple Developer i notaryzacja.
codesign --force --deep --sign - "$APP"

echo
echo "Gotowe: $APP"
du -sh "$APP"

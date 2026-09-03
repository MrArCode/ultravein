#!/usr/bin/env bash
# Publikuje aplikację jako pojedynczy plik exe dla Windows (domyślnie win-x64).
# Działa także na macOS, bo Avalonia nie wymaga Windows do kompilacji.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
RID="${1:-win-x64}"
OUT="$ROOT/artifacts/$RID"

rm -rf "$OUT"
dotnet publish "$ROOT/src/Ultravein.App/Ultravein.App.csproj" \
  -c Release -r "$RID" --self-contained true \
  -p:PublishSingleFile=true \
  -p:IncludeNativeLibrariesForSelfExtract=true \
  -p:EnableCompressionInSingleFile=true \
  -p:DebugType=none -p:DebugSymbols=false \
  -o "$OUT"

echo
echo "Gotowe: $OUT"
ls -lh "$OUT"

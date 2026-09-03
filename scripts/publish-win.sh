#!/usr/bin/env bash
# Publishes the application as a single-file exe for Windows (default: win-x64).
# Can also be run on macOS since Avalonia does not require Windows to build.
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
echo "Done: $OUT"
ls -lh "$OUT"

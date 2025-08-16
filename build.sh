#!/bin/bash

# LessTube Extension Build Script
# Auto-increments version and creates clean zip file

echo "🔨 Building LessTube extension..."

# Read current version from manifest.json
CURRENT_VERSION=$(grep '"version"' manifest.json | sed 's/.*"version": "\(.*\)".*/\1/')
echo "📋 Current version: ${CURRENT_VERSION}"

# Split version into parts (major.minor.patch)
IFS='.' read -r MAJOR MINOR PATCH <<< "$CURRENT_VERSION"

# Increment patch version
NEW_PATCH=$((PATCH + 1))
NEW_VERSION="${MAJOR}.${MINOR}.${NEW_PATCH}"

echo "🆙 New version: ${NEW_VERSION}"

# Update version in manifest.json
sed -i '' "s/\"version\": \"${CURRENT_VERSION}\"/\"version\": \"${NEW_VERSION}\"/" manifest.json
echo "✅ Updated manifest.json version"

# Define output filename with new version
OUTPUT_FILE="lesstube-v${NEW_VERSION}.zip"

# Remove old zip files (optional)
echo "🧹 Cleaning old zip files..."
rm -f lesstube-*.zip

# Create zip with only required files
echo "📦 Creating zip file: ${OUTPUT_FILE}"
zip -r "${OUTPUT_FILE}" \
    manifest.json \
    index.js \
    style.css \
    icon-16x16.png \
    icon-48x48.png \
    icon-128x128.png \
    -x "*.DS_Store" "__MACOSX/*" "*.git*" "*.sh" "README.md" "LICENSE"

# Check if zip was created successfully
if [ -f "${OUTPUT_FILE}" ]; then
    echo "✅ Build successful!"
    echo "📁 Created: ${OUTPUT_FILE}"
    echo "🆙 Version: ${NEW_VERSION}"
    
    # Show file size
    FILE_SIZE=$(ls -lh "${OUTPUT_FILE}" | awk '{print $5}')
    echo "📊 File size: ${FILE_SIZE}"
    
    # List contents to verify
    echo "📋 Contents:"
    unzip -l "${OUTPUT_FILE}"
    
    echo ""
    echo "🎉 Version bumped from ${CURRENT_VERSION} to ${NEW_VERSION}"
    echo "🚀 Ready for Mozilla Add-ons submission!"
else
    echo "❌ Build failed!"
    echo "↩️ Reverting version change..."
    sed -i '' "s/\"version\": \"${NEW_VERSION}\"/\"version\": \"${CURRENT_VERSION}\"/" manifest.json
    exit 1
fi

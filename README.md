# Tailwind Skeleton Template for Winter CMS

This is a bare bones skeleton starter template for Winter CMS

Preconfigured with TailwindCSS v3 + Plugins (Typography, Forms) + AlpineJS

## Quick setup

This setup is based on Tailwind CLI with a Linux x64 server. This should work on most LAMP Stack environments.

**Not using Linux server?**

The Tailwind CLI is also available for Windows and Mac environments. Please see official documentation from Tailwind:
[Standalone CLI: Use Tailwind CSS without Node.js – Tailwind CSS](https://tailwindcss.com/blog/standalone-cli)

## Dev/Staging Environment

This command will watch for changes on the fly

`./tailwindcss -i ./assets/style/src/theme.css -o ./assets/style/dist/theme.css --watch`

## Production Environment

This commaind will generate a minified css file for production

`./tailwindcss build -i ./assets/style/src/theme.css -o ./assets/style/dist/theme.css --minify`
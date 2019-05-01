@echo off
::dealy
SETLOCAL enabledelayedexpansion
jq-win64.exe ".version" src/manifest.json >dist/win-jq.txt
set /P version=<dist/win-jq.txt
echo %version% createing.
mkdir dist\Shiny_Window-%version% > NUL 2>&1
xcopy src\* dist\Shiny_Window-%version%\ /s /i /q /y
powershell compress-archive .\dist\Shiny_Window-%version:~1%\ "dist\Shiny_window-%version:~1%.zip" -Force
echo %version% created.


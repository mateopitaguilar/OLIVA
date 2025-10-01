@echo off
setlocal
set "NODE_HOME=C:\Program Files\nodejs"
set "PATH=%NODE_HOME%;%PATH%"

rem Abre una ventana nueva que permanece abierta pase lo que pase
start "OLIVA DEV" cmd /k "cd /d "%~dp0" && "%NODE_HOME%\npm.cmd" -v && "%NODE_HOME%\npm.cmd" install --no-fund --no-audit && "%NODE_HOME%\npm.cmd" run dev"


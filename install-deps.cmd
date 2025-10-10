@echo off
setlocal
set "NODE_HOME=C:\Program Files\nodejs"
set "PATH=%NODE_HOME%;%PATH%"
cd /d "%~dp0"

echo === Verificando Node y npm ===
"%NODE_HOME%\node.exe" -v || (
  echo [ERROR] No se encontro node.exe en "%NODE_HOME%".
  echo Edita NODE_HOME en este archivo si tu Node esta en otra ruta.
  pause
  exit /b 1
)
"%NODE_HOME%\npm.cmd" -v || (
  echo [ERROR] No se encontro npm.cmd en "%NODE_HOME%".
  pause
  exit /b 1
)

echo === Instalando dependencias ===
"%NODE_HOME%\npm.cmd" install --no-fund --no-audit
if errorlevel 1 (
  echo [ERROR] Fallo la instalacion. Revisa el mensaje anterior.
  pause
  exit /b 1
)

echo === Dependencias instaladas correctamente ===
pause




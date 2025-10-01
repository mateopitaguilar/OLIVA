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

echo.
echo === Instalando dependencias (si es necesario) ===
if not exist node_modules (
  "%NODE_HOME%\npm.cmd" install --no-fund --no-audit || (
    echo [ERROR] Hubo un error instalando dependencias.
    pause
    exit /b 1
  )
)

echo.
echo === Iniciando servidor de desarrollo ===
"%NODE_HOME%\npm.cmd" run dev || (
  echo [ERROR] Error al iniciar Vite.
  pause
  exit /b 1
)

echo.
echo (No cierres esta ventana mientras trabajas)
pause


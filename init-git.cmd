@echo off
setlocal
cd /d "%~dp0"

:: Comprobar que git está disponible
git --version >nul 2>&1
if errorlevel 1 (
  echo [ERROR] Git no esta instalado o no esta en PATH.
  echo Instala Git desde https://git-scm.com/ y vuelve a ejecutar este script.
  pause
  exit /b 1
)

echo === Inicializando repositorio ===
git init

:: Crear rama principal 'main'
git checkout -B main

echo === Añadiendo archivos ===
git add -A

echo === Creando primer commit ===
git commit -m "chore: initial commit (Oliva Bar e Levar)" || echo (posible repo ya comiteado)

echo.
set /p REMOTE_URL=Introduce la URL del repositorio GitHub (por ejemplo, https://github.com/usuario/oliva-web.git): 
if "%REMOTE_URL%"=="" (
  echo [INFO] No se proporciono URL remota. Puedes configurarla despues con:
  echo   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
  echo   git push -u origin main
  pause
  exit /b 0
)

echo === Configurando remoto ===
git remote remove origin >nul 2>&1
git remote add origin "%REMOTE_URL%"

echo === Subiendo a GitHub (main) ===
git push -u origin main

echo.
echo [OK] Repositorio inicializado y subido.
pause




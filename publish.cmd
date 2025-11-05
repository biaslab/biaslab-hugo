@echo off
REM Publish the site to biaslab.github.io (Windows, cmd.exe)
setlocal enableextensions

REM Verify prerequisites
where git >NUL 2>&1
if errorlevel 1 (
  echo [ERROR] Git is not installed or not in PATH.
  exit /b 1
)

where hugo >NUL 2>&1
if errorlevel 1 (
  echo [ERROR] Hugo is not installed or not in PATH.
  echo         Get it from https://gohugo.io/getting-started/installing/
  exit /b 1
)

REM Paths
set "CHECKOUT=%TEMP%\biaslab.github.io.git"
set "BUILDPATH=%CD%"

REM Fresh clone of the target repo
if exist "%CHECKOUT%" rmdir /s /q "%CHECKOUT%"
git clone git@github.com:biaslab/biaslab.github.io.git "%CHECKOUT%"
if errorlevel 1 (
  echo [WARN] SSH clone failed; attempting HTTPS clone instead...
  git clone https://github.com/biaslab/biaslab.github.io.git "%CHECKOUT%"
  if errorlevel 1 goto :error
)

REM Update theme to latest master/main
pushd "%BUILDPATH%\themes\academic-group" 2>NUL
if errorlevel 1 (
  echo [ERROR] Theme directory not found: "%BUILDPATH%\themes\academic-group"
  goto :error
)

git rev-parse --verify master >NUL 2>&1
if %errorlevel%==0 (
  git checkout master
) else (
  git rev-parse --verify main >NUL 2>&1
  if %errorlevel%==0 (
    git checkout main
  ) else (
    echo [WARN] Neither 'master' nor 'main' branch found for theme; continuing on current branch.
  )
)
git pull
popd

REM Clean build output and rebuild
if exist "%BUILDPATH%\public" rmdir /s /q "%BUILDPATH%\public"
mkdir "%BUILDPATH%\public"

hugo -t academic-group
if errorlevel 1 goto :error

REM Mirror build output into the cloned site repo, preserving .git
pushd "%CHECKOUT%"
REM Use robocopy to mirror; treat return codes 0-7 as success
robocopy "%BUILDPATH%\public" "%CHECKOUT%" /MIR /XD ".git" >NUL
set RC=%ERRORLEVEL%
if %RC% GEQ 8 goto :error

REM Commit only if there are changes
git add -A
git diff --quiet --staged
if errorlevel 1 (
  git commit -m "Website update"
  if errorlevel 1 goto :error
  git push origin master
  if errorlevel 1 goto :error
) else (
  echo No changes to commit; skipping push.
)

popd

REM Cleanup
if exist "%CHECKOUT%" rmdir /s /q "%CHECKOUT%"
echo All done.
exit /b 0

:error
echo [ERROR] Publishing failed. See messages above.
exit /b 1

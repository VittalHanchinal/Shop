@echo off
cd /d "c:\Users\Manya Technologies\Desktop\New folder\kalatailering"
echo Building Spring Boot application...
call mvnw.cmd clean package -DskipTests
if %ERRORLEVEL% EQU 0 (
    echo Build successful!
    echo Starting Spring Boot application...
    call mvnw.cmd spring-boot:run
) else (
    echo Build failed. Trying to run existing JAR...
    java -jar target\*.jar
)

# How to Run the Backend - Simple Solutions

## 🚨 Issue
Maven wrapper is failing due to spaces in the path: `"Manya Technologies"`

## ✅ Solution 1: Use IntelliJ IDEA (EASIEST - 2 Minutes)

### Download & Install
1. Download **IntelliJ IDEA Community Edition** (FREE):
   - https://www.jetbrains.com/idea/download/

2. Install and open IntelliJ IDEA

### Run the Backend
1. **Open Project:**
   - Click "Open"
   - Navigate to: `c:\Users\Manya Technologies\Desktop\New folder\kalatailering`
   - Click "OK"

2. **Wait for indexing** (30 seconds)

3. **Run the application:**
   - Find `KalataileringApplication.java` in the project explorer
   - Right-click → "Run 'KalataileringApplication'"

4. **Backend will start!** Look for:
   ```
   Started KalataileringApplication in X seconds
   ```

Backend runs on: `http://localhost:8080`

---

## ✅ Solution 2: Move Project (No Spaces in Path)

The issue is the space in "Manya Technologies". Move the project:

```powershell
# Create new folder without spaces
New-Item -Path "C:\Projects" -ItemType Directory -Force

# Move the project
Move-Item "c:\Users\Manya Technologies\Desktop\New folder" "C:\Projects\KalaTailoring"

# Navigate and run
cd C:\Projects\KalaTailoring\kalatailering
.\mvnw.cmd spring-boot:run
```

---

## ✅ Solution 3: Use VS Code with Java Extension

1. Install **VS Code**: https://code.visualstudio.com/

2. Install **Extension Pack for Java**:
   - Open VS Code
   - Extensions → Search "Extension Pack for Java"
   - Install

3. Open folder: `kalatailering`

4. Press `F5` or click "Run" → "Start Debugging"

---

## 🎯 Recommended: Use IntelliJ IDEA

**Why?**
- ✅ No Maven configuration needed
- ✅ Built-in Maven support
- ✅ Best for Java/Spring Boot development
- ✅ Free Community Edition
- ✅ Works immediately

**Time:** 2 minutes to download, 30 seconds to run

---

## 📱 Meanwhile: Test Mobile App UI

The mobile app is **already running**! You can test the UI:

1. **Install Expo Go** on your phone
2. **Scan QR code** from the terminal
3. **See the beautiful UI** (login will fail without backend, but you can explore)

---

## ⚡ Quick Status

| Component | Status |
|-----------|--------|
| Mobile App | ✅ Running |
| Backend Code | ✅ Complete |
| Backend Server | ⚠️ Needs IDE to run |

**Next Step:** Install IntelliJ IDEA (2 min) → Run backend → Test full app!

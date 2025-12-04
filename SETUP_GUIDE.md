# Maven Installation & Backend Setup Guide

## ⚠️ Issue Found

Maven is not installed on your system, which is required to build and run the Spring Boot backend.

## 🔧 Solution: Install Maven

### Option 1: Install Maven (Recommended)

1. **Download Maven:**
   - Go to: https://maven.apache.org/download.cgi
   - Download "Binary zip archive" (apache-maven-3.9.x-bin.zip)

2. **Extract:**
   - Extract to: `C:\Program Files\Apache\maven`

3. **Add to PATH:**
   - Open "Environment Variables" (Search in Windows)
   - Under "System variables", find "Path"
   - Click "Edit" → "New"
   - Add: `C:\Program Files\Apache\maven\bin`
   - Click "OK" on all dialogs

4. **Verify Installation:**
   ```bash
   # Open NEW terminal window
   mvn -version
   ```

### Option 2: Use IntelliJ IDEA or Eclipse

1. **Download IntelliJ IDEA Community** (Free):
   - https://www.jetbrains.com/idea/download/

2. **Open Project:**
   - File → Open → Select `kalatailering` folder
   - IntelliJ will auto-detect Spring Boot

3. **Run:**
   - Right-click on `KalataileringApplication.java`
   - Select "Run 'KalataileringApplication'"

### Option 3: Use Spring Tool Suite (STS)

1. **Download STS:**
   - https://spring.io/tools

2. **Import Project:**
   - File → Import → Maven → Existing Maven Projects
   - Select `kalatailering` folder

3. **Run:**
   - Right-click on project → Run As → Spring Boot App

## 🚀 After Maven is Installed

### Build the Backend:
```bash
cd "c:/Users/Manya Technologies/Desktop/New folder/kalatailering"
mvn clean install
```

### Run the Backend:
```bash
mvn spring-boot:run
```

Backend will start on: `http://localhost:8080`

### Test the API:
```bash
# Test health endpoint
curl http://localhost:8080/api/health
```

## 📱 Mobile App Setup

Once backend is running:

1. **Get your IP address** (from the command output above)

2. **Update API URL:**
   - Open: `KalaTailoringApp/services/api.js`
   - Line 7: Change `192.168.1.100` to your IP address

3. **Start mobile app:**
   ```bash
   cd "c:/Users/Manya Technologies/Desktop/New folder/KalaTailoringApp"
   npm start
   ```

4. **Test on phone:**
   - Install Expo Go app
   - Scan QR code
   - Login with admin credentials

## 🎯 Quick Test Without Backend

You can test the mobile app UI without backend:

```bash
cd "c:/Users/Manya Technologies/Desktop/New folder/KalaTailoringApp"
npm start
```

The UI will load, but API calls will fail (expected without backend).

## 📞 Need Help?

If you prefer, I can:
1. Guide you through IntelliJ IDEA setup (easiest for Java development)
2. Help troubleshoot Maven installation
3. Create a pre-built JAR file for you to run directly

Let me know which option you prefer!

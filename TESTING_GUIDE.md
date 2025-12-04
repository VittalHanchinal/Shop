# 🎉 Testing Your Mobile App - Quick Guide

## ✅ Backend Status: RUNNING!

Backend is live on: `http://localhost:8080`

## 📱 Test on Your Phone (EASIEST)

### Step 1: Install Expo Go
- **Android**: https://play.google.com/store/apps/details?id=host.exp.exponent
- **iOS**: https://apps.apple.com/app/expo-go/id982107779

### Step 2: Scan QR Code
Look at your terminal where `npm start` is running. You should see a **QR code**.

- **Android**: Open Expo Go app → Scan QR code
- **iOS**: Open Camera app → Point at QR code → Tap notification

### Step 3: Test the App!

**What to test:**

1. **Login Screen**
   - Try logging in with your admin credentials
   - Email: (your admin email from database)
   - Password: (your admin password)

2. **Home Screen** (after login)
   - See all service cards
   - Tap on "Blouse Stitching"

3. **Blouse List**
   - View pending/completed customers
   - Tap "+ Add" to add new customer

4. **Add Customer Form**
   - Fill in customer details
   - Add measurements
   - Submit

---

## 🖥️ Test on Android Emulator (If Installed)

```bash
# In the terminal with npm start running, press 'a'
# OR open new terminal:
cd "c:\Users\Manya Technologies\Desktop\New folder\KalaTailoringApp"
npm run android
```

---

## 🍎 Test on iOS Simulator (Mac Only)

```bash
# Press 'i' in the terminal
# OR:
npm run ios
```

---

## 🌐 Test in Web Browser

```bash
# Press 'w' in the terminal
# OR:
npm run web
```

The app will open in your browser at `http://localhost:8081`

---

## 🔍 What You Should See

### Login Screen
- Beautiful purple gradient background
- Email and password fields
- "Kala Tailoring" logo

### Home Screen
- Welcome message with admin name
- 6 service cards:
  - Blouse Stitching (red gradient)
  - Churidar Stitching (teal gradient)
  - Lehenga Stitching (pink gradient)
  - Pico Fall (orange gradient)
  - Saree Design (blue gradient)
  - Billing (purple gradient)

### Blouse List
- Tabs: Pending / Completed
- Filter by type: Normal / Fancy / Designer
- Customer cards showing name, phone, price, delivery date

### Add Customer Form
- Customer details (name, phone, price)
- Blouse type selector
- All measurements fields
- Sleeve details
- Delivery date

---

## 🐛 Troubleshooting

### "Cannot connect to backend"
- ✅ Backend is running on `http://localhost:8080`
- ✅ Mobile app is configured to use `http://192.168.0.7:8080/api`
- ⚠️ Make sure your phone and computer are on the **same WiFi network**

### "Login failed"
- Check that you have an admin user in your PostgreSQL database
- Verify the email and password are correct

### "QR code not showing"
- Look in the terminal where `npm start` is running
- Press `Shift + ?` to show all commands
- The QR code should be visible

---

## 📸 Take Screenshots!

Once you test the app, you can take screenshots to see your beautiful mobile app in action!

---

## 🎯 Quick Test Checklist

- [ ] Backend running on `http://localhost:8080`
- [ ] Mobile app running (npm start)
- [ ] Expo Go installed on phone
- [ ] Phone and computer on same WiFi
- [ ] QR code scanned
- [ ] App loads on phone
- [ ] Login works
- [ ] Home screen displays
- [ ] Can navigate to Blouse List
- [ ] Can add new customer

---

## 🚀 Next Steps After Testing

1. **Expand to other services** (Pico, Saree, Churidar, Lehenga)
2. **Add billing functionality**
3. **Deploy backend to cloud** (Render, Railway)
4. **Build APK/IPA** for production

---

## 💡 Tips

- **Shake your phone** to open Expo developer menu
- **Double-tap R** to reload the app
- **Check terminal** for any error messages

**Enjoy your modern mobile app! 🎉**

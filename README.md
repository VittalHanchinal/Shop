# Kala Tailoring Mobile App

A modern cross-platform mobile application for tailoring shop management, built with React Native (Expo) and Spring Boot.

## 🎯 Features

- **Cross-platform**: Works on Android, iOS, and Web
- **6 Services**: Blouse, Churidar, Lehenga, Pico Fall, Saree Design, and Billing
- **Modern UI**: Beautiful gradient designs with smooth animations
- **Secure Authentication**: JWT-based login system
- **Customer Management**: Track pending and completed orders
- **Billing System**: Search customers and generate bills

## 📱 Mobile App (React Native + Expo)

### Tech Stack
- React Native with Expo SDK 51
- React Navigation for routing
- Axios for API calls
- React Native Paper for UI components
- AsyncStorage for local data

### Setup
```bash
cd KalaTailoringApp
npm install
npm start
```

### Run on Different Platforms
```bash
# Web browser
npm run web

# Android (requires Android Studio)
npm run android

# iOS (requires Mac with Xcode)
npm run ios
```

## 🔧 Backend (Spring Boot)

### Tech Stack
- Spring Boot 3.4.2
- Spring Security with JWT
- PostgreSQL database
- JPA/Hibernate
- Maven

### Setup
```bash
cd kalatailering
mvn spring-boot:run
```

Backend runs on: `http://localhost:8080`

## 🚀 Quick Start

1. **Start Backend**:
   ```bash
   cd kalatailering
   mvn spring-boot:run
   ```

2. **Start Mobile App**:
   ```bash
   cd KalaTailoringApp
   npm install
   npm run web
   ```

3. **Open Browser**: `http://localhost:8081`

4. **Login** with your admin credentials

## � Build for Production

### Android APK
```bash
npm install -g eas-cli
eas login
eas build --platform android --profile preview
```

### iOS IPA
```bash
eas build --platform ios --profile preview
```

## 🎨 Screenshots

The app features a modern purple gradient theme with:
- Beautiful login screen
- Dashboard with service cards
- Customer list and form screens
- Billing and search functionality

## 📝 API Endpoints

- `POST /api/auth/login` - Admin login
- `GET /api/customers/blouse/{type}` - Get blouse customers
- `POST /api/customers/blouse` - Add blouse customer
- `GET /api/customers/pico` - Get pico customers
- `POST /api/customers/pico` - Add pico customer
- `GET /api/customers/saree` - Get saree customers
- `POST /api/customers/saree` - Add saree customer
- `GET /api/billing/search?number={phone}` - Search for billing

## � Security

- JWT token-based authentication
- Secure password storage with BCrypt
- CORS enabled for mobile app access

## 📄 License

This project is for Kala Tailoring shop management.

## 👨‍💻 Development

Built with ❤️ using React Native and Spring Boot

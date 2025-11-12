## ⚡ Environment Setup

> ⚠️ **Note:** Prerequisites
> Before running the project, make sure your development environment is set up for React Native for both Android and iOS:
> **Android**
> Install Android Studio
> Configure Android SDK
> Set ANDROID_HOME environment variable
> Add platform-tools to your PATH
> Make sure an emulator or device is ready
> 
> **iOS**
> Install Xcode
> Install CocoaPods (sudo gem install cocoapods)
> Ensure you have a Team selected in Signing & Capabilities in Xcode
> Only simulators or registered devices can run the app

Clone the repository

```sh
git clone <repository-link>
cd MovieApp
```

Install dependencies

```sh
yarn install        # Recommended
# or
npm install
```

## 🚀 Running the Project
Android
```sh
yarn start:android
```
or

```sh
npx react-native run-android
```

iOS

> ⚠️ **Note:** On iOS, you need to set a Team in Xcode under Signing & Capabilities because the app is not in the App Store. You can install it only on a simulator or a registered device.

```sh
yarn start:ios
```
or

```sh
npx react-native run-ios
```

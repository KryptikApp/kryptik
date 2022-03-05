# Kryptik App
Kryptik is a mobile app that simplifies digital ownership. One seed. One wallet. Infinite possibilities. 

## How to run this project
Make sure you have a current version of Node.js installed.
```
npm install -g n
n latest
```
Then install react native & expo cli
```
npm install -g react-native && npm install -g expo-cli
```

For mobile testing, you'll also need XCode for running an [Iphone emulator](https://developer.apple.com/xcode/) and Android Studio for running an [Android Emulator](https://developer.android.com/studio).

Once this is completed run `expo init kryptik`
Make sure to `cd` into the app directory.
then run either `$ expo start` OR `$ npm start`
If you have issues with `$npm start` check your `npm config get ignore-scripts` if this is `true` set it to false: `npm config set ignore-scripts false`

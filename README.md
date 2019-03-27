# ionicEspTouch
Simple app with ionic v3 integrating esptouch plugin

Steps:

Clone repo and Run:

npm i

ionic cordova platform add android@7.1.1/ios

ionic cordova plugin add cordova-plugin-esptouch@1.0.3

Then you need to change on home.ts the parameters passed to esptouch start function starting on line 16.

Then you must run on a device (android/ios):

ionic cordova run android/ios

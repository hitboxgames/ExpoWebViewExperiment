Hello Lil Snack Team! We wanted to show some demos on some possible ways of creating a mobile app. <br />
Our experience is with React Native / Expo, so that's what we used to build this but wanted to just show how simple it was.

We've created two projects and within each you can find different ways we set up the code.

# Bare bone Web View App <br />

![WebWrapperGif](https://github.com/user-attachments/assets/91379401-3228-4195-bb3e-7f883a287ceb) <br />

This app is just a barebone Expo app that has a WebView within index.tsx. In this file you'll notice it only contains a React Native Web View and it's linked to the lilsnack.co website.
<br /><br />
<img width="810" alt="image" src="https://github.com/user-attachments/assets/a505a045-6ccf-44be-980d-df999a28a190">

To run this demo:

1. cd into /webwrapper
2. run `npm i`
3. run `npx expo`
4. Using the terminal GUI choose a simulator you wish to run the app on. We tested this on the IPhone simulator (may require installing simulator through XCode).
   <br />

# Expo Tab Groups: Can be used to for future development to expand on the mobile app <br />

![TabGroupExampleGif](https://github.com/user-attachments/assets/33849805-836f-46ab-872d-4aa97b29f433) <br />

This version is meant to show you Expo's tab group and and example of how you can create a seperate WebView for each individual page.
(Note: May require conditionally hiding currently existing navigation group in favor of this one when on mobile device.)
<br /><br />
<img width="862" alt="image" src="https://github.com/user-attachments/assets/7532de92-8e7e-4dbf-bcde-42e5a6895327">

To run this demo:

1. go inside of /tabgroupexample/
2. run `npm i`
3. run `npx expo`
4. Using the terminal GUI choose a simulator you wish to run the app on. We tested this on the IPhone simulator (may require installing simulator through XCode).

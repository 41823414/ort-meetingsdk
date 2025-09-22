# Zoom Meeting SDK for React Native

## Installation

In your React Native project, install the Meeting SDK:

`$ npm install @zoom/meetingsdk-react-native --save`

In the iOS and Android folders in your project, you will also need to [install the iOS and Android Zoom Meeting SDKs](https://developers.zoom.us/docs/meeting-sdk/react-native/), respectively.

## Usage

In the component file where you want to use the Meeting SDK, import `ZoomSDKProvider` and `useZoom`.

```js
import { ZoomSDKProvider, useZoom } from '@zoom/meetingsdk-react-native';
```

Wrap your application with `ZoomSDKProvider` and set the required configuration properties.

```js
{...}
return (
  <ZoomSDKProvider
    config={{
    jwtToken: '{Your Zoom JWT Token}',
    domain: 'zoom.us',
    enableLog: true,
    logSize: 5,
  }}>
    <RestOfTheApp />
  </ZoomSDKProvider>
)
```

Get the Meeting SDK instance.

```js
const zoom = useZoom();
```

Generate an [SDK JWT Token](https://developers.zoom.us/docs/meeting-sdk/auth/).

Then, join a meeting.

```js
await zoom.joinMeeting({
  userName: displayName,
  meetingNumber: meetingNumber,
  password: meetingPassword,
});
```

## Sample App

Checkout the Zoom React Native Meeting SDK Sample App in the `example` directory.

## Documentation
Please visit [Meeting SDK for React Native](https://developers.zoom.us/docs/meeting-sdk/react-native) to learn how to use the SDK wrapper and run the sample application.

For the full list of APIs and Event Listeners, see the [Reference](https://marketplacefront.zoom.us/sdk/meeting/react-native/annotated.html).

## Need help?

If you're looking for help, try [Developer Support](https://devsupport.zoom.us/) or our [Developer Forum](https://devforum.zoom.us). Priority support is also available with [Premier Developer Support plans](https://explore.zoom.us/en/support-plans/developer/).

## Changelog

For the changelog, see [Meeting SDK for React Native](https://developers.zoom.us/changelog/meeting-sdk/react-native).

## License

Use of this SDK is subject to our [License and Terms of Use](https://explore.zoom.us/en/legal/zoom-api-license-and-tou/);

## Open Source Software Source Code

Some licenses for OSS contained in our products give you the right to access the source code under said license. You may obtain a copy of source code for the relevant OSS via the following link: https://explore.zoom.us/en/opensource/source/. Please obtain independent legal advice or counsel to determine your responsibility to make source code available under any specific OSS project.

Please see [oss_attribution.txt](oss_attribution.txt) for more information.

---
Copyright ©2024 Zoom Video Communications, Inc. All rights reserved.

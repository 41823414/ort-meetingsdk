/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Navigation } from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { ZoomSDKProvider } from '@zoom/meetingsdk-react-native';
import { ZOOM_JWT_TOKEN } from './config';
import React from 'react';

function App() {
  return (
    <NavigationContainer>
      <ZoomSDKProvider
        config={{
          jwtToken: ZOOM_JWT_TOKEN,
          domain: "zoom.us",
          enableLog: true,
          logSize: 5,
        }}
      >
        <Navigation />
      </ZoomSDKProvider>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent('ZoomMeetingSDKExample', () => App);

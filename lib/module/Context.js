import { createContext } from 'react';
function throwProviderError() {
  throw new Error('Cannot access the Zoom SDK without a ZoomSDKProvider component wrapping your entire application.');
}
export const Context = /*#__PURE__*/createContext({
  joinMeeting: throwProviderError,
  startMeeting: throwProviderError,
  updateMeetingSetting: throwProviderError,
  isInitialized: throwProviderError,
  cleanup: throwProviderError
});
//# sourceMappingURL=Context.js.map
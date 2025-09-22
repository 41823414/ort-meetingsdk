"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Context = void 0;
var _react = require("react");
function throwProviderError() {
  throw new Error('Cannot access the Zoom SDK without a ZoomSDKProvider component wrapping your entire application.');
}
const Context = exports.Context = /*#__PURE__*/(0, _react.createContext)({
  joinMeeting: throwProviderError,
  startMeeting: throwProviderError,
  updateMeetingSetting: throwProviderError,
  isInitialized: throwProviderError,
  cleanup: throwProviderError
});
//# sourceMappingURL=Context.js.map
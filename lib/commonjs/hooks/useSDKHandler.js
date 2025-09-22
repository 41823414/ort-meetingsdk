"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSDKHandler = useSDKHandler;
var _react = require("react");
var _ZoomSDK = require("../native/ZoomSDK");
const DEFAULT_CONFIG = {
  domain: 'zoom.us',
  enableLog: true,
  logSize: 5
};
function useSDKHandler(config = {}) {
  const SDKHandler = (0, _react.useRef)(new _ZoomSDK.ZoomSDK());
  const [isInited, setIsInited] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (!isInited) {
      SDKHandler.current.initSDK({
        ...DEFAULT_CONFIG,
        ...config
      });
      setIsInited(true);
    }
  }, [config, isInited]);
  const isInitialized = (0, _react.useCallback)(() => {
    return SDKHandler.current.isInitialized();
  }, []);
  const updateMeetingSetting = (0, _react.useCallback)(config => {
    SDKHandler.current.updateMeetingSetting(config);
  }, []);
  const joinMeeting = (0, _react.useCallback)(config => {
    return SDKHandler.current.joinMeeting(config);
  }, []);
  const startMeeting = (0, _react.useCallback)(config => {
    return SDKHandler.current.startMeeting(config);
  }, []);
  const cleanup = (0, _react.useCallback)(() => {
    SDKHandler.current.cleanup();
  }, []);
  return {
    isInitialized,
    updateMeetingSetting,
    joinMeeting,
    startMeeting,
    cleanup
  };
}
//# sourceMappingURL=useSDKHandler.js.map
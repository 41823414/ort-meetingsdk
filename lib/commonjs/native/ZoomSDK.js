"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomSDK = void 0;
var _reactNative = require("react-native");
var _validation = require("../utils/validation");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const {
  RNZoomSDK
} = _reactNative.NativeModules;
class ZoomSDK {
  constructor() {
    _defineProperty(this, "updateMeetingSetting", RNZoomSDK.updateMeetingSetting);
    _defineProperty(this, "isInitialized", RNZoomSDK.isInitialized);
    _defineProperty(this, "cleanup", RNZoomSDK.cleanup);
  }
  initSDK(config) {
    (0, _validation.validateNonEmptyStringProp)(config, 'initConfig', 'domain');
    (0, _validation.validateBooleanProp)(config, 'initConfig', 'enableLog');
    return RNZoomSDK.initSDK(config);
  }
  joinMeeting(config) {
    (0, _validation.validateRequiredStringProp)(config, 'JoinMeetingConfig', 'userName');
    (0, _validation.validateRequiredStringProp)(config, 'JoinMeetingConfig', 'meetingNumber');
    return RNZoomSDK.joinMeeting(config);
  }
  startMeeting(config) {
    (0, _validation.validateRequiredStringProp)(config, 'StartMeetingConfig', 'userName');
    (0, _validation.validateRequiredStringProp)(config, 'StartMeetingConfig', 'zoomAccessToken');
    return RNZoomSDK.startMeeting(config);
  }
}
exports.ZoomSDK = ZoomSDK;
//# sourceMappingURL=ZoomSDK.js.map
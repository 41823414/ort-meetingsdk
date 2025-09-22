function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { NativeModules } from 'react-native';
import { validateNonEmptyStringProp, validateRequiredStringProp, validateBooleanProp } from '../utils/validation';
const {
  RNZoomSDK
} = NativeModules;
export class ZoomSDK {
  constructor() {
    _defineProperty(this, "updateMeetingSetting", RNZoomSDK.updateMeetingSetting);
    _defineProperty(this, "isInitialized", RNZoomSDK.isInitialized);
    _defineProperty(this, "cleanup", RNZoomSDK.cleanup);
  }
  initSDK(config) {
    validateNonEmptyStringProp(config, 'initConfig', 'domain');
    validateBooleanProp(config, 'initConfig', 'enableLog');
    return RNZoomSDK.initSDK(config);
  }
  joinMeeting(config) {
    validateRequiredStringProp(config, 'JoinMeetingConfig', 'userName');
    validateRequiredStringProp(config, 'JoinMeetingConfig', 'meetingNumber');
    return RNZoomSDK.joinMeeting(config);
  }
  startMeeting(config) {
    validateRequiredStringProp(config, 'StartMeetingConfig', 'userName');
    validateRequiredStringProp(config, 'StartMeetingConfig', 'zoomAccessToken');
    return RNZoomSDK.startMeeting(config);
  }
}
//# sourceMappingURL=ZoomSDK.js.map
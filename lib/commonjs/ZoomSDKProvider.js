"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomSDKProvider = void 0;
var _react = _interopRequireDefault(require("react"));
var _useSDKHandler = require("./hooks/useSDKHandler");
var _Context = require("./Context");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ZoomSDKProvider = ({
  config,
  children
}) => {
  const zoom = (0, _useSDKHandler.useSDKHandler)(config);
  return /*#__PURE__*/_react.default.createElement(_Context.Context.Provider, {
    value: zoom
  }, children);
};
exports.ZoomSDKProvider = ZoomSDKProvider;
//# sourceMappingURL=ZoomSDKProvider.js.map
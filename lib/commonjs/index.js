"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Context: true,
  ZoomSDKProvider: true,
  useZoom: true
};
Object.defineProperty(exports, "Context", {
  enumerable: true,
  get: function () {
    return _Context.Context;
  }
});
Object.defineProperty(exports, "ZoomSDKProvider", {
  enumerable: true,
  get: function () {
    return _ZoomSDKProvider.ZoomSDKProvider;
  }
});
Object.defineProperty(exports, "useZoom", {
  enumerable: true,
  get: function () {
    return _hooks.useZoom;
  }
});
var _Context = require("./Context");
var _ZoomSDKProvider = require("./ZoomSDKProvider");
var _hooks = require("./hooks");
Object.keys(_hooks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _hooks[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hooks[key];
    }
  });
});
//# sourceMappingURL=index.js.map
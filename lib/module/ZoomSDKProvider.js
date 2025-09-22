import React from 'react';
import { useSDKHandler } from './hooks/useSDKHandler';
import { Context } from './Context';
export const ZoomSDKProvider = ({
  config,
  children
}) => {
  const zoom = useSDKHandler(config);
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: zoom
  }, children);
};
//# sourceMappingURL=ZoomSDKProvider.js.map
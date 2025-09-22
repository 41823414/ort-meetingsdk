import React from 'react';
import type { InitConfig } from './native/ZoomSDK';
interface Props {
    config: InitConfig;
    children?: React.ReactNode;
}
export declare const ZoomSDKProvider: React.FC<Props>;
export {};

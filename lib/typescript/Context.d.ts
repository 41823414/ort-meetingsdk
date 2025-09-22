/// <reference types="react" />
import type { StartMeetingConfig, JoinMeetingConfig, MeetingSettingsConfig } from './native/ZoomSDK';
export interface ZoomSDKContext {
    joinMeeting: (config: JoinMeetingConfig) => Promise<number>;
    startMeeting: (config: StartMeetingConfig) => Promise<number>;
    updateMeetingSetting: (config: MeetingSettingsConfig) => void;
    isInitialized: () => Promise<boolean>;
    cleanup: () => void;
}
export declare const Context: import("react").Context<ZoomSDKContext>;

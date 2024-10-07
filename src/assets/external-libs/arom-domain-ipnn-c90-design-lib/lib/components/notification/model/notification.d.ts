export interface EsnNotificationModel {
    notificationId: string;
    technical: any;
    payload?: any;
    recipient?: EsnNotificationRecipient;
    concernedUser?: EsnNotificationConcernedUser;
    title?: string;
    content?: string;
    preview?: any;
    sendDate?: Date;
    action?: EsnNotificationAction;
    criticality?: EsnNotificationCriticalityEnum;
    category?: EsnNotificationCategory;
    subCategory?: EsnNotificationCategory;
    view?: EsnNotificationView;
    isViewed: boolean;
    isRead: boolean;
}
export interface EsnNotificationRecipient {
    tags: string[];
    users: string[];
    groups: string[];
}
export interface EsnNotificationConcernedUser {
    firstName: string;
    lastName: string;
    nni: string;
}
export interface EsnNotificationAction {
    label: string;
    type: EsnNotificationActionTypeEnum;
    link: EsnNotificationActionLink;
}
export declare enum EsnNotificationActionTypeEnum {
    PRIMARY = "PRIMARY",
    SECONDARY = "SECONDARY"
}
export interface EsnNotificationActionLink {
    code: string;
    arguments: {
        key: string;
        value: string;
    }[];
}
export declare enum EsnNotificationCriticalityEnum {
    URGENT = "URGENT",
    IMPORTANT = "IMPORTANT",
    NONE = "NONE"
}
export interface EsnNotificationCategory {
    type: EsnNotificationCategoryTypeEnum;
    level: EsnNotificationCategoryLevelEnum;
}
export declare enum EsnNotificationCategoryTypeEnum {
    REMINDER = "REMINDER",
    FORM = "FORM",
    NOTIFY = "NOTIFY",
    DONE = "DONE",
    EXCLAMATION = "EXCLAMATION",
    ANNOUNCEMENT = "ANNOUNCEMENT",
    COMMENT = "COMMENT"
}
export declare enum EsnNotificationCategoryLevelEnum {
    INFO = "INFO",
    SUCCESS = "SUCCESS",
    WARN = "WARN",
    ERROR = "ERROR",
    SYSTEM = "SYSTEM"
}
export interface EsnNotificationView {
    slot1: EsnNotificationViewType;
    slot2: EsnNotificationViewType;
    slot3: EsnNotificationViewType;
}
export declare enum EsnNotificationViewType {
    USER = "USER",
    CATEGORY = "CATEGORY",
    SUBCATEGORY = "SUBCATEGORY",
    CRITICALITY = "CRITICALITY",
    NONE = "NONE"
}
export declare const NOTIFICATION_CRITICALITY_LABELS: {
    [key in EsnNotificationCriticalityEnum]: string;
};

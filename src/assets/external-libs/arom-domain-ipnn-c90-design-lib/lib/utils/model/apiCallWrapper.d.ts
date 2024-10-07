import { ApiErrorDisplay } from './apiError';
export interface ApiCallWrapper {
    error?: ApiErrorDisplay;
    resp?: any;
}
export interface WrappedApiCall<T> {
    error?: ApiErrorDisplay;
    resp?: T;
}
export interface ApiCallWrapperOptions {
    callLabel?: string;
    notifyError?: boolean;
    notifySuccess?: boolean;
    successLabel?: string;
    uploadToaster?: boolean;
}

export interface ApiError {
    code?: string;
    description?: string;
    severity?: ApiError.SeverityEnum;
    type?: ApiError.TypeEnum;
}
export declare namespace ApiError {
    type SeverityEnum = 'INFO' | 'WARNING' | 'ERROR';
    const SeverityEnum: {
        INFO: SeverityEnum;
        WARNING: SeverityEnum;
        ERROR: SeverityEnum;
    };
    type TypeEnum = 'TECHNICAL' | 'FUNCTIONAL';
    const TypeEnum: {
        TECHNICAL: TypeEnum;
        FUNCTIONAL: TypeEnum;
    };
}
export interface ApiErrorDisplay {
    message: string;
    retryable?: boolean;
    code?: number;
}

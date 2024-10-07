export declare abstract class EsnFileInputConfig {
    FILE_PROVIDER: string;
    FILE_MAX_SIZE: number;
    MAX_NB_FILES: number;
    FileTypesMap: {
        [key: string]: {
            type: string[];
            label: string;
        };
    };
}
export declare class EsnFileInputDefaultConfig implements EsnFileInputConfig {
    FILE_PROVIDER: string;
    FILE_MAX_SIZE: number;
    MAX_NB_FILES: number;
    FileTypesMap: {
        [key: string]: {
            type: string[];
            label: string;
        };
    };
}

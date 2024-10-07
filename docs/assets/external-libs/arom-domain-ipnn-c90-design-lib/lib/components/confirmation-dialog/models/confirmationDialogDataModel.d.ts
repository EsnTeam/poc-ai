export interface ConfirmationDialogDataModel {
    title: string;
    message: string;
    importantMessage?: string;
    showloader: boolean;
    cancelLabel?: string;
    confirmLabel?: string;
    paragraphs?: string[];
    noCancelBtn?: boolean;
    thirdButton?: boolean;
    thirdButtonLabel?: string;
    contentTemplate?: string;
    templateStyles?: {
        [className in string]: string;
    };
}

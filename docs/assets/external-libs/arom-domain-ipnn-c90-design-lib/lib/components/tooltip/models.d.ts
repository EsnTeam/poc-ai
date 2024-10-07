export declare type EsnTooltipPosition = 'left' | 'right' | 'above' | 'below' | 'before' | 'after';
export declare type EsnTooltipTouchGestures = 'auto' | 'on' | 'off';
export declare class EsnTooltip {
    esnTooltipMessage: string;
    esnTooltipDisable?: boolean;
    esnTooltipHideDelay?: number;
    esnTooltipShowDelay?: number;
    esnTooltipPosition?: EsnTooltipPosition;
    esnTooltipClass?: string | string[] | Set<string> | {
        [key: string]: any;
    } | null | undefined;
    esnTooltipTouchGestures?: EsnTooltipTouchGestures;
}

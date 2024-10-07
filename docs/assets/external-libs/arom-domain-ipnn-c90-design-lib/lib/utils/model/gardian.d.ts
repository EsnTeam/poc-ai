export interface WebSSO {
    authId: string;
    template: string;
    stage: string;
    header: string;
    callbacks: [
        {
            type: string;
            output: [
                {
                    name: string;
                    value: string;
                }
            ];
            input: [
                {
                    name: string;
                    value: string;
                }
            ];
        },
        {
            type: string;
            output: [
                {
                    name: string;
                    value: string;
                }
            ];
            input: [
                {
                    name: string;
                    value: string;
                }
            ];
        }
    ];
}
export interface UserInfo {
    sub: string;
    name: string;
    isMemberOf: Array<string>;
}
export interface GardianAccess {
    access_token: string;
    scope: string;
    id_token: string;
    token_type: string;
    expires_in: number;
    nonce: string;
    expires_timestamp?: number;
}
export interface AromAccess {
    scope: string;
    access_token: string;
    token_type: string;
    refresh_token: string;
    expires_in: number;
    expires_timestamp?: number;
}

export interface PageInfo {
    number?: number;
    size?: number;
    totalElements?: number;
    totalPages?: number;
}
export interface ApiResponse<T> {
    content?: T;
    errors?: Array<any>;
    page?: PageInfo;
}

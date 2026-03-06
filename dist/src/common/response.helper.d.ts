export declare function successResponse<T>(message: string, data?: T): {
    status: string;
    message: string;
    data: T;
};
export declare function failedResponse(message: string, data?: any): {
    status: string;
    message: string;
    data: any;
};

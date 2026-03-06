export declare class FilterBukuDto {
    title?: string;
    author?: string;
    category?: string;
    year?: number;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
    onlyAvailable?: boolean;
}

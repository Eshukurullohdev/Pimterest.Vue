import * as typeCheckers from "./typeCheckers";
export default function createClient(apiKey: string): {
    typeCheckers: typeof typeCheckers;
    photos: {
        search(params: import("./types").PaginationParams & {
            query: string;
        }): Promise<import("./types").PhotosWithTotalResults | import("./types").ErrorResponse>;
        curated(params?: import("./types").PaginationParams): Promise<import("./types").Photos | import("./types").ErrorResponse>;
        show({ id }: {
            id: string | number;
        }): Promise<import("./types").ErrorResponse | import("./types").Photo>;
        random(): Promise<import("./types").ErrorResponse | import("./types").Photo>;
    };
    videos: {
        search(params: import("./types").PaginationParams & import("./types").VideoFilterParams & {
            query: string;
        }): Promise<import("./types").ErrorResponse | import("./types").Videos>;
        popular(params?: import("./types").PaginationParams & import("./types").VideoFilterParams): Promise<import("./types").ErrorResponse | import("./types").Videos>;
        show({ id }: {
            id: string | number;
        }): Promise<import("./types").Video>;
    };
    collections: {
        all(params?: import("./types").PaginationParams): Promise<import("./types").ErrorResponse | {
            page: number;
            per_page: number;
            collections: import("./types").Collection[];
        }>;
        media({ id, ...params }: import("./types").PaginationParams & {
            id: string | number;
            type?: "photos" | "videos" | undefined;
        }): Promise<import("./types").ErrorResponse | {
            page: number;
            per_page: number;
            total_results: number;
            media: ((import("./types").Photo & {
                type: "Video" | "Photo";
            }) | (import("./types").Video & {
                type: "Video" | "Photo";
            }))[];
        }>;
        featured(params?: import("./types").PaginationParams): Promise<import("./types").ErrorResponse | {
            page: number;
            per_page: number;
            collections: import("./types").Collection[];
        }>;
    };
};

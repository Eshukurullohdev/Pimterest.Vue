import { Collection, PaginationParams, ErrorResponse, Medium } from "./types";
declare type AllReturn = {
    page: number;
    per_page: number;
    collections: Collection[];
} | ErrorResponse;
declare type MediaReturn = {
    page: number;
    per_page: number;
    total_results: number;
    media: (Medium & {
        type: "Video" | "Photo";
    })[];
} | ErrorResponse;
declare type FeaturedReturn = {
    page: number;
    per_page: number;
    collections: Collection[];
} | ErrorResponse;
export default function generateCollectionEndpoints(apiKey: string): {
    all(params?: PaginationParams): Promise<AllReturn>;
    media({ id, ...params }: PaginationParams & {
        id: string | number;
        type?: "photos" | "videos" | undefined;
    }): Promise<MediaReturn>;
    featured(params?: PaginationParams): Promise<FeaturedReturn>;
};
export {};

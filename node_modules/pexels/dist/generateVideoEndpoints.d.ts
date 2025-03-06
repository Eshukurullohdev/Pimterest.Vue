import { PaginationParams, ErrorResponse, Video, Videos, VideoFilterParams } from "./types";
declare type SearchReturn = Videos | ErrorResponse;
export default function generatePhotoEndpoints(apiKey: string): {
    search(params: PaginationParams & VideoFilterParams & {
        query: string;
    }): Promise<SearchReturn>;
    popular(params?: PaginationParams & VideoFilterParams): Promise<SearchReturn>;
    show({ id }: {
        id: string | number;
    }): Promise<Video>;
};
export {};

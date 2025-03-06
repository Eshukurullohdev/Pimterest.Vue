import { Photo, PaginationParams, ErrorResponse, Photos, PhotosWithTotalResults } from "./types";
declare type SearchReturn = PhotosWithTotalResults | ErrorResponse;
declare type CuratedReturn = Photos | ErrorResponse;
declare type ShowReturn = Photo | ErrorResponse;
export default function generatePhotoEndpoints(apiKey: string): {
    search(params: PaginationParams & {
        query: string;
    }): Promise<SearchReturn>;
    curated(params?: PaginationParams): Promise<CuratedReturn>;
    show({ id }: {
        id: string | number;
    }): Promise<ShowReturn>;
    random(): Promise<ShowReturn>;
};
export {};

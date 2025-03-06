import { Photos, Videos, ErrorResponse } from "./types";
/**
 * A helper function to determine if the object is a valid Photo response
 */
export declare function isPhotos(x: any): x is Photos;
/**
 * A helper function to determine if the object is a valid Video response
 */
export declare function isVideos(x: any): x is Videos;
/**
 * A helper function to determine if the object was an error response
 */
export declare function isError(x: any): x is ErrorResponse;

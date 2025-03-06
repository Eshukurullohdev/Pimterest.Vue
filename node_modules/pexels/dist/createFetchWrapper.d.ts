import { Params } from "./types";
declare type AllowedTypes = "photo" | "video" | "collections";
export default function createFetchWrapper(apiKey: string, type: AllowedTypes): <T extends Params>(path: string, params?: T | undefined) => Promise<any>;
export {};

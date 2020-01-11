import { actionType } from '../action';

export interface IState {
    gifs: IGif[];
    gif: IGif | {};
}

export interface IAction<T = undefined> {
    payload: T;
    type: actionType;
}

export interface IData<T = IGif[]> {
    data: T;
    pagination: IPagination;
    meta: IMeta;
}

export interface IGif {
    type: IType;
    id: string;
    url: string;
    slug: string;
    bitly_gif_url: string;
    bitly_url: string;
    embed_url: string;
    username: string;
    source: string;
    title: string;
    rating: IRating;
    content_url: string;
    source_tld: string;
    source_post_url: string;
    is_sticker: number;
    import_datetime: string;
    trending_datetime: string;
    images: IImages;
    user?: IUser;
    analytics: IAnalytics;
}

export interface IAnalytics {
    onload: IOnclick;
    onclick: IOnclick;
    onsent: IOnclick;
}

export interface IOnclick {
    url: string;
}

export interface IImages {
    downsized_large: IThe480WStill;
    fixed_height_small_still: IThe480WStill;
    original: { [key: string]: string };
    fixed_height_downsampled: { [key: string]: string };
    downsized_still: IThe480WStill;
    fixed_height_still: IThe480WStill;
    downsized_medium: IThe480WStill;
    downsized: IThe480WStill;
    preview_webp: IThe480WStill;
    original_mp4: DownsizedSmall;
    fixed_height_small: { [key: string]: string };
    fixed_height: { [key: string]: string };
    downsized_small: DownsizedSmall;
    preview: DownsizedSmall;
    fixed_width_downsampled: { [key: string]: string };
    fixed_width_small_still: IThe480WStill;
    fixed_width_small: { [key: string]: string };
    original_still: IThe480WStill;
    fixed_width_still: IThe480WStill;
    looping: { [key: string]: string };
    fixed_width: { [key: string]: string };
    preview_gif: IThe480WStill;
    '480w_still': IThe480WStill;
    hd?: DownsizedSmall;
}

export interface IThe480WStill {
    url: string;
    width: string;
    height: string;
    size?: string;
}

export interface DownsizedSmall {
    height: string;
    mp4: string;
    mp4_size: string;
    width: string;
}

export enum IRating {
    G = 'g',
    PG = 'pg'
}

export enum IType {
    GIF = 'gif'
}

export interface IUser {
    avatar_url: string;
    banner_image: string;
    banner_url: string;
    profile_url: string;
    username: string;
    display_name: string;
    is_verified: boolean;
}

export interface IMeta {
    status: number;
    msg: string;
    response_id: string;
}

export interface IPagination {
    total_count: number;
    count: number;
    offset: number;
}

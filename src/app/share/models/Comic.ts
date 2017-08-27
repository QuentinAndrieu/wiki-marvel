import { Price } from './Price';
import { Thumbnail } from './Thumbnail';
import { DateAPI } from './Date';
import { AppareanceSeries, AppareanceCharacters, AppareanceStories, AppareanceEvents, AppareanceCreators } from './Appearance';
import { Urls } from './Urls';
import { GenericResponseAPI, GenericDataAPI } from './GenericResponseAPI';

export class Comic {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description: string;
    modified: string;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: TextObject[];
    resourceURI: string;
    urls: Urls[];
    series: AppareanceSeries;
    dates: DateAPI[];
    prices: Price[];
    thumbnail: Thumbnail;
    creators: AppareanceCreators;
    characters: AppareanceCharacters;
    stories: AppareanceStories;
    events: AppareanceEvents
    // variants: [];
    // collections: [];
    // collectedIssues: [];
    // images: [];
}

export class ComicListData extends GenericDataAPI {
    results: Comic[];
}

export class ComicListResponseAPI extends GenericResponseAPI {
    data: ComicListData;
}


export class TextObject {
    type: string;
    language: string;
    text: string;
}





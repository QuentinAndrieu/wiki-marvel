import { AppareanceComics, AppareanceEvents, AppareanceSeries, AppareanceStories } from './Appearance';
import { Urls} from './Urls';


export class Character {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    resourceURI: string;
    comics: AppareanceComics;
    series: AppareanceSeries;
    stories: AppareanceStories;
    events: AppareanceEvents;
    urls: Urls[];
}

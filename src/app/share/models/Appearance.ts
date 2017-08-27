import {ItemAbstract, ItemStories} from './Item';

export class AppareanceAbstract {
    available: number;
    collectionURI: string;
    returned: number;
}

export class AppareanceCharacters extends AppareanceAbstract {
    items: ItemAbstract[];
}

export class AppareanceCreators extends AppareanceAbstract {
    items: ItemAbstract[];
}

export class AppareanceComics extends AppareanceAbstract {
    items: ItemAbstract[];
}

export class AppareanceSeries extends AppareanceAbstract {
    items: ItemAbstract[];
}

export class AppareanceStories extends AppareanceAbstract {
    items: ItemStories[];
}

export class AppareanceEvents extends AppareanceAbstract {
    items: ItemAbstract[];
}

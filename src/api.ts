const baseURL: string = 'https://kitsu.io/api/edge/';

const endpoints = {
    trending: 'trending/anime?limit=20',
    adventure: 'anime?filter[categories]=adventure&page[limit]=20',
    topRated: 'anime?page%5Blimit%5D=20&sort=-average_rating',
    comedy: 'anime?filter[categories]=comedy&page[limit]=20',
    fantasy: 'anime?filter[categories]=fantasy&page[limit]=20',
    action: 'anime?filter[categories]=action&page[limit]=20',
    search: 'anime?filter[text]=',
};

export { baseURL, endpoints };

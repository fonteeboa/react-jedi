const API_URL = 'https://swapi.dev/api/';
const getPlanetData = async (path) => {
    try {
        const req = await fetch (API_URL + path);
        const response = await req.json();
        return response.results ? response.results : response;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export default {
    PlanetData: async () => [
        {
            title: 'films',
            items: await getPlanetData('films/')
        },
        {
            title: 'starships',
            items: await getPlanetData('starships/')
        },
        {
            title: 'vehicles',
            items: await getPlanetData('vehicles/')
        },
        {
            title: 'planets',
            items: await getPlanetData('planets/')
        },
        {
            title: 'species',
            items: await getPlanetData('species/')
        },
        {
            title: 'people',
            items: await getPlanetData('people/')
        }
    ]
}

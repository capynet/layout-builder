export default class Mock {
    private url = 'http://localhost:3000';

    static endpoints = {
        'layout': 'layout',
        'components': 'components'
    };


    async get<T>(endpoint: string, params: { key: string; value: string }[] = []): Promise<T> {
        const UrlApi = new URL(`${this.url}/${endpoint}`);

        for (const param of params) {
            UrlApi.searchParams.append(param.key, param.value);
        }

        return await (await fetch(UrlApi.toString())).json();
    }
}
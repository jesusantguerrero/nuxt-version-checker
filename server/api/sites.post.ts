const sites = [
    {
        title: 'Vue.js',
        url: 'https://vuejs.org/',
        selector : '',
        actions: [{
            action: '',
            value: '',
            index: 0
        }],
        results: [],
    }
]

export default defineEventHandler(async (event) => {
    const body = await useBody(event)
    sites.push(body)
    return sites
})
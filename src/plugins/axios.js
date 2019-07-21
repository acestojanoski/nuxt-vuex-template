export default function ({ $axios }) {
    $axios.setHeader('Content-Type', 'application/json');

    $axios.onRequest(config => {
        console.log('Making request to ' + config.url)
    })
}

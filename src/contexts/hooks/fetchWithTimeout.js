export default function (url, timeout = 300000) {
    console.log(url);
    console.log(timeout);
    return Promise.race([
        fetch(url),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('timeout')), timeout)
        )
    ]);
}
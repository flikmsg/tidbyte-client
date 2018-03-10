module.exports = async url => {
    try {
        if(fetch)
            return fetch(url)
        if(!require('os')) {
            require('whatwg-fetch')
            return fetch(url)
        }
    }catch(e) {} // probably node
    return require('node-fetch')(url)
}
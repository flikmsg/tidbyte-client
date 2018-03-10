const _fetch = require('./asyncFetch')
const URL = require('url-parse')
var encodeURIComponent = require('urlencode')

module.exports = class TidbyteClient {

    // defautlt server, feel free to use it :)
    constructor(url = 'lookup.flik.im') {
        this.url = url
    }
    get absolutePath() {
        let tempURL = URL('lookup.flik.im')
        // only allow HTTPS.
        tempURL.set('protocol', 'https:')
        return tempURL.href
    }

    async lookup(address = '') {
        const tempURL = this.absolutePath
        let resp
        try {
            resp = await _fetch(tempURL + '/' + encodeURIComponent(address))
            const j = (await resp.json())
            if(j.success && j.success == true)
                return j
            else
                throw(j)
        } catch(e) { throw(e) }
    }
}
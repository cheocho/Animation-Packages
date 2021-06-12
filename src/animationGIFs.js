const superagent = require('superagent')
const { applicationsHeaders } = require('../src/config')
const { URLConversion, URLUniversal } = require('../src/conversion')

module.exports.APIanimationGifs = async (categories, options = 0) => {

    const appendsHeaders = applicationsHeaders;
    const appends = []

    appendsHeaders['q'] = categories;
    appendsHeaders['pos'] = options; 

    const information = await (await superagent.get(URLConversion('/v1/search?', appendsHeaders))).body

    for (searchId in information.results) {
        appends.push(URLUniversal(information.results[searchId].media[0].gif.url))
    }

    return appends

}

module.exports.APIanimationLoopSearchGifs = async (categories, iterations = 1) => {

    const appends = []
    for (var i = 0; i < iterations; i++) {

        const searchJSONdata = await this.APIanimationGifs(categories, (50 * i))
        
        if (searchJSONdata) {
            appends.push(searchJSONdata)
        }

    }

    return appends

}
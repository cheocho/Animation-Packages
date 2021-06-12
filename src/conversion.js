const { applicationsPath } = require('../src/config')

module.exports.URLConversion = (methods, options) => {

    const events = new URLSearchParams()
    const searchParamsUrl = applicationsPath + methods; 

    for (option in options) {
        if (option in options) events.set(option, options[option])

    }

    return searchParamsUrl + events; 

}

module.exports.URLUniversal = (options) => {

    const replaceImagesId = String(options).split('/')
    const replaceUniversaLink = `https://media.tenor.com/images/${replaceImagesId[4]}/tenor.gif`
    
    return replaceUniversaLink

}
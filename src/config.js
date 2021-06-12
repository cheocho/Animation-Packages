
module.exports = {

    applicationsPath: 'https://api.tenor.com',
    applicationsHeaders: {
        anonid: 'MjU1NjIzMDg4Nw',
        platform: 'web', 
        key: 'JJHDC7UK73EH',
        locale: 'en',
        limit: 50,
        contentfilter: 'low'
    },
    applicationsTags: [
        'anime happy', 
        'anime kiss', 
        'anime cry'
    ],
    quantity: 5

}

module.exports.install = (messages) => {

    const installeDate = new Date();
    console.log(`[${installeDate.toDateString()}] ${messages}`)

}
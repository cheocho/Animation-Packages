const { APIanimationLoopSearchGifs } = require('./src/animationGIFs')
const { applications } = require('./config.json')
const { applicationsTags, quantity, install } = require('./src/config')

const knex = require('knex')({
    client: 'mysql',
    connection: applications
})

;
(async () => {

    applicationsTags.forEach(async (categories) => {
        
        const animations = await APIanimationLoopSearchGifs(categories)
        animations.forEach(animation => {

            animation.forEach(async (anime) => {
                await knex('animation').insert({ name: anime, description: categories })
            })

        })

    })

})()
const { Router } = require('express')
const router = Router()

router.get('/', async (req, res) => { 
    res.render('profile' , { 
        title: 'Профиль',
        isProfile: true
    })
})

module.exports = router
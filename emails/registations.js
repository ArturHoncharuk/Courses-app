const keys = require('../keys')

module.exports = function(email) { 
    return {
        to: email,
        from: keys.EMAIL_FROM,
        subject: 'Account has been created',
        html: `
            <h1>Добро пожаловать в наш магазин</h1>
            <p>Аккант был успешно создан с email - ${email}</p>
            <hr />
            <a href="${keys.BASE_URL}">Магазин курсов</a>
        `
    }
}
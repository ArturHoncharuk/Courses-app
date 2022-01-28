const keys = require('../keys')

module.exports = function(email, token) { 
    return {
        to: email,
        from: keys.EMAIL_FROM,
        subject: 'Восстановление пароля',
        html: `
            <h1>Вы забыли пароль?</h1>
            <p>Если вы не отправляли заявку на восстановление пароля - проигнорируйте данное письмо</p>
            <p>Иначе нажмите на ссылку ниже:</p>
            <a href="${keys.BASE_URL}/auth/password/${token}">Восстановить доступ</a>
            <hr />
            <a href="${keys.BASE_URL}">Магазин курсов</a>
        `
    }
}
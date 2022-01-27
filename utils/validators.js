const { body } = require("express-validator");
const User = require('../models/user')

exports.registerValidators = [
    body("email").isEmail().withMessage("Введите корректный email").custom(async(value, {req}) => {
        try {
            const user = await User.findOne({email:value})
            if (user) { 
                return Promise.reject('Пользователь уже зарегистрирован')
            }
        } catch (e) { 
            console.log(e)
        }
    }),
    body("password", "Пароль должен быть минимум 8 символов")
        .isLength({ min: 8, max: 56 })
        .isAlphanumeric(),
    body("confirm").custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error("Пароли должны совпадать");
        }
        return true;
    }),
    body("name")
        .isLength({ min: 3 })
        .withMessage("Имя должно быть минимум 3 символа"),
];

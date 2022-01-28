const { body } = require("express-validator");
const User = require("../models/user");

exports.registerValidators = [
    body("email")
        .isEmail()
        .withMessage("Введите корректный email")
        .custom(async (value, { req }) => {
            try {
                const user = await User.findOne({ email: value });
                if (user) {
                    return Promise.reject("Пользователь уже зарегистрирован");
                }
            } catch (e) {
                console.log(e);
            }
        }),
    body("password", "Пароль должен быть минимум 8 символов")
        .isLength({ min: 8, max: 56 })
        .isAlphanumeric()
        .trim(),
    body("confirm").custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error("Пароли должны совпадать");
        }
        return true;
    })
    .trim(),
    body("name")
        .isLength({ min: 3 })
        .withMessage("Имя должно быть минимум 3 символа")
        .trim(),
];



exports.courseValidators = [
    body('title').isLength({min: 3}).withMessage('Минимальная длина название 3 символа').trim(),
    body('price').isNumeric().withMessage('Введите коректную цену'),
    body('img', 'Введите коректный URL').isURL()
]
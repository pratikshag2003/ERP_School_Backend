const {body ,check} =require('express-validator');

exports.registrationValidator =[
    body('name','Name is required').not().isEmpty(),
    body('email','Please include a valid email').isEmail().normalizeEmail({
        gmail_remove_dots:true

    }),
    body('password','Password must be greater than 6 characters and conatins at least one uppercase letter , one lowercase letter , and one number ,and one special character')
    .isStrongPassword({
        minLength:6,
        minUppercase:1,
        minLowercase:1,
        minNumbers:1,
        minSymbols :1

    }),
    body('role')
    .isIn(['Teacher','submitted']).withMessage('Invalid status value')
];
exports.loginValidator =[
    check('name','Name is required').not().isEmpty(),
    check('email','Please include a valid email').isEmail().normalizeEmail({
        gmail_remove_dots:true

    }),
    check('password','Password must be greater than 6 characters and conatins at least one uppercase letter , one lowercase letter , and one number ,and one special character')
    .isStrongPassword({
        minLength:6,
        minUppercase:1,
        minLowercase:1,
        minNumbers:1,
        minSymbols :1

    }),
];
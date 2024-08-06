export const userCredentials = {
    validUser: {
        username: 'tomsmith',
        password: 'SuperSecretPassword!',
        message: 'You logged into a secure area!'
    },
    invalidUser: {
        username: 'wronguser',
        password: 'SuperSecretPassword!',
        message: 'Your username is invalid!'
    },
    invalidPassword: {
        username: 'tomsmith',
        password: 'wrongPassword!',
        message: 'Your password is invalid!'
    },
    blankUser: {
        username: '',
        password: 'SuperSecretPassword!',
        message: 'Your username is invalid!'
    },
    blankPassword: {
        username: 'tomsmith',
        password: '',
        message: 'Your password is invalid!'
    },
    blankBoth: {
        username: '',
        password: '',
        message: 'Your username is invalid!'
    }
};

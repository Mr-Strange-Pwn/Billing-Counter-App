const crypto = require('crypto');
var uniqid = require('uniqid');

const getHashedPassword = (password) => {
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(password).digest('base64');
    return hash;
}

const generateAuthToken = () => {
    return crypto.randomBytes(30).toString('hex');
}

let users = []
let authTokens = {}

exports.register = (req, res) => {
    const { fullName, email, mobileNumber, password } = req.body
    let hashPassword = getHashedPassword(password)
    let user = { id: uniqid('', '-BC-P'), fullName, email, mobileNumber, password: hashPassword }
    let existEmail = users.some(User => User.email == user.email)


    if (existEmail) {
        let userName = users.filter(User => User.email == user.email)
        res.send(` email: ${user.email} is already used by ${userName[0].fullName}`)
    }
    else {
        res.send(`${fullName} is registered`)
        users.push(user)
    }

}

exports.login = (req, res) => {
    const { email, password } = req.body
    let isValid = false
    if (users.some(User => User.email == email)) {
        let user = users.filter(User => User.email == email)
        console.log('user', user)
        if (getHashedPassword(password) == user[0].password) {
            isValid = true
        }
        else {
            res.send(" incorrect password")
        }
    } else {
        res.send("user dont exist !")
    }

    if (isValid) {

        // performing further actions hear for log in 
        const authToken = generateAuthToken();
        let user = users.filter(User => User.email == email)
        // Store authentication token
        authTokens[authToken] = user;

        // Setting the auth token in cookies
        res.cookie('AuthToken', authToken);
        console.log("auth token : ", authTokens)
        res.json(authToken)

    }
}
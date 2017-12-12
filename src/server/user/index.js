import passport from 'passport'
import bcrypt from 'bcrypt'
import _ from 'lodash'

import AuthStrategy from './AuthStrategy'
import User from './User'


export default function initUsers(app) {
    passport.use('local', new AuthStrategy())
    passport.serializeUser((user, done) => done(null, user.email))
    passport.deserializeUser((email, done) => done(null, email))

    app.post('/login', passport.authenticate('local'), (req, res) => {
        const email = req.user
        res.send({email})
    })

    app.post('/signup', (req, res) => {
        const email = req.body.email.toLowerCase()
        const password = bcrypt.hashSync(req.body.password, 2)
        const user = {email, password}

        User.find({email})
            .then(userList => {
                if (!_.isEmpty(userList)) {
                    throw('email already in use')
                }
            })
            .then(() => new User(user).save())
            .then(() => {
                new Promise((resolve, reject) => {
                    req.login(user, err => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(user)
                        }
                    })
                })
            })
            .then(() => res.send({email}))
            .catch(err => {
                console.error(err)
                res.sendStatus(400)
            })
    })

    function ensureAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
            next()
        } else {
            res.sendStatus(401)
        }
    }

    app.get('/user', ensureAuthenticated, (req, res) => {
        res.send(req.user)
    })

    return ensureAuthenticated
}
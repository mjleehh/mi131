import Strategy from 'passport-strategy'
import bcrypt from 'bcrypt'
import _ from 'lodash'
import User from './User'

export default class AuthStrategy extends Strategy {
    authenticate(req) {
        const {email, password} = req.body
        if (!_.isString(email) || !_.isString(password)) {
            this.fail()
            return
        }

        User.findOne({email: email.toLowerCase()})
            .then(user => {
                if (bcrypt.compareSync(password, user.password)) {
                    this.success(user)
                } else {
                    this.fail()
                }
            })
            .catch(this.fail)
    }
}

import mongoose from 'mongoose'
import 'mongoose-type-email'
import mongooseHiden from 'mongoose-hidden'

const userSchema = new mongoose.Schema({
    email: {
        required: true,
        type: mongoose.SchemaTypes.Email,
        index: true,
    },
    password: {
        required: true,
        type: String,
        hide: true,
    }
})

userSchema.plugin(mongooseHiden())

export default mongoose.model('user', userSchema)

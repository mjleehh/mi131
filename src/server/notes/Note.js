import mongoose from 'mongoose'
import 'mongoose-type-email'

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.SchemaTypes.Email,
        required: true,
    },
    body: String,
})

export default mongoose.model('note', noteSchema)

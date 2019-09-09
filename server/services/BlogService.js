import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const _model = new Schema({
    title: { type: String, required: true, max: 60 },
    summary: { type: String, required: true, max: 120 },
    author: { type: ObjectId, ref: 'User', required: true },
    img: { type: String, default: "https://placehold.it" },
    body: { type: String, default: "Random Junk" }
},
    { timestamps: true })

export default class BlogService {
    get repository() {
        return mongoose.model('blog', _model)
    }
}
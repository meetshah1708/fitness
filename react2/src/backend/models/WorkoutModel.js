import mongoose from 'mongoose'
const Schema = mongoose.Schema
const WorkoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true }); 
WorkoutSchema.set('toObject', { defaults: true });
WorkoutSchema.set('toJSON', { defaults: true });
export default mongoose.model("Workout",WorkoutSchema)
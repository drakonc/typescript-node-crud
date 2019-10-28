import { Schema, model } from "mongoose";

const TaskSchema = new Schema({
    titulo: { type: String, required: true, lowercase: true },
    descripcion: { type: String, required: true, lowercase: true }
});

export default model('Task', TaskSchema);
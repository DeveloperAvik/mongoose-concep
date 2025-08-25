import { model, Schema } from "mongoose";
import { IMango } from './mango.interface';

const mangoSchema = new Schema<IMango>({
    name: { type: String, required: true, trim: true },
    variety: { type: String, required: true, trim: true },
    origin: { type: String, required: true, trim: true },
    unit: { type: String, enum: ["KG", "Dozen", "Piece"], default: "KG", required: true },
    taste: { type: String, enum: ['sweet', 'sour', 'sweet and sour'], required: true },
    price: { type: Number, required: true, min: 0 },
    inStock: { type: String, required: true, trim: true },
    season: { type: String, enum: ["Summer", "Winter", "Spring", "Autumn"], required: true }
})

const Mango = model<IMango>('Mango', mangoSchema);

export default Mango;
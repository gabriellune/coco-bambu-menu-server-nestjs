import * as mongoose from 'mongoose';

export const DishSchema = new mongoose.Schema({
  name: String,
  description: String,
  ingredients: Array<string>,
  preparationTime: Number,
  preparationSteps: Array<string>,
  bigImageUrl: String,
  smallImageUrl: String,
});

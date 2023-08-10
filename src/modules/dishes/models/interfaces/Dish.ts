import { Document } from 'mongoose';

export interface Dish extends Document {
  readonly _id: string;
  readonly name: string;
  readonly description: string;
  readonly ingredients: string[];
  readonly preparationTime: number;
  readonly preparationSteps: string[];
}

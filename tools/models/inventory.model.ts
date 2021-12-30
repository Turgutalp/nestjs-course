import {AuditModel} from "./audit.model";

import * as mongoose from "mongoose";
import {ProductModel} from "./product.model";

export class InventoryModel{
    id: string;
    barcode: number;
    description: string;
    audit: AuditModel;
    type: InventoryModel;
    product: ProductModel;
}

export const InventorySchema = new mongoose.Schema({
    barcode: {
        type:Number,
        unique: [true, 'Inventory Barcode must be unique'],
        required: [true, 'Inventory Barcode is required'],

},

    description: {
        type: String,
        required: [true, 'Inventory description is required'],
    },
    audit:{type:Object},
    type: {type: Object},
    product: {
        type: Object,
        required:[true,'Inventory Product is required'],
    },


});
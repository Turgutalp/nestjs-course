import {UserModel} from "./user.model";
import {AuditModel} from "./audit.model";
import {ActivityModel} from "./activity.model";
import {InventoryModel} from "./inventory.model";
import * as mongoose from "mongoose";

export class TicketModel{

    id: string;
    name: string;
    description: string;
    type: TicketModel;
    responsible: UserModel;
    audit: AuditModel;
    activities: ActivityModel[];
    inventories: InventoryModel[];
}

export const TicketSchema = new mongoose.Schema({

    name: {
        type: String,
        unique: [true, 'Ticket Name must be unique'],
        required: [true, 'Ticket Name is required'],
    },
    description:{
        type:String,
        required:[true,'Ticket description is required'],

    },
    audit:{type:Object},
    type:{type:Object,required:[true,'Ticket Type is required']},
    responsible:{
        type:Object,
        required:[true,"Ticket responsible user is required"],

    },
    activities: {type:Array},
    inventories: {type:Array},

});
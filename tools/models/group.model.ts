import {AuditModel} from "./audit.model";
import * as mongoose from "mongoose";
import {RoleModel} from "./role.model";

export class GroupModel{
    _id: string;
    name: string;
    description: string;
    audit: AuditModel;
    roles: RoleModel[];
}

export const GroupSchema = new mongoose.Schema({
    name:{
        type: String,
        unique:[true,'Group Name must be unique'],
        required:[true, 'Group Name is required'],
    },

    description: {
        type: String,
        required: [true,'Group description is required'],
    },
    audit: { type: Object},
    role: {type: Array},
});
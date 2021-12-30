import {IsNotEmpty, Length} from "class-validator";
import {UserModel} from "../models/user.model";
import {AuditModel} from "../models/audit.model";

export class TicketDto{
    @IsNotEmpty()
    @Length(2,30)
    name: string;
    @IsNotEmpty()
    @Length(2,120)
    description: string;
    @IsNotEmpty()
    type: TicketTypeModel;
    @IsNotEmpty()
    responsible: UserModel;
    audit: AuditModel;
    activities: ActivityModel[];
    inventories: InventoryModel[];
}
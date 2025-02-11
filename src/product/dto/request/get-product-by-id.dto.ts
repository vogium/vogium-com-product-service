import { IsNotEmpty, IsString } from "class-validator";

export class GetProductByIdDTO{
    @IsString()
    @IsNotEmpty()
    private _id: string;

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    constructor(id: string) {
        this._id = id;
    }

}
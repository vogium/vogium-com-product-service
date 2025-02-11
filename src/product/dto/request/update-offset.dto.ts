import { IsNotEmpty, IsString, IsNumber } from "class-validator";
import { OffsetDTO } from "./offset.dto";

export class UpdateOffsetDTO {
    @IsNotEmpty()
    @IsString()
    private _id: string;

    @IsNotEmpty()
    @IsNumber()
    private _offset: OffsetDTO;

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get offset(): OffsetDTO {
        return this._offset;
    }

    public set offset(value: OffsetDTO) {
        this._offset = value;
    }

}
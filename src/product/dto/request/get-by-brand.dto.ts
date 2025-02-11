import { IsNotEmpty, IsString } from "class-validator";

export class GetProductByBrandDTO{

    @IsNotEmpty()
    @IsString()
    private _brand: string;

    public get brand(): string {
        return this._brand;
    }
    public set brand(value: string) {
        this._brand = value;
    }

}
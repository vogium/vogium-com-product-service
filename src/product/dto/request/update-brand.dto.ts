import { IsNotEmpty, IsString } from "class-validator";

export class UpdateBrandDTO {
    @IsNotEmpty()
    @IsString()
    private _id: string;
  
    @IsNotEmpty()
    @IsString()
    private _brand: string;
  
    // Getter & Setter
    public get id(): string {
      return this._id;
    }
  
    public set id(value: string) {
      this._id = value;
    }
  
    public get brand(): string {
      return this._brand;
    }
  
    public set brand(value: string) {
      this._brand = value;
    }
  }
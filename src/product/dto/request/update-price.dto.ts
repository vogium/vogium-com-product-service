import { IsNotEmpty, IsString } from "class-validator";

export class UpdatePriceDTO {
    @IsNotEmpty()
    @IsString()
    private _id: string;
  
    @IsNotEmpty()
    @IsString()
    private _price: string;
  
    public get id(): string {
      return this._id;
    }
  
    public set id(value: string) {
      this._id = value;
    }
  
    public get price(): string {
      return this._price;
    }
  
    public set price(value: string) {
      this._price = value;
    }
  }
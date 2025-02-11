import { IsNotEmpty, IsString, IsBoolean } from "class-validator";

export class UpdateStockDTO {
    @IsNotEmpty()
    @IsString()
    private _id: string;
  
    @IsNotEmpty()
    @IsBoolean()
    private _stock: boolean;
  
    public get id(): string {
      return this._id;
    }
  
    public set id(value: string) {
      this._id = value;
    }
  
    public get stock(): boolean {
      return this._stock;
    }
  
    public set stock(value: boolean) {
      this._stock = value;
    }
  }
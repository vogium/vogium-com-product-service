import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class UpdateVogCountDTO {
    @IsNotEmpty()
    @IsString()
    private _id: string;
  
    @IsNotEmpty()
    @IsNumber()
    private _vogCount: number;
  
    public get id(): string {
      return this._id;
    }
  
    public set id(value: string) {
      this._id = value;
    }
  
    public get vogCount(): number {
      return this._vogCount;
    }
  
    public set vogCount(value: number) {
      this._vogCount = value;
    }
  }
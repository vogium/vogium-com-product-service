import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class UpdateIndexDTO {
    @IsNotEmpty()
    @IsString()
    private _id: string;
  
    @IsNotEmpty()
    @IsNumber()
    private _index: number;
  
    // Getter & Setter
    public get id(): string {
      return this._id;
    }
  
    public set id(value: string) {
      this._id = value;
    }
  
    public get index(): number {
      return this._index;
    }
  
    public set index(value: number) {
      this._index = value;
    }
  }
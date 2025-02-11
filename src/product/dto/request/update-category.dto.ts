import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class UpdateCategoryDTO {
    @IsNotEmpty()
    @IsString()
    private _id: string;
  
    @IsNotEmpty()
    @IsNumber()
    private _category: number;
  
    // Getter & Setter
    public get id(): string {
      return this._id;
    }
  
    public set id(value: string) {
      this._id = value;
    }
  
    public get category(): number {
      return this._category;
    }
  
    public set category(value: number) {
      this._category = value;
    }
  }
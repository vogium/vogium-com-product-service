import { IsNotEmpty, IsString } from "class-validator";

export class UpdateTitleDTO {
    @IsNotEmpty()
    @IsString()
    private _id: string;
  
    @IsNotEmpty()
    @IsString()
    private _title: string;
  
    public get id(): string {
      return this._id;
    }
  
    public set id(value: string) {
      this._id = value;
    }
  
    public get title(): string {
      return this._title;
    }
  
    public set title(value: string) {
      this._title = value;
    }
  }
  
import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class UpdateUrlDTO {
    @IsNotEmpty()
    @IsString()
    private _id: string;
  
    @IsNotEmpty()
    @IsUrl()
    private _url: string;
  
    public get id(): string {
      return this._id;
    }
  
    public set id(value: string) {
      this._id = value;
    }
  
    public get url(): string {
      return this._url;
    }
  
    public set url(value: string) {
      this._url = value;
    }
  }
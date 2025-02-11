import { IsNotEmpty, IsString } from "class-validator";

export class UpdateHostDTO {
    @IsNotEmpty()
    @IsString()
    private _id: string;
  
    @IsNotEmpty()
    @IsString()
    private _host: string;
  
    public get id(): string {
      return this._id;
    }
  
    public set id(value: string) {
      this._id = value;
    }
  
    public get host(): string {
      return this._host;
    }
  
    public set host(value: string) {
      this._host = value;
    }
  }
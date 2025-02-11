import { IsNotEmpty, IsString } from "class-validator";

export class UpdateInformationDTO {
    @IsNotEmpty()
    @IsString()
    private _id: string;
  
    @IsNotEmpty()
    private _information: Record<string, any>;
  
    // Getter & Setter
    public get id(): string {
      return this._id;
    }
  
    public set id(value: string) {
      this._id = value;
    }
  
    public get information(): Record<string, any> {
      return this._information;
    }
  
    public set information(value: Record<string, any>) {
      this._information = value;
    }
  }
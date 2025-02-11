import { IsNotEmpty, IsString, IsArray } from "class-validator";

export class UpdateImagesDTO {
    @IsNotEmpty()
    @IsString()
    private _id: string;

    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    private _images: string[];

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get images(): string[] {
        return this._images;
    }

    public set images(value: string[]) {
        this._images = value;
      }
}
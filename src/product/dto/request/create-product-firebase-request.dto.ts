import { Type } from "class-transformer";
import { IsNumber, IsObject, IsOptional, IsString, IsArray, IsBoolean, ValidateNested } from "class-validator";
import { OffsetDTO } from "./offset.dto";

export class CreateProductFirebaseRequestDTO{
    @IsNumber()
    category: number;
  
    @IsNumber()
    index: number;
  
    @IsObject()
    @IsOptional()
    information?: Record<string, any>; 
  
    @IsString()
    brand: string;
  
    @IsString()
    host: string;
  
    @IsArray()
    @IsString({ each: true }) 
    images: string[];
  
    @IsString()
    price: string;
  
    @IsBoolean()
    stock: boolean;
  
    @IsString()
    title: string;
  
    @ValidateNested()
    @Type(() => OffsetDTO)
    offset: OffsetDTO;
  
    @IsString()
    url: string;
  
    @IsNumber()
    vogCount: number;

    constructor(
        category: number,
        index: number,
        information: Record<string, any> | undefined,
        brand: string,
        host: string,
        images: string[],
        price: string,
        stock: boolean,
        title: string,
        offset: OffsetDTO,
        url: string,
        vogCount: number
    ) {
        this.category = category;
        this.index = index;
        this.information = information;
        this.brand = brand;
        this.host = host;
        this.images = images;
        this.price = price;
        this.stock = stock;
        this.title = title;
        this.offset = offset;
        this.url = url;
        this.vogCount = vogCount;
    }

}
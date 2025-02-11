import { IsNumber, IsObject, IsOptional, IsString, IsArray, IsBoolean, ValidateNested } from "class-validator";
import { OffsetDTO } from "./offset.dto";
import { Type } from "class-transformer";

export class CreateProductDTO {
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
  }
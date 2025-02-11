import { IsNumber } from "class-validator";

export class OffsetDTO {
    @IsNumber()
    dx: number;
  
    @IsNumber()
    dy: number;
}
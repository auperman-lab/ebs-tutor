import {
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  IsEnum,
} from 'class-validator';
import { Language, Level } from '@prisma/client';

export class CreateCourseDto {
  @IsString()
  title!: string;

  @IsString()
  description!: string;

  @IsOptional()
  @IsString()
  summary?: string;

  @IsNumber()
  price!: number;

  @IsOptional()
  @IsNumber()
  price_old?: number;

  @IsOptional()
  @IsNumber()
  tax?: number;

  @IsOptional()
  @IsNumber()
  duration?: number;

  @IsNumber()
  author_id!: number;

  @IsEnum(Language)
  language!: Language;

  @IsEnum(Level)
  level!: Level;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  categories?: number[];

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  tags?: number[];
}

export class UpdateCourseDto {
  @IsString()
  title?: string;

  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  summary?: string;

  @IsNumber()
  price?: number;

  @IsOptional()
  @IsNumber()
  price_old?: number;

  @IsOptional()
  @IsNumber()
  tax?: number;

  @IsOptional()
  @IsNumber()
  duration?: number;

  @IsEnum(Language)
  language?: Language;

  @IsEnum(Level)
  level?: Level;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  categories?: number[];

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  tags?: number[];
}

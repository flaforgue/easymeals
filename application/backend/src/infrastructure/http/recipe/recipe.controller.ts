import { Controller, Get, HttpCode, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PrismaService } from '../../database/prisma.service';
import { Recipe } from '@prisma/client';

@Controller('recipes')
export class RecipeController {
  public constructor(private prisma: PrismaService) {}

  @Get('/')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(200)
  public get(): Promise<Recipe[]> {
    return this.prisma.recipe.findMany();
  }
}
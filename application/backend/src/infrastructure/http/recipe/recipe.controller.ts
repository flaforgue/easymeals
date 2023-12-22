import { Controller, Delete, Get, HttpCode, Param, UseGuards } from '@nestjs/common';
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

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(204)
  public async delete(@Param('id') recipeId: string): Promise<void> {
    await this.prisma.recipe.delete({
      where: {
        id: recipeId,
      },
    });

    return;
  }
}
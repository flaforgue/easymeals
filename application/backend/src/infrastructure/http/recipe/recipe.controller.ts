import { Controller, Delete, Get, HttpCode, Param, Post, UseGuards } from '@nestjs/common';
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

  @Post('/')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(201)
  public create(): Promise<Recipe> {
    return this.prisma.recipe.create({
      data: {
        name: 'Secret recipe',
        imageUrl: 'https://img.freepik.com/photos-premium/livre-cuisine-vide-ouvert-ingredients-ustensiles-cuisine_841543-6994.jpg',
      },
    });
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
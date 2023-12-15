import { Controller, Get, HttpCode, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Recipe } from '@lemonpie/shared';

@Controller('recipes')
export class RecipeController {
  @Get('/')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(200)
  public get(): Recipe[] {
    return [
      {
        id: 1,
        name: 'Tarte au citron',
        imageUrl: 'https://assets.afcdn.com/recipe/20200219/107873_w600.jpg',
      },
    ];
  }
}
import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('recipes')
export class RecipeController {
  constructor() {}

  @Get('/')
  @HttpCode(200)
  async get() {
    return [
      {
        id: 1,
        name: 'Tarte au citron',
        imageUrl: 'https://img.cuisineaz.com/660x660/2018/03/19/i138661-tarte-au-citron-meringuee-simple-et-rapide.webp'
      }
    ];
  }
}
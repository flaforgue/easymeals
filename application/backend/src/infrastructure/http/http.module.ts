import { Module } from '@nestjs/common';
import { RecipeController } from './recipe/recipe.controller';

@Module({
  controllers: [RecipeController],
})
export class HttpModule {}
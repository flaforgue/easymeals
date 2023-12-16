import { DatabaseModule } from '../database/database.module';
import { Module } from '@nestjs/common';
import { RecipeController } from './recipe/recipe.controller';

@Module({
  controllers: [RecipeController],
  imports: [DatabaseModule],
})
export class HttpModule {}
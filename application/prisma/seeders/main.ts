import { PrismaClient } from '../client';
import { seedUnit } from './seed-unit';
import { seedIngredientCategory } from './seed-ingrendient-category';
import { seedIngredient } from './seed-ingrendient';
import { seedCuisineType } from './seed-cuisine-type';
import { seedRecipe } from './seed-recipe';
import { seedRecipeIngredients } from './seed-recipe-ingredients';
import { seedProductCategory } from './seed-product-category';
import { seedProduct } from './seed-product';
import { seedRecipeInstructions } from './seed-recipe-instructions';

const prisma = new PrismaClient();

async function main() {
  await Promise.all([
    seedUnit(prisma),
    seedIngredientCategory(prisma),
    seedProductCategory(prisma),
    seedCuisineType(prisma),
  ]);
  await Promise.all([seedIngredient(prisma), seedProduct(prisma), seedRecipe(prisma)]);
  await Promise.all([seedRecipeIngredients(prisma), seedRecipeInstructions(prisma)]);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

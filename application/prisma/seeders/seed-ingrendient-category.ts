import { Prisma, PrismaClient } from '../client';

const ingredientCategories: Prisma.IngredientCategoryCreateInput[] = [
  {
    id: '3492ce94-053a-464b-bc73-ffa337781682',
    name: 'Viandes',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/ingredient-categories/viande.png',
  },
  {
    id: '00ad4305-fdd7-449e-8a4f-2cf8e71d61c7',
    name: 'Poissons',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/ingredient-categories/fish.png',
  },
  {
    id: 'fdd0904c-078d-410c-ac45-684a1f8ed209',
    name: 'Conserves',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/ingredient-categories/can.png',
  },
  {
    id: '84de9062-60ce-4651-b73d-8076fbb5365c',
    name: 'Produits animaux',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/ingredient-categories/animal-product.png',
  },
  {
    id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
    name: 'Légumes',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/ingredient-categories/vegetables.png',
  },
  {
    id: 'eaf4e45f-d578-4468-bc3b-c4fa7be81f11',
    name: 'Céréales',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/ingredient-categories/grain.png',
  },
  {
    id: '6be53bc7-8fd3-45e7-974a-823c267757fb',
    name: 'Fruits',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/ingredient-categories/fruits.png',
  },
  {
    id: '94cd3c90-16da-4bca-9973-2ac4d6a78fbd',
    name: 'Fruits secs',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/ingredient-categories/almonds.png',
  },
  {
    id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
    name: 'Condiments',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/ingredient-categories/condiment.png',
  },
  {
    id: '6fc7760f-49f6-49fe-a6e1-496fc8e0d51d',
    name: 'Herbes',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/ingredient-categories/persil.png',
  },
  {
    id: '3a13b6ed-f21a-435c-bd17-13cf736a19ba',
    name: 'Autres',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/ingredient-categories/chef.png',
  },
];

export function seedIngredientCategory(prisma: PrismaClient) {
  return Promise.all(
    ingredientCategories.map((ingredientCategory) =>
      prisma.ingredientCategory.upsert({
        where: { id: ingredientCategory.id },
        update: ingredientCategory,
        create: ingredientCategory,
      }),
    ),
  );
}

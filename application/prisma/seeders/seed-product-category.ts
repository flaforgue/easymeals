import { Prisma, PrismaClient } from '../client';

const productCategories: Prisma.ProductCategoryCreateInput[] = [
  {
    id: '931b60cc-fedc-4f97-84c8-33593ec3ca77',
    name: 'Hygiène',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/product-categories/hygiene.png',
  },
  {
    id: 'bf2ec045-0651-438d-ba81-2033909bf3ad',
    name: 'Entretien',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/product-categories/cleaning.png',
  },
  {
    id: '51b104de-9080-464e-a56f-811550ef3c49',
    name: 'Alimentaire',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/product-categories/food.png',
  },
  {
    id: '66ecaae7-fcb7-436b-8a1e-e5da110d6dc1',
    name: 'Autres',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/product-categories/others.png',
  },
];

export function seedProductCategory(prisma: PrismaClient) {
  return Promise.all(
    productCategories.map((productCategory) =>
      prisma.productCategory.upsert({
        where: { id: productCategory.id },
        update: productCategory,
        create: productCategory,
      }),
    ),
  );
}

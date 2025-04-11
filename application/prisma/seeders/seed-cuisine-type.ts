import { Prisma, PrismaClient } from '../client';

const cuisineTypes: Prisma.CuisineTypeCreateInput[] = [
  {
    id: 'cf92f38e-9142-4c59-8e7c-a7545298318d',
    name: 'Autre',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/cuisine-types/other.png',
  },
  {
    id: '2dbb0846-e9f6-4724-9269-367db047ad65',
    name: 'Cuisine asiatique',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/cuisine-types/asian.png',
  },
  {
    id: 'cb2e4516-2ca5-457f-b0a7-168d84794e8f',
    name: 'Cuisine anglaise',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/cuisine-types/fish-and-chips.png',
  },
  {
    id: '9e89c72d-2d74-4a13-8224-5244dcec6098',
    name: 'Cuisine africaine',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/cuisine-types/african.png',
  },
  {
    id: '0b2d21f1-ecaf-46fb-ad7f-e36d3eabd79c',
    name: 'Cuisine indienne',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/cuisine-types/indian.png',
  },
  {
    id: 'dbb7f8d2-5290-4727-82f0-8d5c61985004',
    name: 'Cuisine française',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/cuisine-types/french.png',
  },
  {
    id: '199b4a7d-7922-4421-b7d5-e4c22126a522',
    name: 'Cuisine orientale',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/cuisine-types/tajine.png',
  },
  {
    id: '60295737-d0c5-4599-aea8-ea980a2c83c2',
    name: 'Cuisine italienne',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/cuisine-types/italian.png',
  },
  {
    id: 'bfc4f810-34a2-4150-aac6-43be6ae7712b',
    name: 'Cuisine mexicaine',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/cuisine-types/south-america.png',
  },
];

export function seedCuisineType(prisma: PrismaClient) {
  return Promise.all(
    cuisineTypes.map((cuisineType) =>
      prisma.cuisineType.upsert({
        where: { id: cuisineType.id },
        update: cuisineType,
        create: cuisineType,
      }),
    ),
  );
}

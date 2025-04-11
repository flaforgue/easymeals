import { Prisma, PrismaClient } from '../client';

const units: Prisma.UnitCreateInput[] = [
  {
    id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
    name: 'Nombre',
    code: 'number',
    abbreviation: '',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/units/three.png',
  },
  {
    id: 'a5b94067-5617-49cd-ab28-8772f903d928',
    name: 'Grammes',
    code: 'gram',
    abbreviation: 'g',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/units/weight.png',
  },
  {
    id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
    name: 'C. à café',
    code: 'teaspoon',
    abbreviation: 'cc',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/units/spoon.png',
  },
  {
    id: '5c43e950-ad78-4618-8b99-bd1253bfac81',
    name: 'C. à soupe',
    code: 'tablespoon',
    abbreviation: 'cs',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/units/big-spoon.png',
  },
  {
    id: 'baa5ede4-30e4-412d-9158-6b73dbce2207',
    name: 'Millilitres',
    code: 'milliliter',
    abbreviation: 'ml',
    illustrationUrl: 'https://storage.googleapis.com/easymeals-storage/units/volume.png',
  },
];

export function seedUnit(prisma: PrismaClient) {
  return Promise.all(
    units.map((unit) =>
      prisma.unit.upsert({
        where: { id: unit.id },
        update: unit,
        create: unit,
      }),
    ),
  );
}

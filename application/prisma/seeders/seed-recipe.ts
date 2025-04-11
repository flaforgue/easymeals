import { Prisma, PrismaClient } from '../client';

const recipes: Prisma.RecipeCreateInput[] = [
  {
    id: '79a2038d-a799-4d15-aaf3-d9c7358ec274',
    nbPortions: 4,
    name: 'Lentilles au lait de coco',
    illustrationUrl:
      'https://storage.googleapis.com/easymeals-user-content/global/29e5aa20-31ec-4e21-882d-dc17c4a477de.jpeg',
    totalTimeInMinutes: 40,
    isVegetarian: true,
    preparationTimeInMinutes: 30,
    cuisineType: {
      connect: {
        id: '2dbb0846-e9f6-4724-9269-367db047ad65',
      },
    },
  },
  {
    id: '1aa209cc-1758-4ed7-89c5-7f9c782b2d76',
    nbPortions: 4,
    name: 'Fish and chips',
    illustrationUrl:
      'https://storage.googleapis.com/easymeals-user-content/global/fa247fcc-7327-4421-a91b-cd7be82ce27e.jpeg',
    totalTimeInMinutes: 40,
    isVegetarian: false,
    preparationTimeInMinutes: 10,
    cuisineType: {
      connect: {
        id: 'cb2e4516-2ca5-457f-b0a7-168d84794e8f',
      },
    },
  },
  {
    id: '75aee2ca-ef2f-4a05-a4df-acb833f4c94b',
    nbPortions: 4,
    name: 'Spaghettis bolognaise',
    illustrationUrl:
      'https://storage.googleapis.com/easymeals-user-content/global/b0c6e764-254e-4244-b304-17bf5888e3a8.jpeg',
    totalTimeInMinutes: 40,
    isVegetarian: false,
    preparationTimeInMinutes: 20,
    cuisineType: {
      connect: {
        id: '60295737-d0c5-4599-aea8-ea980a2c83c2',
      },
    },
  },
  {
    id: '8dd96033-2dd8-4126-8498-c67d5aff8bd7',
    nbPortions: 4,
    name: 'Saumon & haricots verts',
    illustrationUrl:
      'https://storage.googleapis.com/easymeals-user-content/global/8fa7223f-6c85-4733-97f6-02a8cca64667.jpeg',
    totalTimeInMinutes: 30,
    isVegetarian: false,
    preparationTimeInMinutes: 10,
    cuisineType: {
      connect: {
        id: 'dbb7f8d2-5290-4727-82f0-8d5c61985004',
      },
    },
  },
  {
    id: '776d9bcd-7d8c-4aab-ad3b-50cb0fcd5228',
    nbPortions: 4,
    name: 'Paninis',
    illustrationUrl:
      'https://storage.googleapis.com/easymeals-user-content/global/0475a8e2-ce56-4a6a-a21d-2a10edc2c4cd.jpeg',
    totalTimeInMinutes: 15,
    isVegetarian: false,
    preparationTimeInMinutes: 10,
    cuisineType: {
      connect: {
        id: '60295737-d0c5-4599-aea8-ea980a2c83c2',
      },
    },
  },
  {
    id: '3cab447d-413b-4d22-baff-9b0c29a31a41',
    nbPortions: 4,
    name: 'Minestrone',
    illustrationUrl:
      'https://storage.googleapis.com/easymeals-user-content/global/20b21e96-4f9a-4f8a-9047-353fcd7e563d.jpeg',
    totalTimeInMinutes: 60,
    isVegetarian: false,
    preparationTimeInMinutes: 30,
    cuisineType: {
      connect: {
        id: '60295737-d0c5-4599-aea8-ea980a2c83c2',
      },
    },
  },
  {
    id: 'e1db2b58-fb4d-4c27-bf10-c3f9064fc286',
    nbPortions: 4,
    name: 'Fajitas',
    illustrationUrl:
      'https://storage.googleapis.com/easymeals-user-content/global/17faa04f-03d5-4370-8551-7543f5e2da9d.jpeg',
    totalTimeInMinutes: 30,
    isVegetarian: false,
    preparationTimeInMinutes: 20,
    cuisineType: {
      connect: {
        id: 'bfc4f810-34a2-4150-aac6-43be6ae7712b',
      },
    },
  },
  {
    id: '4b499aa7-16ed-42ec-afcb-b3d93560c4bd',
    nbPortions: 4,
    name: 'Tarte courgette feta menthe',
    illustrationUrl:
      'https://storage.googleapis.com/easymeals-user-content/global/e5249e43-6718-46f6-94ba-f8be33a305cc.jpeg',
    totalTimeInMinutes: 35,
    isVegetarian: true,
    preparationTimeInMinutes: 10,
    cuisineType: {
      connect: {
        id: '199b4a7d-7922-4421-b7d5-e4c22126a522',
      },
    },
  },
  {
    id: '6013170f-3435-4977-90b9-bca1cd921a65',
    nbPortions: 4,
    name: 'Rajma makhani',
    illustrationUrl:
      'https://storage.googleapis.com/easymeals-user-content/global/74e2f73c-1f76-4da3-8c49-69cdebdf9282.jpeg',
    totalTimeInMinutes: 30,
    isVegetarian: true,
    preparationTimeInMinutes: 20,
    cuisineType: {
      connect: {
        id: '0b2d21f1-ecaf-46fb-ad7f-e36d3eabd79c',
      },
    },
  },
  {
    id: 'c877c6e3-38f0-4870-bd01-5478eae19217',
    nbPortions: 4,
    name: 'Soupe de pois chiches',
    illustrationUrl:
      'https://storage.googleapis.com/easymeals-user-content/global/d645848f-2c4b-40d1-9728-375e6bc170ed.jpeg',
    totalTimeInMinutes: 45,
    isVegetarian: true,
    preparationTimeInMinutes: 25,
    cuisineType: {
      connect: {
        id: '199b4a7d-7922-4421-b7d5-e4c22126a522',
      },
    },
  },
  {
    id: 'deae7f5a-a3c1-4677-9726-54df81b0bb8a',
    nbPortions: 4,
    name: 'Poulet & sauce fraise balsamique',
    illustrationUrl:
      'https://storage.googleapis.com/easymeals-user-content/global/e84b8263-0436-4e3b-9cfc-ca38c05d1d0b.jpeg',
    totalTimeInMinutes: 35,
    isVegetarian: false,
    preparationTimeInMinutes: 25,
    cuisineType: {
      connect: {
        id: 'dbb7f8d2-5290-4727-82f0-8d5c61985004',
      },
    },
  },
  {
    id: '35f2057f-e003-4472-9451-0dd53e5c5f5b',
    nbPortions: 4,
    name: 'Saumon au soja et gingembre',
    illustrationUrl:
      'https://storage.googleapis.com/easymeals-user-content/global/e3bc902c-869d-4c0a-8fc6-57f314e9d192.jpeg',
    totalTimeInMinutes: 40,
    isVegetarian: false,
    preparationTimeInMinutes: 15,
    cuisineType: {
      connect: {
        id: '2dbb0846-e9f6-4724-9269-367db047ad65',
      },
    },
  },
  {
    id: 'e156ac5a-b714-4db1-ad3c-c1a5280391e9',
    nbPortions: 4,
    name: 'Cuisses de poulet à la Mexicaine',
    illustrationUrl:
      'https://storage.googleapis.com/easymeals-user-content/global/05675a92-7f28-4cdc-bac4-3e9252a55b91.jpeg',
    totalTimeInMinutes: 50,
    isVegetarian: false,
    preparationTimeInMinutes: 15,
    cuisineType: {
      connect: {
        id: 'bfc4f810-34a2-4150-aac6-43be6ae7712b',
      },
    },
  },
  {
    id: '28fdadff-0b6d-4e05-b82a-e28d3a016f49',
    nbPortions: 4,
    name: 'Pâtes à la carbonara',
    illustrationUrl:
      'https://storage.googleapis.com/easymeals-user-content/global/b631dd82-a42a-482c-8047-a590066aa7a8.jpeg',
    totalTimeInMinutes: 30,
    isVegetarian: false,
    preparationTimeInMinutes: 25,
    cuisineType: {
      connect: {
        id: '60295737-d0c5-4599-aea8-ea980a2c83c2',
      },
    },
  },
  {
    id: '6d76a1d8-2a9c-4e9e-a266-da9c2e38f08b',
    nbPortions: 4,
    name: 'Poivrons farcis',
    illustrationUrl:
      'https://storage.googleapis.com/easymeals-user-content/global/ffeec40c-ff06-45bc-9422-25f9ef1488f9.jpeg',
    totalTimeInMinutes: 80,
    isVegetarian: false,
    preparationTimeInMinutes: 20,
    cuisineType: {
      connect: {
        id: 'dbb7f8d2-5290-4727-82f0-8d5c61985004',
      },
    },
  },
  {
    id: '47ca6256-ac10-4257-b07b-f7f2964ba3b1',
    nbPortions: 4,
    name: 'Poulet au curry rouge',
    illustrationUrl:
      'https://storage.googleapis.com/easymeals-user-content/global/0d6a6d4e-c6a7-4101-9fc0-de84d9913c4c.jpeg',
    totalTimeInMinutes: 45,
    isVegetarian: false,
    preparationTimeInMinutes: 25,
    cuisineType: {
      connect: {
        id: '2dbb0846-e9f6-4724-9269-367db047ad65',
      },
    },
  },
  {
    id: '6e45d67a-76fa-430e-a628-63b93930d342',
    nbPortions: 4,
    name: 'Soupe mexicaine',
    illustrationUrl:
      'https://storage.googleapis.com/easymeals-user-content/global/80763fdc-8115-4455-9f59-5ea84bdc96df.jpeg',
    totalTimeInMinutes: 40,
    isVegetarian: true,
    preparationTimeInMinutes: 25,
    cuisineType: {
      connect: {
        id: 'bfc4f810-34a2-4150-aac6-43be6ae7712b',
      },
    },
  },
  {
    id: '258ec024-62af-4cc0-a13c-908bc7bad10b',
    nbPortions: 4,
    name: 'Soupe orientale au poulet effiloché',
    illustrationUrl:
      'https://storage.googleapis.com/easymeals-user-content/global/62d5c176-5fe1-4c72-b328-eafb44a14a50.jpeg',
    totalTimeInMinutes: 45,
    isVegetarian: false,
    preparationTimeInMinutes: 25,
    cuisineType: {
      connect: {
        id: '199b4a7d-7922-4421-b7d5-e4c22126a522',
      },
    },
  },
  {
    id: 'ea8ab742-d0ac-47ef-89fc-1f387ec5a722',
    nbPortions: 4,
    name: 'Soupe aztèque carotte & maïs',
    illustrationUrl:
      'https://storage.googleapis.com/easymeals-user-content/global/591d2a21-7aa5-4578-afb1-9c5ac732e50b.jpeg',
    totalTimeInMinutes: 45,
    isVegetarian: true,
    preparationTimeInMinutes: 35,
    cuisineType: {
      connect: {
        id: 'bfc4f810-34a2-4150-aac6-43be6ae7712b',
      },
    },
  },
  {
    id: '5538394b-5332-4d39-a89a-56225044b056',
    nbPortions: 4,
    name: 'Poulet au curry vert',
    illustrationUrl:
      'https://storage.googleapis.com/easymeals-user-content/global/6aa70647-4729-4221-a27b-e9b05a0e1b21.jpeg',
    totalTimeInMinutes: 45,
    isVegetarian: false,
    preparationTimeInMinutes: 25,
    cuisineType: {
      connect: {
        id: '2dbb0846-e9f6-4724-9269-367db047ad65',
      },
    },
  },
  {
    id: '7045dff2-fb6d-4985-97d5-d308aa09561a',
    nbPortions: 4,
    name: 'Petit salé',
    illustrationUrl:
      'https://storage.googleapis.com/easymeals-user-content/global/f4f4af79-91c3-421f-89e5-dc3b7fac7573.jpeg',
    totalTimeInMinutes: 100,
    isVegetarian: false,
    preparationTimeInMinutes: 20,
    cuisineType: {
      connect: {
        id: 'dbb7f8d2-5290-4727-82f0-8d5c61985004',
      },
    },
  },
  {
    id: '3b17e366-70be-49b1-86e2-18d278efe5b6',
    nbPortions: 4,
    name: 'Dahl de lentilles',
    illustrationUrl:
      'https://storage.googleapis.com/easymeals-user-content/global/cfc113ce-7da9-4ccb-a19e-dea7d751dff5.jpeg',
    totalTimeInMinutes: 40,
    isVegetarian: true,
    preparationTimeInMinutes: 15,
    cuisineType: {
      connect: {
        id: '0b2d21f1-ecaf-46fb-ad7f-e36d3eabd79c',
      },
    },
  },
  {
    id: '1b8f669a-01e2-4d5f-9af2-f09c4763e18e',
    nbPortions: 4,
    name: 'Lasagne à la bolognaise',
    illustrationUrl:
      'https://storage.googleapis.com/easymeals-user-content/global/ed65599c-7760-4bb2-aeb0-265d6fd4a045.jpeg',
    totalTimeInMinutes: 70,
    isVegetarian: false,
    preparationTimeInMinutes: 40,
    cuisineType: {
      connect: {
        id: '60295737-d0c5-4599-aea8-ea980a2c83c2',
      },
    },
  },
];

export function seedRecipe(prisma: PrismaClient) {
  return Promise.all(
    recipes.map((recipe) =>
      prisma.recipe.upsert({
        where: { id: recipe.id },
        update: recipe,
        create: recipe,
      }),
    ),
  );
}

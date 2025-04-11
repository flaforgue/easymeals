import { Prisma, PrismaClient } from '../client';

const recipeIngredients: Prisma.RecipeIngredientPivotCreateInput[] = [
  {
    quantity: 1,
    recipe: {
      connect: {
        id: 'e156ac5a-b714-4db1-ad3c-c1a5280391e9',
      },
    },
    ingredient: {
      connect: {
        id: 'b291c6af-dd03-4b17-aa99-c236dd7e7f37',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: 'e156ac5a-b714-4db1-ad3c-c1a5280391e9',
      },
    },
    ingredient: {
      connect: {
        id: 'f3773667-7eaa-4e59-960b-ce5a8bb2a91d',
      },
    },
  },
  {
    quantity: 800,
    recipe: {
      connect: {
        id: 'e156ac5a-b714-4db1-ad3c-c1a5280391e9',
      },
    },
    ingredient: {
      connect: {
        id: 'a9018eba-7775-4e80-b9c2-5270fc5b078c',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: 'e156ac5a-b714-4db1-ad3c-c1a5280391e9',
      },
    },
    ingredient: {
      connect: {
        id: '396736f1-cbc1-48af-93a7-08421b4339cc',
      },
    },
  },
  {
    quantity: 400,
    recipe: {
      connect: {
        id: 'e156ac5a-b714-4db1-ad3c-c1a5280391e9',
      },
    },
    ingredient: {
      connect: {
        id: '1c9dab22-32e8-4300-8aae-fde7f33b24dc',
      },
    },
  },
  {
    quantity: 400,
    recipe: {
      connect: {
        id: 'e156ac5a-b714-4db1-ad3c-c1a5280391e9',
      },
    },
    ingredient: {
      connect: {
        id: '19fcf4dc-3705-428b-b7b6-9bef1c52bad5',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: 'e156ac5a-b714-4db1-ad3c-c1a5280391e9',
      },
    },
    ingredient: {
      connect: {
        id: 'f8346816-2081-4cfc-83a6-11911873ecf5',
      },
    },
  },
  {
    quantity: 10,
    recipe: {
      connect: {
        id: 'e156ac5a-b714-4db1-ad3c-c1a5280391e9',
      },
    },
    ingredient: {
      connect: {
        id: '22a7e203-3105-4e7c-9137-4d22fb2fd726',
      },
    },
  },
  {
    quantity: 40,
    recipe: {
      connect: {
        id: 'e156ac5a-b714-4db1-ad3c-c1a5280391e9',
      },
    },
    ingredient: {
      connect: {
        id: '1c2b000d-94f4-4c67-b604-69b40379a76f',
      },
    },
  },
  {
    quantity: 300,
    recipe: {
      connect: {
        id: 'e156ac5a-b714-4db1-ad3c-c1a5280391e9',
      },
    },
    ingredient: {
      connect: {
        id: 'a1b9969c-5ecf-4e3b-90fa-dee5a8f2f4a1',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: 'e156ac5a-b714-4db1-ad3c-c1a5280391e9',
      },
    },
    ingredient: {
      connect: {
        id: '63e7ec8a-70bb-4e4c-a397-f1a8ded26296',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: 'e156ac5a-b714-4db1-ad3c-c1a5280391e9',
      },
    },
    ingredient: {
      connect: {
        id: 'c74ee230-306a-4f46-b235-74011a1add15',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '258ec024-62af-4cc0-a13c-908bc7bad10b',
      },
    },
    ingredient: {
      connect: {
        id: 'c74ee230-306a-4f46-b235-74011a1add15',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '258ec024-62af-4cc0-a13c-908bc7bad10b',
      },
    },
    ingredient: {
      connect: {
        id: '63e7ec8a-70bb-4e4c-a397-f1a8ded26296',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: 'e156ac5a-b714-4db1-ad3c-c1a5280391e9',
      },
    },
    ingredient: {
      connect: {
        id: '6cb2ccc9-02f2-494c-828f-6da7633bc3cc',
      },
    },
  },
  {
    quantity: 8,
    recipe: {
      connect: {
        id: 'e156ac5a-b714-4db1-ad3c-c1a5280391e9',
      },
    },
    ingredient: {
      connect: {
        id: '5db0737f-bc97-49a9-bf4b-b29a1de3352b',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '79a2038d-a799-4d15-aaf3-d9c7358ec274',
      },
    },
    ingredient: {
      connect: {
        id: 'f3773667-7eaa-4e59-960b-ce5a8bb2a91d',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: '79a2038d-a799-4d15-aaf3-d9c7358ec274',
      },
    },
    ingredient: {
      connect: {
        id: '56e80f15-848d-4add-9bf3-e27b915261d2',
      },
    },
  },
  {
    quantity: 40,
    recipe: {
      connect: {
        id: '79a2038d-a799-4d15-aaf3-d9c7358ec274',
      },
    },
    ingredient: {
      connect: {
        id: '6b5a1d5e-f65e-4e66-97c5-5fc8b966003a',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: '79a2038d-a799-4d15-aaf3-d9c7358ec274',
      },
    },
    ingredient: {
      connect: {
        id: 'f8346816-2081-4cfc-83a6-11911873ecf5',
      },
    },
  },
  {
    quantity: 240,
    recipe: {
      connect: {
        id: '79a2038d-a799-4d15-aaf3-d9c7358ec274',
      },
    },
    ingredient: {
      connect: {
        id: 'f9f865e3-6c63-4561-84a0-b991f0f203be',
      },
    },
  },
  {
    quantity: 500,
    recipe: {
      connect: {
        id: '79a2038d-a799-4d15-aaf3-d9c7358ec274',
      },
    },
    ingredient: {
      connect: {
        id: '6120928f-a362-47ce-8b48-058d1fe7480f',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '79a2038d-a799-4d15-aaf3-d9c7358ec274',
      },
    },
    ingredient: {
      connect: {
        id: '51aaed2c-cd3c-4833-8ff0-863273a49f8d',
      },
    },
  },
  {
    quantity: 10,
    recipe: {
      connect: {
        id: '79a2038d-a799-4d15-aaf3-d9c7358ec274',
      },
    },
    ingredient: {
      connect: {
        id: '92658a2b-a704-4ffa-b55e-45c62f6c4cbb',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '79a2038d-a799-4d15-aaf3-d9c7358ec274',
      },
    },
    ingredient: {
      connect: {
        id: 'c74ee230-306a-4f46-b235-74011a1add15',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '79a2038d-a799-4d15-aaf3-d9c7358ec274',
      },
    },
    ingredient: {
      connect: {
        id: '63e7ec8a-70bb-4e4c-a397-f1a8ded26296',
      },
    },
  },
  {
    quantity: 300,
    recipe: {
      connect: {
        id: '79a2038d-a799-4d15-aaf3-d9c7358ec274',
      },
    },
    ingredient: {
      connect: {
        id: '51eed8e5-d200-41dc-b89c-b480e1f976a2',
      },
    },
  },
  {
    quantity: 160,
    recipe: {
      connect: {
        id: '79a2038d-a799-4d15-aaf3-d9c7358ec274',
      },
    },
    ingredient: {
      connect: {
        id: 'cb9270df-54a6-43b9-b495-bd8254025db6',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: 'c877c6e3-38f0-4870-bd01-5478eae19217',
      },
    },
    ingredient: {
      connect: {
        id: '56e80f15-848d-4add-9bf3-e27b915261d2',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: 'c877c6e3-38f0-4870-bd01-5478eae19217',
      },
    },
    ingredient: {
      connect: {
        id: 'f3773667-7eaa-4e59-960b-ce5a8bb2a91d',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: 'c877c6e3-38f0-4870-bd01-5478eae19217',
      },
    },
    ingredient: {
      connect: {
        id: 'd916218a-9b6e-466c-8c41-501a03d8af67',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '79a2038d-a799-4d15-aaf3-d9c7358ec274',
      },
    },
    ingredient: {
      connect: {
        id: '2aba490b-e083-4de2-9463-7619359c5a1e',
      },
    },
  },
  {
    quantity: 600,
    recipe: {
      connect: {
        id: '79a2038d-a799-4d15-aaf3-d9c7358ec274',
      },
    },
    ingredient: {
      connect: {
        id: 'cb5099fd-75c2-49a0-9508-7e8e65f2d608',
      },
    },
  },
  {
    quantity: 10,
    recipe: {
      connect: {
        id: '79a2038d-a799-4d15-aaf3-d9c7358ec274',
      },
    },
    ingredient: {
      connect: {
        id: 'e919a8df-e0ec-4141-9c7f-638f1be2b445',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: 'deae7f5a-a3c1-4677-9726-54df81b0bb8a',
      },
    },
    ingredient: {
      connect: {
        id: 'f2d9d3cc-3731-49a5-87cd-0b0c6afffd61',
      },
    },
  },
  {
    quantity: 1000,
    recipe: {
      connect: {
        id: 'deae7f5a-a3c1-4677-9726-54df81b0bb8a',
      },
    },
    ingredient: {
      connect: {
        id: 'fac062ef-f4cc-4bbf-971e-6310a05b3110',
      },
    },
  },
  {
    quantity: 720,
    recipe: {
      connect: {
        id: 'deae7f5a-a3c1-4677-9726-54df81b0bb8a',
      },
    },
    ingredient: {
      connect: {
        id: '03d39f8b-197d-403b-92c7-7d270771fb5d',
      },
    },
  },
  {
    quantity: 600,
    recipe: {
      connect: {
        id: 'deae7f5a-a3c1-4677-9726-54df81b0bb8a',
      },
    },
    ingredient: {
      connect: {
        id: 'c72e3123-3ac1-4a0c-a414-6e400e5995ad',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: 'deae7f5a-a3c1-4677-9726-54df81b0bb8a',
      },
    },
    ingredient: {
      connect: {
        id: 'ecca5577-84c0-493d-98e4-2fb319d43b63',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: 'deae7f5a-a3c1-4677-9726-54df81b0bb8a',
      },
    },
    ingredient: {
      connect: {
        id: 'be96b423-ad3f-42b2-9973-caa91d407622',
      },
    },
  },
  {
    quantity: 500,
    recipe: {
      connect: {
        id: 'deae7f5a-a3c1-4677-9726-54df81b0bb8a',
      },
    },
    ingredient: {
      connect: {
        id: 'cb5099fd-75c2-49a0-9508-7e8e65f2d608',
      },
    },
  },
  {
    quantity: 6,
    recipe: {
      connect: {
        id: 'deae7f5a-a3c1-4677-9726-54df81b0bb8a',
      },
    },
    ingredient: {
      connect: {
        id: '6cb2ccc9-02f2-494c-828f-6da7633bc3cc',
      },
    },
  },
  {
    quantity: 32,
    recipe: {
      connect: {
        id: 'deae7f5a-a3c1-4677-9726-54df81b0bb8a',
      },
    },
    ingredient: {
      connect: {
        id: 'af4c4245-c074-49e4-8558-bc384d66bf48',
      },
    },
  },
  {
    quantity: 6,
    recipe: {
      connect: {
        id: 'deae7f5a-a3c1-4677-9726-54df81b0bb8a',
      },
    },
    ingredient: {
      connect: {
        id: 'd41525e9-a02e-4276-ad94-a4302dd63e5c',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: 'deae7f5a-a3c1-4677-9726-54df81b0bb8a',
      },
    },
    ingredient: {
      connect: {
        id: 'c74ee230-306a-4f46-b235-74011a1add15',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: 'deae7f5a-a3c1-4677-9726-54df81b0bb8a',
      },
    },
    ingredient: {
      connect: {
        id: '63e7ec8a-70bb-4e4c-a397-f1a8ded26296',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '258ec024-62af-4cc0-a13c-908bc7bad10b',
      },
    },
    ingredient: {
      connect: {
        id: 'f3773667-7eaa-4e59-960b-ce5a8bb2a91d',
      },
    },
  },
  {
    quantity: 160,
    recipe: {
      connect: {
        id: '258ec024-62af-4cc0-a13c-908bc7bad10b',
      },
    },
    ingredient: {
      connect: {
        id: 'cb9270df-54a6-43b9-b495-bd8254025db6',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '258ec024-62af-4cc0-a13c-908bc7bad10b',
      },
    },
    ingredient: {
      connect: {
        id: '630e0c8e-0ad1-4c12-a8c6-4b74203f634a',
      },
    },
  },
  {
    quantity: 600,
    recipe: {
      connect: {
        id: '258ec024-62af-4cc0-a13c-908bc7bad10b',
      },
    },
    ingredient: {
      connect: {
        id: 'c2fd3267-dc04-45f1-bcdd-73223a2301c4',
      },
    },
  },
  {
    quantity: 140,
    recipe: {
      connect: {
        id: '258ec024-62af-4cc0-a13c-908bc7bad10b',
      },
    },
    ingredient: {
      connect: {
        id: 'd6950004-1b8f-443f-bc65-178719234d4f',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '258ec024-62af-4cc0-a13c-908bc7bad10b',
      },
    },
    ingredient: {
      connect: {
        id: 'd916218a-9b6e-466c-8c41-501a03d8af67',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '258ec024-62af-4cc0-a13c-908bc7bad10b',
      },
    },
    ingredient: {
      connect: {
        id: '884878b4-b394-43b5-bab7-c3b2138adc22',
      },
    },
  },
  {
    quantity: 600,
    recipe: {
      connect: {
        id: '258ec024-62af-4cc0-a13c-908bc7bad10b',
      },
    },
    ingredient: {
      connect: {
        id: 'c72e3123-3ac1-4a0c-a414-6e400e5995ad',
      },
    },
  },
  {
    quantity: 100,
    recipe: {
      connect: {
        id: '258ec024-62af-4cc0-a13c-908bc7bad10b',
      },
    },
    ingredient: {
      connect: {
        id: 'b9ab5752-f6a5-4332-9af6-937ca0ed68f4',
      },
    },
  },
  {
    quantity: 940,
    recipe: {
      connect: {
        id: '258ec024-62af-4cc0-a13c-908bc7bad10b',
      },
    },
    ingredient: {
      connect: {
        id: 'b59189c2-fa12-4abe-92e4-7fa4c1eaf253',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '258ec024-62af-4cc0-a13c-908bc7bad10b',
      },
    },
    ingredient: {
      connect: {
        id: '6cb2ccc9-02f2-494c-828f-6da7633bc3cc',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: 'c877c6e3-38f0-4870-bd01-5478eae19217',
      },
    },
    ingredient: {
      connect: {
        id: 'cd199b75-8ed2-4f50-89bd-863a4653908e',
      },
    },
  },
  {
    quantity: 600,
    recipe: {
      connect: {
        id: 'c877c6e3-38f0-4870-bd01-5478eae19217',
      },
    },
    ingredient: {
      connect: {
        id: 'c2fd3267-dc04-45f1-bcdd-73223a2301c4',
      },
    },
  },
  {
    quantity: 800,
    recipe: {
      connect: {
        id: 'c877c6e3-38f0-4870-bd01-5478eae19217',
      },
    },
    ingredient: {
      connect: {
        id: '19fcf4dc-3705-428b-b7b6-9bef1c52bad5',
      },
    },
  },
  {
    quantity: 100,
    recipe: {
      connect: {
        id: 'c877c6e3-38f0-4870-bd01-5478eae19217',
      },
    },
    ingredient: {
      connect: {
        id: 'fe745e17-b856-47b9-9bd9-19e4d9f6e530',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: 'c877c6e3-38f0-4870-bd01-5478eae19217',
      },
    },
    ingredient: {
      connect: {
        id: 'ba7f565c-6b85-485c-b330-5442e5535c39',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: 'c877c6e3-38f0-4870-bd01-5478eae19217',
      },
    },
    ingredient: {
      connect: {
        id: 'a1b9969c-5ecf-4e3b-90fa-dee5a8f2f4a1',
      },
    },
  },
  {
    quantity: 50,
    recipe: {
      connect: {
        id: 'c877c6e3-38f0-4870-bd01-5478eae19217',
      },
    },
    ingredient: {
      connect: {
        id: '35de7aa6-f331-430e-a2e2-7cf9f1f55b81',
      },
    },
  },
  {
    quantity: 6,
    recipe: {
      connect: {
        id: 'c877c6e3-38f0-4870-bd01-5478eae19217',
      },
    },
    ingredient: {
      connect: {
        id: '6cb2ccc9-02f2-494c-828f-6da7633bc3cc',
      },
    },
  },
  {
    quantity: 500,
    recipe: {
      connect: {
        id: 'c877c6e3-38f0-4870-bd01-5478eae19217',
      },
    },
    ingredient: {
      connect: {
        id: 'cb5099fd-75c2-49a0-9508-7e8e65f2d608',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: 'c877c6e3-38f0-4870-bd01-5478eae19217',
      },
    },
    ingredient: {
      connect: {
        id: '5c7c1a9d-65b4-4fe2-8d44-b019cc3af1b3',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: 'c877c6e3-38f0-4870-bd01-5478eae19217',
      },
    },
    ingredient: {
      connect: {
        id: '63e7ec8a-70bb-4e4c-a397-f1a8ded26296',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: 'c877c6e3-38f0-4870-bd01-5478eae19217',
      },
    },
    ingredient: {
      connect: {
        id: 'c74ee230-306a-4f46-b235-74011a1add15',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '6e45d67a-76fa-430e-a628-63b93930d342',
      },
    },
    ingredient: {
      connect: {
        id: '630e0c8e-0ad1-4c12-a8c6-4b74203f634a',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: '6e45d67a-76fa-430e-a628-63b93930d342',
      },
    },
    ingredient: {
      connect: {
        id: 'b291c6af-dd03-4b17-aa99-c236dd7e7f37',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '6e45d67a-76fa-430e-a628-63b93930d342',
      },
    },
    ingredient: {
      connect: {
        id: '5db0737f-bc97-49a9-bf4b-b29a1de3352b',
      },
    },
  },
  {
    quantity: 60,
    recipe: {
      connect: {
        id: '6e45d67a-76fa-430e-a628-63b93930d342',
      },
    },
    ingredient: {
      connect: {
        id: 'd6950004-1b8f-443f-bc65-178719234d4f',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '6e45d67a-76fa-430e-a628-63b93930d342',
      },
    },
    ingredient: {
      connect: {
        id: 'a97d0cd0-4765-403b-b078-462a35b61bec',
      },
    },
  },
  {
    quantity: 100,
    recipe: {
      connect: {
        id: '6e45d67a-76fa-430e-a628-63b93930d342',
      },
    },
    ingredient: {
      connect: {
        id: '1c2b000d-94f4-4c67-b604-69b40379a76f',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '6e45d67a-76fa-430e-a628-63b93930d342',
      },
    },
    ingredient: {
      connect: {
        id: '35de64d1-130e-4d6b-bb60-deb3ba4e8b56',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: '6e45d67a-76fa-430e-a628-63b93930d342',
      },
    },
    ingredient: {
      connect: {
        id: 'f8346816-2081-4cfc-83a6-11911873ecf5',
      },
    },
  },
  {
    quantity: 600,
    recipe: {
      connect: {
        id: '6e45d67a-76fa-430e-a628-63b93930d342',
      },
    },
    ingredient: {
      connect: {
        id: '4b44cf18-9795-4176-8609-d7e7f1ffa8c6',
      },
    },
  },
  {
    quantity: 300,
    recipe: {
      connect: {
        id: '6e45d67a-76fa-430e-a628-63b93930d342',
      },
    },
    ingredient: {
      connect: {
        id: '736144ae-c594-481c-9fad-41b28c8ea03f',
      },
    },
  },
  {
    quantity: 800,
    recipe: {
      connect: {
        id: '6e45d67a-76fa-430e-a628-63b93930d342',
      },
    },
    ingredient: {
      connect: {
        id: 'cb5099fd-75c2-49a0-9508-7e8e65f2d608',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '6e45d67a-76fa-430e-a628-63b93930d342',
      },
    },
    ingredient: {
      connect: {
        id: '6cb2ccc9-02f2-494c-828f-6da7633bc3cc',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '6e45d67a-76fa-430e-a628-63b93930d342',
      },
    },
    ingredient: {
      connect: {
        id: 'c74ee230-306a-4f46-b235-74011a1add15',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '6e45d67a-76fa-430e-a628-63b93930d342',
      },
    },
    ingredient: {
      connect: {
        id: '63e7ec8a-70bb-4e4c-a397-f1a8ded26296',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '6013170f-3435-4977-90b9-bca1cd921a65',
      },
    },
    ingredient: {
      connect: {
        id: 'f3773667-7eaa-4e59-960b-ce5a8bb2a91d',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: '6013170f-3435-4977-90b9-bca1cd921a65',
      },
    },
    ingredient: {
      connect: {
        id: '56e80f15-848d-4add-9bf3-e27b915261d2',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '6013170f-3435-4977-90b9-bca1cd921a65',
      },
    },
    ingredient: {
      connect: {
        id: '630e0c8e-0ad1-4c12-a8c6-4b74203f634a',
      },
    },
  },
  {
    quantity: 40,
    recipe: {
      connect: {
        id: '6013170f-3435-4977-90b9-bca1cd921a65',
      },
    },
    ingredient: {
      connect: {
        id: '6b5a1d5e-f65e-4e66-97c5-5fc8b966003a',
      },
    },
  },
  {
    quantity: 5,
    recipe: {
      connect: {
        id: '6013170f-3435-4977-90b9-bca1cd921a65',
      },
    },
    ingredient: {
      connect: {
        id: 'd9dc4526-8e4b-4c67-92dc-0a632b2cfc46',
      },
    },
  },
  {
    quantity: 120,
    recipe: {
      connect: {
        id: '6013170f-3435-4977-90b9-bca1cd921a65',
      },
    },
    ingredient: {
      connect: {
        id: 'cbbc69cd-b23e-40d5-9844-5d8b3974ca85',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '6013170f-3435-4977-90b9-bca1cd921a65',
      },
    },
    ingredient: {
      connect: {
        id: 'd916218a-9b6e-466c-8c41-501a03d8af67',
      },
    },
  },
  {
    quantity: 600,
    recipe: {
      connect: {
        id: '6013170f-3435-4977-90b9-bca1cd921a65',
      },
    },
    ingredient: {
      connect: {
        id: '4b44cf18-9795-4176-8609-d7e7f1ffa8c6',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '6013170f-3435-4977-90b9-bca1cd921a65',
      },
    },
    ingredient: {
      connect: {
        id: '51aaed2c-cd3c-4833-8ff0-863273a49f8d',
      },
    },
  },
  {
    quantity: 100,
    recipe: {
      connect: {
        id: '6013170f-3435-4977-90b9-bca1cd921a65',
      },
    },
    ingredient: {
      connect: {
        id: '53569045-6ae5-4665-b9e5-65e7cd6afacf',
      },
    },
  },
  {
    quantity: 40,
    recipe: {
      connect: {
        id: '6013170f-3435-4977-90b9-bca1cd921a65',
      },
    },
    ingredient: {
      connect: {
        id: 'd61e9da0-b16a-4533-989b-c5f551a95678',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '6013170f-3435-4977-90b9-bca1cd921a65',
      },
    },
    ingredient: {
      connect: {
        id: '6cb2ccc9-02f2-494c-828f-6da7633bc3cc',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '6013170f-3435-4977-90b9-bca1cd921a65',
      },
    },
    ingredient: {
      connect: {
        id: 'd41525e9-a02e-4276-ad94-a4302dd63e5c',
      },
    },
  },
  {
    quantity: 400,
    recipe: {
      connect: {
        id: '6013170f-3435-4977-90b9-bca1cd921a65',
      },
    },
    ingredient: {
      connect: {
        id: 'cb5099fd-75c2-49a0-9508-7e8e65f2d608',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '6013170f-3435-4977-90b9-bca1cd921a65',
      },
    },
    ingredient: {
      connect: {
        id: 'c74ee230-306a-4f46-b235-74011a1add15',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '6013170f-3435-4977-90b9-bca1cd921a65',
      },
    },
    ingredient: {
      connect: {
        id: '63e7ec8a-70bb-4e4c-a397-f1a8ded26296',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: 'ea8ab742-d0ac-47ef-89fc-1f387ec5a722',
      },
    },
    ingredient: {
      connect: {
        id: 'b291c6af-dd03-4b17-aa99-c236dd7e7f37',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: 'ea8ab742-d0ac-47ef-89fc-1f387ec5a722',
      },
    },
    ingredient: {
      connect: {
        id: 'f3773667-7eaa-4e59-960b-ce5a8bb2a91d',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: 'ea8ab742-d0ac-47ef-89fc-1f387ec5a722',
      },
    },
    ingredient: {
      connect: {
        id: '630e0c8e-0ad1-4c12-a8c6-4b74203f634a',
      },
    },
  },
  {
    quantity: 300,
    recipe: {
      connect: {
        id: 'ea8ab742-d0ac-47ef-89fc-1f387ec5a722',
      },
    },
    ingredient: {
      connect: {
        id: '736144ae-c594-481c-9fad-41b28c8ea03f',
      },
    },
  },
  {
    quantity: 300,
    recipe: {
      connect: {
        id: 'ea8ab742-d0ac-47ef-89fc-1f387ec5a722',
      },
    },
    ingredient: {
      connect: {
        id: '19fcf4dc-3705-428b-b7b6-9bef1c52bad5',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: 'ea8ab742-d0ac-47ef-89fc-1f387ec5a722',
      },
    },
    ingredient: {
      connect: {
        id: 'cd199b75-8ed2-4f50-89bd-863a4653908e',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: 'ea8ab742-d0ac-47ef-89fc-1f387ec5a722',
      },
    },
    ingredient: {
      connect: {
        id: 'd916218a-9b6e-466c-8c41-501a03d8af67',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: 'ea8ab742-d0ac-47ef-89fc-1f387ec5a722',
      },
    },
    ingredient: {
      connect: {
        id: '8b6b8971-f863-4883-904b-2cddc3c9ff62',
      },
    },
  },
  {
    quantity: 100,
    recipe: {
      connect: {
        id: 'ea8ab742-d0ac-47ef-89fc-1f387ec5a722',
      },
    },
    ingredient: {
      connect: {
        id: 'b9ab5752-f6a5-4332-9af6-937ca0ed68f4',
      },
    },
  },
  {
    quantity: 5,
    recipe: {
      connect: {
        id: 'ea8ab742-d0ac-47ef-89fc-1f387ec5a722',
      },
    },
    ingredient: {
      connect: {
        id: 'e919a8df-e0ec-4141-9c7f-638f1be2b445',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: 'ea8ab742-d0ac-47ef-89fc-1f387ec5a722',
      },
    },
    ingredient: {
      connect: {
        id: 'f8346816-2081-4cfc-83a6-11911873ecf5',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: 'ea8ab742-d0ac-47ef-89fc-1f387ec5a722',
      },
    },
    ingredient: {
      connect: {
        id: '35de64d1-130e-4d6b-bb60-deb3ba4e8b56',
      },
    },
  },
  {
    quantity: 120,
    recipe: {
      connect: {
        id: 'ea8ab742-d0ac-47ef-89fc-1f387ec5a722',
      },
    },
    ingredient: {
      connect: {
        id: 'a1b9969c-5ecf-4e3b-90fa-dee5a8f2f4a1',
      },
    },
  },
  {
    quantity: 1600,
    recipe: {
      connect: {
        id: 'ea8ab742-d0ac-47ef-89fc-1f387ec5a722',
      },
    },
    ingredient: {
      connect: {
        id: 'cb5099fd-75c2-49a0-9508-7e8e65f2d608',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: 'ea8ab742-d0ac-47ef-89fc-1f387ec5a722',
      },
    },
    ingredient: {
      connect: {
        id: '6cb2ccc9-02f2-494c-828f-6da7633bc3cc',
      },
    },
  },
  {
    quantity: 20,
    recipe: {
      connect: {
        id: 'ea8ab742-d0ac-47ef-89fc-1f387ec5a722',
      },
    },
    ingredient: {
      connect: {
        id: 'af4c4245-c074-49e4-8558-bc384d66bf48',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: 'ea8ab742-d0ac-47ef-89fc-1f387ec5a722',
      },
    },
    ingredient: {
      connect: {
        id: 'c74ee230-306a-4f46-b235-74011a1add15',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: 'ea8ab742-d0ac-47ef-89fc-1f387ec5a722',
      },
    },
    ingredient: {
      connect: {
        id: '63e7ec8a-70bb-4e4c-a397-f1a8ded26296',
      },
    },
  },
  {
    quantity: 1000,
    recipe: {
      connect: {
        id: '35f2057f-e003-4472-9451-0dd53e5c5f5b',
      },
    },
    ingredient: {
      connect: {
        id: 'fac062ef-f4cc-4bbf-971e-6310a05b3110',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '35f2057f-e003-4472-9451-0dd53e5c5f5b',
      },
    },
    ingredient: {
      connect: {
        id: '630e0c8e-0ad1-4c12-a8c6-4b74203f634a',
      },
    },
  },
  {
    quantity: 400,
    recipe: {
      connect: {
        id: '35f2057f-e003-4472-9451-0dd53e5c5f5b',
      },
    },
    ingredient: {
      connect: {
        id: '5f091590-8f11-4b6d-ad64-ce502d0139b1',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '35f2057f-e003-4472-9451-0dd53e5c5f5b',
      },
    },
    ingredient: {
      connect: {
        id: 'f3773667-7eaa-4e59-960b-ce5a8bb2a91d',
      },
    },
  },
  {
    quantity: 40,
    recipe: {
      connect: {
        id: '35f2057f-e003-4472-9451-0dd53e5c5f5b',
      },
    },
    ingredient: {
      connect: {
        id: '6b5a1d5e-f65e-4e66-97c5-5fc8b966003a',
      },
    },
  },
  {
    quantity: 40,
    recipe: {
      connect: {
        id: '35f2057f-e003-4472-9451-0dd53e5c5f5b',
      },
    },
    ingredient: {
      connect: {
        id: '84ae51a0-edac-4cfe-b0d6-60aae5c25ec6',
      },
    },
  },
  {
    quantity: 600,
    recipe: {
      connect: {
        id: '35f2057f-e003-4472-9451-0dd53e5c5f5b',
      },
    },
    ingredient: {
      connect: {
        id: '25ed812e-941a-4557-a67d-1d323d1782b2',
      },
    },
  },
  {
    quantity: 20,
    recipe: {
      connect: {
        id: '35f2057f-e003-4472-9451-0dd53e5c5f5b',
      },
    },
    ingredient: {
      connect: {
        id: '92658a2b-a704-4ffa-b55e-45c62f6c4cbb',
      },
    },
  },
  {
    quantity: 100,
    recipe: {
      connect: {
        id: '35f2057f-e003-4472-9451-0dd53e5c5f5b',
      },
    },
    ingredient: {
      connect: {
        id: '574aa65b-4cc7-41c9-9215-e45a748cf4b0',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '35f2057f-e003-4472-9451-0dd53e5c5f5b',
      },
    },
    ingredient: {
      connect: {
        id: '6cb2ccc9-02f2-494c-828f-6da7633bc3cc',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '35f2057f-e003-4472-9451-0dd53e5c5f5b',
      },
    },
    ingredient: {
      connect: {
        id: '63e7ec8a-70bb-4e4c-a397-f1a8ded26296',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '35f2057f-e003-4472-9451-0dd53e5c5f5b',
      },
    },
    ingredient: {
      connect: {
        id: 'c74ee230-306a-4f46-b235-74011a1add15',
      },
    },
  },
  {
    quantity: 10,
    recipe: {
      connect: {
        id: '35f2057f-e003-4472-9451-0dd53e5c5f5b',
      },
    },
    ingredient: {
      connect: {
        id: 'da26c23e-35ce-4183-b3ad-84d4ae830f35',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '3cab447d-413b-4d22-baff-9b0c29a31a41',
      },
    },
    ingredient: {
      connect: {
        id: '6cb2ccc9-02f2-494c-828f-6da7633bc3cc',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '3cab447d-413b-4d22-baff-9b0c29a31a41',
      },
    },
    ingredient: {
      connect: {
        id: 'f3773667-7eaa-4e59-960b-ce5a8bb2a91d',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: '3cab447d-413b-4d22-baff-9b0c29a31a41',
      },
    },
    ingredient: {
      connect: {
        id: 'b291c6af-dd03-4b17-aa99-c236dd7e7f37',
      },
    },
  },
  {
    quantity: 100,
    recipe: {
      connect: {
        id: '3cab447d-413b-4d22-baff-9b0c29a31a41',
      },
    },
    ingredient: {
      connect: {
        id: '35a5a946-080f-48ca-b716-b99e7a4d8189',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: '3cab447d-413b-4d22-baff-9b0c29a31a41',
      },
    },
    ingredient: {
      connect: {
        id: 'd639dcd2-9af0-4536-b337-b53160da4158',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: '3cab447d-413b-4d22-baff-9b0c29a31a41',
      },
    },
    ingredient: {
      connect: {
        id: '16cd886b-a5d3-4874-914d-40b56318b675',
      },
    },
  },
  {
    quantity: 400,
    recipe: {
      connect: {
        id: '3cab447d-413b-4d22-baff-9b0c29a31a41',
      },
    },
    ingredient: {
      connect: {
        id: '19fcf4dc-3705-428b-b7b6-9bef1c52bad5',
      },
    },
  },
  {
    quantity: 1000,
    recipe: {
      connect: {
        id: '3cab447d-413b-4d22-baff-9b0c29a31a41',
      },
    },
    ingredient: {
      connect: {
        id: 'cb5099fd-75c2-49a0-9508-7e8e65f2d608',
      },
    },
  },
  {
    quantity: 400,
    recipe: {
      connect: {
        id: '3cab447d-413b-4d22-baff-9b0c29a31a41',
      },
    },
    ingredient: {
      connect: {
        id: 'e8658bf4-e832-4a18-9fd3-f004d4fd0258',
      },
    },
  },
  {
    quantity: 100,
    recipe: {
      connect: {
        id: '3cab447d-413b-4d22-baff-9b0c29a31a41',
      },
    },
    ingredient: {
      connect: {
        id: 'd08225b9-1ee3-43ee-a204-863319e67e18',
      },
    },
  },
  {
    quantity: 80,
    recipe: {
      connect: {
        id: '3cab447d-413b-4d22-baff-9b0c29a31a41',
      },
    },
    ingredient: {
      connect: {
        id: 'bf81e7d4-9763-4157-8824-c638c502473c',
      },
    },
  },
  {
    quantity: 5,
    recipe: {
      connect: {
        id: '3cab447d-413b-4d22-baff-9b0c29a31a41',
      },
    },
    ingredient: {
      connect: {
        id: '22a7e203-3105-4e7c-9137-4d22fb2fd726',
      },
    },
  },
  {
    quantity: 80,
    recipe: {
      connect: {
        id: '3cab447d-413b-4d22-baff-9b0c29a31a41',
      },
    },
    ingredient: {
      connect: {
        id: 'a36fc203-7925-434c-86da-d60b08e52a67',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '3cab447d-413b-4d22-baff-9b0c29a31a41',
      },
    },
    ingredient: {
      connect: {
        id: '63e7ec8a-70bb-4e4c-a397-f1a8ded26296',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '3cab447d-413b-4d22-baff-9b0c29a31a41',
      },
    },
    ingredient: {
      connect: {
        id: 'c74ee230-306a-4f46-b235-74011a1add15',
      },
    },
  },
  {
    quantity: 120,
    recipe: {
      connect: {
        id: '3cab447d-413b-4d22-baff-9b0c29a31a41',
      },
    },
    ingredient: {
      connect: {
        id: 'a4ff1dfb-6a9e-454a-8455-950ff3f9125b',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '3b17e366-70be-49b1-86e2-18d278efe5b6',
      },
    },
    ingredient: {
      connect: {
        id: '6cb2ccc9-02f2-494c-828f-6da7633bc3cc',
      },
    },
  },
  {
    quantity: 40,
    recipe: {
      connect: {
        id: '3b17e366-70be-49b1-86e2-18d278efe5b6',
      },
    },
    ingredient: {
      connect: {
        id: '6b5a1d5e-f65e-4e66-97c5-5fc8b966003a',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '3b17e366-70be-49b1-86e2-18d278efe5b6',
      },
    },
    ingredient: {
      connect: {
        id: 'd916218a-9b6e-466c-8c41-501a03d8af67',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: '3b17e366-70be-49b1-86e2-18d278efe5b6',
      },
    },
    ingredient: {
      connect: {
        id: '085a1849-e942-447b-92ae-586b31dea795',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '3b17e366-70be-49b1-86e2-18d278efe5b6',
      },
    },
    ingredient: {
      connect: {
        id: '630e0c8e-0ad1-4c12-a8c6-4b74203f634a',
      },
    },
  },
  {
    quantity: 600,
    recipe: {
      connect: {
        id: '3b17e366-70be-49b1-86e2-18d278efe5b6',
      },
    },
    ingredient: {
      connect: {
        id: 'de5b16f1-b096-4228-97a0-74ba1d35fc7c',
      },
    },
  },
  {
    quantity: 240,
    recipe: {
      connect: {
        id: '3b17e366-70be-49b1-86e2-18d278efe5b6',
      },
    },
    ingredient: {
      connect: {
        id: '4b4596a1-383e-4f13-82c0-6a57e0326430',
      },
    },
  },
  {
    quantity: 280,
    recipe: {
      connect: {
        id: '3b17e366-70be-49b1-86e2-18d278efe5b6',
      },
    },
    ingredient: {
      connect: {
        id: '6120928f-a362-47ce-8b48-058d1fe7480f',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: '3b17e366-70be-49b1-86e2-18d278efe5b6',
      },
    },
    ingredient: {
      connect: {
        id: 'f3773667-7eaa-4e59-960b-ce5a8bb2a91d',
      },
    },
  },
  {
    quantity: 28,
    recipe: {
      connect: {
        id: '3b17e366-70be-49b1-86e2-18d278efe5b6',
      },
    },
    ingredient: {
      connect: {
        id: 'd6950004-1b8f-443f-bc65-178719234d4f',
      },
    },
  },
  {
    quantity: 5,
    recipe: {
      connect: {
        id: '3b17e366-70be-49b1-86e2-18d278efe5b6',
      },
    },
    ingredient: {
      connect: {
        id: 'e919a8df-e0ec-4141-9c7f-638f1be2b445',
      },
    },
  },
  {
    quantity: 600,
    recipe: {
      connect: {
        id: '1aa209cc-1758-4ed7-89c5-7f9c782b2d76',
      },
    },
    ingredient: {
      connect: {
        id: '8fe3e630-7c3a-4d3a-a1e3-abcfb399e46d',
      },
    },
  },
  {
    quantity: 180,
    recipe: {
      connect: {
        id: '1aa209cc-1758-4ed7-89c5-7f9c782b2d76',
      },
    },
    ingredient: {
      connect: {
        id: 'e95fa290-e533-4aec-b32e-6a27de25dfdf',
      },
    },
  },
  {
    quantity: 60,
    recipe: {
      connect: {
        id: '1aa209cc-1758-4ed7-89c5-7f9c782b2d76',
      },
    },
    ingredient: {
      connect: {
        id: '124cbad8-f7ff-43ae-a147-7a00833783d8',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '1aa209cc-1758-4ed7-89c5-7f9c782b2d76',
      },
    },
    ingredient: {
      connect: {
        id: '63e7ec8a-70bb-4e4c-a397-f1a8ded26296',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '1aa209cc-1758-4ed7-89c5-7f9c782b2d76',
      },
    },
    ingredient: {
      connect: {
        id: 'c74ee230-306a-4f46-b235-74011a1add15',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '1aa209cc-1758-4ed7-89c5-7f9c782b2d76',
      },
    },
    ingredient: {
      connect: {
        id: '1706675a-4895-40e5-b90d-5efeeeff340b',
      },
    },
  },
  {
    quantity: 90,
    recipe: {
      connect: {
        id: '1aa209cc-1758-4ed7-89c5-7f9c782b2d76',
      },
    },
    ingredient: {
      connect: {
        id: 'a0f43f5a-bc16-48c3-a8e7-adb9cc712663',
      },
    },
  },
  {
    quantity: 40,
    recipe: {
      connect: {
        id: '1aa209cc-1758-4ed7-89c5-7f9c782b2d76',
      },
    },
    ingredient: {
      connect: {
        id: '2aba490b-e083-4de2-9463-7619359c5a1e',
      },
    },
  },
  {
    quantity: 600,
    recipe: {
      connect: {
        id: '1aa209cc-1758-4ed7-89c5-7f9c782b2d76',
      },
    },
    ingredient: {
      connect: {
        id: 'bf81e7d4-9763-4157-8824-c638c502473c',
      },
    },
  },
  {
    quantity: 800,
    recipe: {
      connect: {
        id: '1aa209cc-1758-4ed7-89c5-7f9c782b2d76',
      },
    },
    ingredient: {
      connect: {
        id: 'f3451448-608f-4422-b53b-53ae5f58442c',
      },
    },
  },
  {
    quantity: 400,
    recipe: {
      connect: {
        id: '7045dff2-fb6d-4985-97d5-d308aa09561a',
      },
    },
    ingredient: {
      connect: {
        id: 'f705e3c6-476d-4350-a9f9-254f161cf4eb',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '7045dff2-fb6d-4985-97d5-d308aa09561a',
      },
    },
    ingredient: {
      connect: {
        id: '15a7cb88-1c06-4263-9f92-fe671ee95672',
      },
    },
  },
  {
    quantity: 400,
    recipe: {
      connect: {
        id: '6d76a1d8-2a9c-4e9e-a266-da9c2e38f08b',
      },
    },
    ingredient: {
      connect: {
        id: '5bf8e261-7e6a-4246-b77e-4eaed9db541e',
      },
    },
  },
  {
    quantity: 100,
    recipe: {
      connect: {
        id: '6d76a1d8-2a9c-4e9e-a266-da9c2e38f08b',
      },
    },
    ingredient: {
      connect: {
        id: '54d4b253-52a3-43d1-a6da-4fe23472d9af',
      },
    },
  },
  {
    quantity: 600,
    recipe: {
      connect: {
        id: '6d76a1d8-2a9c-4e9e-a266-da9c2e38f08b',
      },
    },
    ingredient: {
      connect: {
        id: '4efc41aa-13c2-4553-90fc-8ba7be40b23e',
      },
    },
  },
  {
    quantity: 800,
    recipe: {
      connect: {
        id: 'e1db2b58-fb4d-4c27-bf10-c3f9064fc286',
      },
    },
    ingredient: {
      connect: {
        id: 'c72e3123-3ac1-4a0c-a414-6e400e5995ad',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '7045dff2-fb6d-4985-97d5-d308aa09561a',
      },
    },
    ingredient: {
      connect: {
        id: '630e0c8e-0ad1-4c12-a8c6-4b74203f634a',
      },
    },
  },
  {
    quantity: 400,
    recipe: {
      connect: {
        id: 'e1db2b58-fb4d-4c27-bf10-c3f9064fc286',
      },
    },
    ingredient: {
      connect: {
        id: '8cf564be-6129-48b0-abf3-6b921b0097be',
      },
    },
  },
  {
    quantity: 320,
    recipe: {
      connect: {
        id: '7045dff2-fb6d-4985-97d5-d308aa09561a',
      },
    },
    ingredient: {
      connect: {
        id: 'f9f865e3-6c63-4561-84a0-b991f0f203be',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: '7045dff2-fb6d-4985-97d5-d308aa09561a',
      },
    },
    ingredient: {
      connect: {
        id: 'ecca5577-84c0-493d-98e4-2fb319d43b63',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: '7045dff2-fb6d-4985-97d5-d308aa09561a',
      },
    },
    ingredient: {
      connect: {
        id: '56e80f15-848d-4add-9bf3-e27b915261d2',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '7045dff2-fb6d-4985-97d5-d308aa09561a',
      },
    },
    ingredient: {
      connect: {
        id: 'f3773667-7eaa-4e59-960b-ce5a8bb2a91d',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: '7045dff2-fb6d-4985-97d5-d308aa09561a',
      },
    },
    ingredient: {
      connect: {
        id: '5ceb348b-abc5-472f-aa89-05116d45c651',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '7045dff2-fb6d-4985-97d5-d308aa09561a',
      },
    },
    ingredient: {
      connect: {
        id: '6cb2ccc9-02f2-494c-828f-6da7633bc3cc',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '7045dff2-fb6d-4985-97d5-d308aa09561a',
      },
    },
    ingredient: {
      connect: {
        id: '63e7ec8a-70bb-4e4c-a397-f1a8ded26296',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '7045dff2-fb6d-4985-97d5-d308aa09561a',
      },
    },
    ingredient: {
      connect: {
        id: 'c74ee230-306a-4f46-b235-74011a1add15',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '7045dff2-fb6d-4985-97d5-d308aa09561a',
      },
    },
    ingredient: {
      connect: {
        id: '72d22580-fa55-474e-b390-4950ef4d741d',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '6d76a1d8-2a9c-4e9e-a266-da9c2e38f08b',
      },
    },
    ingredient: {
      connect: {
        id: '63e7ec8a-70bb-4e4c-a397-f1a8ded26296',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '6d76a1d8-2a9c-4e9e-a266-da9c2e38f08b',
      },
    },
    ingredient: {
      connect: {
        id: 'c74ee230-306a-4f46-b235-74011a1add15',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '6d76a1d8-2a9c-4e9e-a266-da9c2e38f08b',
      },
    },
    ingredient: {
      connect: {
        id: 'caa23027-f4e1-4a03-bc11-d2a7ff20edda',
      },
    },
  },
  {
    quantity: 10,
    recipe: {
      connect: {
        id: '6d76a1d8-2a9c-4e9e-a266-da9c2e38f08b',
      },
    },
    ingredient: {
      connect: {
        id: '22a7e203-3105-4e7c-9137-4d22fb2fd726',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: '6d76a1d8-2a9c-4e9e-a266-da9c2e38f08b',
      },
    },
    ingredient: {
      connect: {
        id: '56e80f15-848d-4add-9bf3-e27b915261d2',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '6d76a1d8-2a9c-4e9e-a266-da9c2e38f08b',
      },
    },
    ingredient: {
      connect: {
        id: 'd639dcd2-9af0-4536-b337-b53160da4158',
      },
    },
  },
  {
    quantity: 500,
    recipe: {
      connect: {
        id: '6d76a1d8-2a9c-4e9e-a266-da9c2e38f08b',
      },
    },
    ingredient: {
      connect: {
        id: '87e60612-888d-4854-a4f3-c5e3026c2ae0',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '6d76a1d8-2a9c-4e9e-a266-da9c2e38f08b',
      },
    },
    ingredient: {
      connect: {
        id: 'f3773667-7eaa-4e59-960b-ce5a8bb2a91d',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: '6d76a1d8-2a9c-4e9e-a266-da9c2e38f08b',
      },
    },
    ingredient: {
      connect: {
        id: '1706675a-4895-40e5-b90d-5efeeeff340b',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '6d76a1d8-2a9c-4e9e-a266-da9c2e38f08b',
      },
    },
    ingredient: {
      connect: {
        id: 'dd2cd175-c6de-4ace-8a0b-5e1ed7512503',
      },
    },
  },
  {
    quantity: 200,
    recipe: {
      connect: {
        id: '6d76a1d8-2a9c-4e9e-a266-da9c2e38f08b',
      },
    },
    ingredient: {
      connect: {
        id: '849ef558-907e-4ae6-8049-5a5f5a2420c9',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: 'e1db2b58-fb4d-4c27-bf10-c3f9064fc286',
      },
    },
    ingredient: {
      connect: {
        id: 'f3773667-7eaa-4e59-960b-ce5a8bb2a91d',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: 'e1db2b58-fb4d-4c27-bf10-c3f9064fc286',
      },
    },
    ingredient: {
      connect: {
        id: 'b291c6af-dd03-4b17-aa99-c236dd7e7f37',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: 'e1db2b58-fb4d-4c27-bf10-c3f9064fc286',
      },
    },
    ingredient: {
      connect: {
        id: '16cd886b-a5d3-4874-914d-40b56318b675',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: 'e1db2b58-fb4d-4c27-bf10-c3f9064fc286',
      },
    },
    ingredient: {
      connect: {
        id: 'd639dcd2-9af0-4536-b337-b53160da4158',
      },
    },
  },
  {
    quantity: 200,
    recipe: {
      connect: {
        id: 'e1db2b58-fb4d-4c27-bf10-c3f9064fc286',
      },
    },
    ingredient: {
      connect: {
        id: '736144ae-c594-481c-9fad-41b28c8ea03f',
      },
    },
  },
  {
    quantity: 12,
    recipe: {
      connect: {
        id: 'e1db2b58-fb4d-4c27-bf10-c3f9064fc286',
      },
    },
    ingredient: {
      connect: {
        id: 'a97d0cd0-4765-403b-b078-462a35b61bec',
      },
    },
  },
  {
    quantity: 180,
    recipe: {
      connect: {
        id: 'e1db2b58-fb4d-4c27-bf10-c3f9064fc286',
      },
    },
    ingredient: {
      connect: {
        id: '54d4b253-52a3-43d1-a6da-4fe23472d9af',
      },
    },
  },
  {
    quantity: 200,
    recipe: {
      connect: {
        id: 'e1db2b58-fb4d-4c27-bf10-c3f9064fc286',
      },
    },
    ingredient: {
      connect: {
        id: '4b44cf18-9795-4176-8609-d7e7f1ffa8c6',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: 'e1db2b58-fb4d-4c27-bf10-c3f9064fc286',
      },
    },
    ingredient: {
      connect: {
        id: '35de64d1-130e-4d6b-bb60-deb3ba4e8b56',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: 'e1db2b58-fb4d-4c27-bf10-c3f9064fc286',
      },
    },
    ingredient: {
      connect: {
        id: 'f8346816-2081-4cfc-83a6-11911873ecf5',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: 'e1db2b58-fb4d-4c27-bf10-c3f9064fc286',
      },
    },
    ingredient: {
      connect: {
        id: '2aba490b-e083-4de2-9463-7619359c5a1e',
      },
    },
  },
  {
    quantity: 6,
    recipe: {
      connect: {
        id: 'e1db2b58-fb4d-4c27-bf10-c3f9064fc286',
      },
    },
    ingredient: {
      connect: {
        id: '5db0737f-bc97-49a9-bf4b-b29a1de3352b',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: 'e1db2b58-fb4d-4c27-bf10-c3f9064fc286',
      },
    },
    ingredient: {
      connect: {
        id: '63e7ec8a-70bb-4e4c-a397-f1a8ded26296',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: 'e1db2b58-fb4d-4c27-bf10-c3f9064fc286',
      },
    },
    ingredient: {
      connect: {
        id: 'c74ee230-306a-4f46-b235-74011a1add15',
      },
    },
  },
  {
    quantity: 250,
    recipe: {
      connect: {
        id: '1b8f669a-01e2-4d5f-9af2-f09c4763e18e',
      },
    },
    ingredient: {
      connect: {
        id: '6c9258de-cc97-4053-a2fa-1f47b57b0391',
      },
    },
  },
  {
    quantity: 800,
    recipe: {
      connect: {
        id: '1b8f669a-01e2-4d5f-9af2-f09c4763e18e',
      },
    },
    ingredient: {
      connect: {
        id: '19fcf4dc-3705-428b-b7b6-9bef1c52bad5',
      },
    },
  },
  {
    quantity: 400,
    recipe: {
      connect: {
        id: '1b8f669a-01e2-4d5f-9af2-f09c4763e18e',
      },
    },
    ingredient: {
      connect: {
        id: '9debacd1-b276-4fa4-a95d-b4919e0ce24a',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: '1b8f669a-01e2-4d5f-9af2-f09c4763e18e',
      },
    },
    ingredient: {
      connect: {
        id: '56e80f15-848d-4add-9bf3-e27b915261d2',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '1b8f669a-01e2-4d5f-9af2-f09c4763e18e',
      },
    },
    ingredient: {
      connect: {
        id: 'f3773667-7eaa-4e59-960b-ce5a8bb2a91d',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '1b8f669a-01e2-4d5f-9af2-f09c4763e18e',
      },
    },
    ingredient: {
      connect: {
        id: '6cb2ccc9-02f2-494c-828f-6da7633bc3cc',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '1b8f669a-01e2-4d5f-9af2-f09c4763e18e',
      },
    },
    ingredient: {
      connect: {
        id: 'c74ee230-306a-4f46-b235-74011a1add15',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '1b8f669a-01e2-4d5f-9af2-f09c4763e18e',
      },
    },
    ingredient: {
      connect: {
        id: '63e7ec8a-70bb-4e4c-a397-f1a8ded26296',
      },
    },
  },
  {
    quantity: 8,
    recipe: {
      connect: {
        id: '1b8f669a-01e2-4d5f-9af2-f09c4763e18e',
      },
    },
    ingredient: {
      connect: {
        id: '58d9b241-5ca2-4848-b613-7205b67e64ae',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '1b8f669a-01e2-4d5f-9af2-f09c4763e18e',
      },
    },
    ingredient: {
      connect: {
        id: 'bea38bdd-5313-4ddc-93c7-540fff5166ee',
      },
    },
  },
  {
    quantity: 100,
    recipe: {
      connect: {
        id: '1b8f669a-01e2-4d5f-9af2-f09c4763e18e',
      },
    },
    ingredient: {
      connect: {
        id: '54d4b253-52a3-43d1-a6da-4fe23472d9af',
      },
    },
  },
  {
    quantity: 70,
    recipe: {
      connect: {
        id: '1b8f669a-01e2-4d5f-9af2-f09c4763e18e',
      },
    },
    ingredient: {
      connect: {
        id: 'af4c4245-c074-49e4-8558-bc384d66bf48',
      },
    },
  },
  {
    quantity: 70,
    recipe: {
      connect: {
        id: '1b8f669a-01e2-4d5f-9af2-f09c4763e18e',
      },
    },
    ingredient: {
      connect: {
        id: 'e95fa290-e533-4aec-b32e-6a27de25dfdf',
      },
    },
  },
  {
    quantity: 500,
    recipe: {
      connect: {
        id: '1b8f669a-01e2-4d5f-9af2-f09c4763e18e',
      },
    },
    ingredient: {
      connect: {
        id: '849ef558-907e-4ae6-8049-5a5f5a2420c9',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: '1b8f669a-01e2-4d5f-9af2-f09c4763e18e',
      },
    },
    ingredient: {
      connect: {
        id: '4666ac76-9fee-4698-91b5-7c5a8f800b09',
      },
    },
  },
  {
    quantity: 100,
    recipe: {
      connect: {
        id: '1b8f669a-01e2-4d5f-9af2-f09c4763e18e',
      },
    },
    ingredient: {
      connect: {
        id: 'd55b93eb-7a6b-4516-823a-a3189bae008b',
      },
    },
  },
  {
    quantity: 400,
    recipe: {
      connect: {
        id: '75aee2ca-ef2f-4a05-a4df-acb833f4c94b',
      },
    },
    ingredient: {
      connect: {
        id: '5b42b80c-3f2c-4450-808d-0aa91e000e02',
      },
    },
  },
  {
    quantity: 400,
    recipe: {
      connect: {
        id: '75aee2ca-ef2f-4a05-a4df-acb833f4c94b',
      },
    },
    ingredient: {
      connect: {
        id: '4efc41aa-13c2-4553-90fc-8ba7be40b23e',
      },
    },
  },
  {
    quantity: 400,
    recipe: {
      connect: {
        id: '75aee2ca-ef2f-4a05-a4df-acb833f4c94b',
      },
    },
    ingredient: {
      connect: {
        id: '19fcf4dc-3705-428b-b7b6-9bef1c52bad5',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '75aee2ca-ef2f-4a05-a4df-acb833f4c94b',
      },
    },
    ingredient: {
      connect: {
        id: 'f3773667-7eaa-4e59-960b-ce5a8bb2a91d',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '75aee2ca-ef2f-4a05-a4df-acb833f4c94b',
      },
    },
    ingredient: {
      connect: {
        id: 'acade453-5ff2-432b-9bd4-c7712881a1a8',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '75aee2ca-ef2f-4a05-a4df-acb833f4c94b',
      },
    },
    ingredient: {
      connect: {
        id: 'c74ee230-306a-4f46-b235-74011a1add15',
      },
    },
  },
  {
    quantity: 400,
    recipe: {
      connect: {
        id: '75aee2ca-ef2f-4a05-a4df-acb833f4c94b',
      },
    },
    ingredient: {
      connect: {
        id: '9debacd1-b276-4fa4-a95d-b4919e0ce24a',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: '75aee2ca-ef2f-4a05-a4df-acb833f4c94b',
      },
    },
    ingredient: {
      connect: {
        id: '56e80f15-848d-4add-9bf3-e27b915261d2',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '75aee2ca-ef2f-4a05-a4df-acb833f4c94b',
      },
    },
    ingredient: {
      connect: {
        id: 'caa23027-f4e1-4a03-bc11-d2a7ff20edda',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '75aee2ca-ef2f-4a05-a4df-acb833f4c94b',
      },
    },
    ingredient: {
      connect: {
        id: '6cb2ccc9-02f2-494c-828f-6da7633bc3cc',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '75aee2ca-ef2f-4a05-a4df-acb833f4c94b',
      },
    },
    ingredient: {
      connect: {
        id: '63e7ec8a-70bb-4e4c-a397-f1a8ded26296',
      },
    },
  },
  {
    quantity: 60,
    recipe: {
      connect: {
        id: '75aee2ca-ef2f-4a05-a4df-acb833f4c94b',
      },
    },
    ingredient: {
      connect: {
        id: 'd6950004-1b8f-443f-bc65-178719234d4f',
      },
    },
  },
  {
    quantity: 20,
    recipe: {
      connect: {
        id: '75aee2ca-ef2f-4a05-a4df-acb833f4c94b',
      },
    },
    ingredient: {
      connect: {
        id: 'ceb57336-3f54-47ef-aa4f-67963302ccdc',
      },
    },
  },
  {
    quantity: 120,
    recipe: {
      connect: {
        id: '75aee2ca-ef2f-4a05-a4df-acb833f4c94b',
      },
    },
    ingredient: {
      connect: {
        id: '54d4b253-52a3-43d1-a6da-4fe23472d9af',
      },
    },
  },
  {
    quantity: 600,
    recipe: {
      connect: {
        id: '8dd96033-2dd8-4126-8498-c67d5aff8bd7',
      },
    },
    ingredient: {
      connect: {
        id: '25ed812e-941a-4557-a67d-1d323d1782b2',
      },
    },
  },
  {
    quantity: 800,
    recipe: {
      connect: {
        id: '8dd96033-2dd8-4126-8498-c67d5aff8bd7',
      },
    },
    ingredient: {
      connect: {
        id: 'a1416d19-8a5c-417c-ab13-658c3f73a050',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '8dd96033-2dd8-4126-8498-c67d5aff8bd7',
      },
    },
    ingredient: {
      connect: {
        id: '63e7ec8a-70bb-4e4c-a397-f1a8ded26296',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '8dd96033-2dd8-4126-8498-c67d5aff8bd7',
      },
    },
    ingredient: {
      connect: {
        id: 'c74ee230-306a-4f46-b235-74011a1add15',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '8dd96033-2dd8-4126-8498-c67d5aff8bd7',
      },
    },
    ingredient: {
      connect: {
        id: 'caa23027-f4e1-4a03-bc11-d2a7ff20edda',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '8dd96033-2dd8-4126-8498-c67d5aff8bd7',
      },
    },
    ingredient: {
      connect: {
        id: '16104aca-4e47-47d0-9bc6-288da7c54f82',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '47ca6256-ac10-4257-b07b-f7f2964ba3b1',
      },
    },
    ingredient: {
      connect: {
        id: '08c201f0-2d84-4dd1-b668-873a8ed312db',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '8dd96033-2dd8-4126-8498-c67d5aff8bd7',
      },
    },
    ingredient: {
      connect: {
        id: 'deb74786-08ec-42b4-97c6-b7744392091b',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '8dd96033-2dd8-4126-8498-c67d5aff8bd7',
      },
    },
    ingredient: {
      connect: {
        id: '6cb2ccc9-02f2-494c-828f-6da7633bc3cc',
      },
    },
  },
  {
    quantity: 16,
    recipe: {
      connect: {
        id: '776d9bcd-7d8c-4aab-ad3b-50cb0fcd5228',
      },
    },
    ingredient: {
      connect: {
        id: 'dd2cd175-c6de-4ace-8a0b-5e1ed7512503',
      },
    },
  },
  {
    quantity: 360,
    recipe: {
      connect: {
        id: '776d9bcd-7d8c-4aab-ad3b-50cb0fcd5228',
      },
    },
    ingredient: {
      connect: {
        id: '35a5a946-080f-48ca-b716-b99e7a4d8189',
      },
    },
  },
  {
    quantity: 400,
    recipe: {
      connect: {
        id: '776d9bcd-7d8c-4aab-ad3b-50cb0fcd5228',
      },
    },
    ingredient: {
      connect: {
        id: 'b99b47fc-c3ab-47c2-8eb2-102ca7e38643',
      },
    },
  },
  {
    quantity: 200,
    recipe: {
      connect: {
        id: '776d9bcd-7d8c-4aab-ad3b-50cb0fcd5228',
      },
    },
    ingredient: {
      connect: {
        id: '2486f85b-30d0-448a-abd2-3f640d3a76ce',
      },
    },
  },
  {
    quantity: 200,
    recipe: {
      connect: {
        id: '776d9bcd-7d8c-4aab-ad3b-50cb0fcd5228',
      },
    },
    ingredient: {
      connect: {
        id: '54d4b253-52a3-43d1-a6da-4fe23472d9af',
      },
    },
  },
  {
    quantity: 600,
    recipe: {
      connect: {
        id: '776d9bcd-7d8c-4aab-ad3b-50cb0fcd5228',
      },
    },
    ingredient: {
      connect: {
        id: 'de5b16f1-b096-4228-97a0-74ba1d35fc7c',
      },
    },
  },
  {
    quantity: 16,
    recipe: {
      connect: {
        id: '776d9bcd-7d8c-4aab-ad3b-50cb0fcd5228',
      },
    },
    ingredient: {
      connect: {
        id: '58d9b241-5ca2-4848-b613-7205b67e64ae',
      },
    },
  },
  {
    quantity: 8,
    recipe: {
      connect: {
        id: '776d9bcd-7d8c-4aab-ad3b-50cb0fcd5228',
      },
    },
    ingredient: {
      connect: {
        id: '6b4ed907-e943-4938-86ba-2ce21c9e09f0',
      },
    },
  },
  {
    quantity: 240,
    recipe: {
      connect: {
        id: '28fdadff-0b6d-4e05-b82a-e28d3a016f49',
      },
    },
    ingredient: {
      connect: {
        id: '0cfafafa-e81d-4c6e-ba3b-a927a01fefcc',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '28fdadff-0b6d-4e05-b82a-e28d3a016f49',
      },
    },
    ingredient: {
      connect: {
        id: 'f3773667-7eaa-4e59-960b-ce5a8bb2a91d',
      },
    },
  },
  {
    quantity: 600,
    recipe: {
      connect: {
        id: '28fdadff-0b6d-4e05-b82a-e28d3a016f49',
      },
    },
    ingredient: {
      connect: {
        id: '5b42b80c-3f2c-4450-808d-0aa91e000e02',
      },
    },
  },
  {
    quantity: 180,
    recipe: {
      connect: {
        id: '28fdadff-0b6d-4e05-b82a-e28d3a016f49',
      },
    },
    ingredient: {
      connect: {
        id: 'a4ff1dfb-6a9e-454a-8455-950ff3f9125b',
      },
    },
  },
  {
    quantity: 400,
    recipe: {
      connect: {
        id: '28fdadff-0b6d-4e05-b82a-e28d3a016f49',
      },
    },
    ingredient: {
      connect: {
        id: '53569045-6ae5-4665-b9e5-65e7cd6afacf',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '28fdadff-0b6d-4e05-b82a-e28d3a016f49',
      },
    },
    ingredient: {
      connect: {
        id: '1706675a-4895-40e5-b90d-5efeeeff340b',
      },
    },
  },
  {
    quantity: 400,
    recipe: {
      connect: {
        id: '28fdadff-0b6d-4e05-b82a-e28d3a016f49',
      },
    },
    ingredient: {
      connect: {
        id: '176769ba-ad18-455f-ad38-dcae1b624536',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '28fdadff-0b6d-4e05-b82a-e28d3a016f49',
      },
    },
    ingredient: {
      connect: {
        id: '63e7ec8a-70bb-4e4c-a397-f1a8ded26296',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '28fdadff-0b6d-4e05-b82a-e28d3a016f49',
      },
    },
    ingredient: {
      connect: {
        id: 'c74ee230-306a-4f46-b235-74011a1add15',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: '28fdadff-0b6d-4e05-b82a-e28d3a016f49',
      },
    },
    ingredient: {
      connect: {
        id: '4666ac76-9fee-4698-91b5-7c5a8f800b09',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '5538394b-5332-4d39-a89a-56225044b056',
      },
    },
    ingredient: {
      connect: {
        id: '75086d67-db3e-4269-9e1d-73c8fd42a068',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '47ca6256-ac10-4257-b07b-f7f2964ba3b1',
      },
    },
    ingredient: {
      connect: {
        id: '9f28a4fa-5616-4d39-9239-7297262dcfa3',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '5538394b-5332-4d39-a89a-56225044b056',
      },
    },
    ingredient: {
      connect: {
        id: '08c201f0-2d84-4dd1-b668-873a8ed312db',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: '5538394b-5332-4d39-a89a-56225044b056',
      },
    },
    ingredient: {
      connect: {
        id: 'd639dcd2-9af0-4536-b337-b53160da4158',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: '47ca6256-ac10-4257-b07b-f7f2964ba3b1',
      },
    },
    ingredient: {
      connect: {
        id: '3c8c85d5-3c32-4e5d-881d-80fbc8bf7b82',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: '5538394b-5332-4d39-a89a-56225044b056',
      },
    },
    ingredient: {
      connect: {
        id: '57a6fa64-fcc6-4ea2-bce1-4ae472c5f81b',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: '47ca6256-ac10-4257-b07b-f7f2964ba3b1',
      },
    },
    ingredient: {
      connect: {
        id: '57a6fa64-fcc6-4ea2-bce1-4ae472c5f81b',
      },
    },
  },
  {
    quantity: 400,
    recipe: {
      connect: {
        id: '5538394b-5332-4d39-a89a-56225044b056',
      },
    },
    ingredient: {
      connect: {
        id: 'c72e3123-3ac1-4a0c-a414-6e400e5995ad',
      },
    },
  },
  {
    quantity: 400,
    recipe: {
      connect: {
        id: '47ca6256-ac10-4257-b07b-f7f2964ba3b1',
      },
    },
    ingredient: {
      connect: {
        id: 'c72e3123-3ac1-4a0c-a414-6e400e5995ad',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '47ca6256-ac10-4257-b07b-f7f2964ba3b1',
      },
    },
    ingredient: {
      connect: {
        id: 'f3773667-7eaa-4e59-960b-ce5a8bb2a91d',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '5538394b-5332-4d39-a89a-56225044b056',
      },
    },
    ingredient: {
      connect: {
        id: 'f3773667-7eaa-4e59-960b-ce5a8bb2a91d',
      },
    },
  },
  {
    quantity: 80,
    recipe: {
      connect: {
        id: '5538394b-5332-4d39-a89a-56225044b056',
      },
    },
    ingredient: {
      connect: {
        id: '6b5a1d5e-f65e-4e66-97c5-5fc8b966003a',
      },
    },
  },
  {
    quantity: 80,
    recipe: {
      connect: {
        id: '47ca6256-ac10-4257-b07b-f7f2964ba3b1',
      },
    },
    ingredient: {
      connect: {
        id: '6b5a1d5e-f65e-4e66-97c5-5fc8b966003a',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '5538394b-5332-4d39-a89a-56225044b056',
      },
    },
    ingredient: {
      connect: {
        id: '684d8ddc-9cd1-4b66-94a4-fb39e102b4a3',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '47ca6256-ac10-4257-b07b-f7f2964ba3b1',
      },
    },
    ingredient: {
      connect: {
        id: '684d8ddc-9cd1-4b66-94a4-fb39e102b4a3',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: '5538394b-5332-4d39-a89a-56225044b056',
      },
    },
    ingredient: {
      connect: {
        id: 'a66ce07a-b84d-44b1-b836-8352e48b5a1b',
      },
    },
  },
  {
    quantity: 1,
    recipe: {
      connect: {
        id: '47ca6256-ac10-4257-b07b-f7f2964ba3b1',
      },
    },
    ingredient: {
      connect: {
        id: 'a66ce07a-b84d-44b1-b836-8352e48b5a1b',
      },
    },
  },
  {
    quantity: 500,
    recipe: {
      connect: {
        id: '47ca6256-ac10-4257-b07b-f7f2964ba3b1',
      },
    },
    ingredient: {
      connect: {
        id: '6120928f-a362-47ce-8b48-058d1fe7480f',
      },
    },
  },
  {
    quantity: 500,
    recipe: {
      connect: {
        id: '5538394b-5332-4d39-a89a-56225044b056',
      },
    },
    ingredient: {
      connect: {
        id: '6120928f-a362-47ce-8b48-058d1fe7480f',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '5538394b-5332-4d39-a89a-56225044b056',
      },
    },
    ingredient: {
      connect: {
        id: '63e7ec8a-70bb-4e4c-a397-f1a8ded26296',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '5538394b-5332-4d39-a89a-56225044b056',
      },
    },
    ingredient: {
      connect: {
        id: 'c74ee230-306a-4f46-b235-74011a1add15',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '47ca6256-ac10-4257-b07b-f7f2964ba3b1',
      },
    },
    ingredient: {
      connect: {
        id: '63e7ec8a-70bb-4e4c-a397-f1a8ded26296',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '47ca6256-ac10-4257-b07b-f7f2964ba3b1',
      },
    },
    ingredient: {
      connect: {
        id: 'c74ee230-306a-4f46-b235-74011a1add15',
      },
    },
  },
  {
    quantity: 280,
    recipe: {
      connect: {
        id: '5538394b-5332-4d39-a89a-56225044b056',
      },
    },
    ingredient: {
      connect: {
        id: '8ca258a9-324a-4b15-b780-4b011a6fe6db',
      },
    },
  },
  {
    quantity: 280,
    recipe: {
      connect: {
        id: '47ca6256-ac10-4257-b07b-f7f2964ba3b1',
      },
    },
    ingredient: {
      connect: {
        id: '8ca258a9-324a-4b15-b780-4b011a6fe6db',
      },
    },
  },
  {
    quantity: 400,
    recipe: {
      connect: {
        id: '5538394b-5332-4d39-a89a-56225044b056',
      },
    },
    ingredient: {
      connect: {
        id: 'b59189c2-fa12-4abe-92e4-7fa4c1eaf253',
      },
    },
  },
  {
    quantity: 400,
    recipe: {
      connect: {
        id: '47ca6256-ac10-4257-b07b-f7f2964ba3b1',
      },
    },
    ingredient: {
      connect: {
        id: 'b59189c2-fa12-4abe-92e4-7fa4c1eaf253',
      },
    },
  },
  {
    quantity: 12,
    recipe: {
      connect: {
        id: '47ca6256-ac10-4257-b07b-f7f2964ba3b1',
      },
    },
    ingredient: {
      connect: {
        id: 'e919a8df-e0ec-4141-9c7f-638f1be2b445',
      },
    },
  },
  {
    quantity: 100,
    recipe: {
      connect: {
        id: '47ca6256-ac10-4257-b07b-f7f2964ba3b1',
      },
    },
    ingredient: {
      connect: {
        id: '33059226-2274-4a70-816c-161d3fd8a6ee',
      },
    },
  },
  {
    quantity: 12,
    recipe: {
      connect: {
        id: '5538394b-5332-4d39-a89a-56225044b056',
      },
    },
    ingredient: {
      connect: {
        id: 'e919a8df-e0ec-4141-9c7f-638f1be2b445',
      },
    },
  },
  {
    quantity: 100,
    recipe: {
      connect: {
        id: '5538394b-5332-4d39-a89a-56225044b056',
      },
    },
    ingredient: {
      connect: {
        id: '33059226-2274-4a70-816c-161d3fd8a6ee',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '5538394b-5332-4d39-a89a-56225044b056',
      },
    },
    ingredient: {
      connect: {
        id: 'f8346816-2081-4cfc-83a6-11911873ecf5',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '47ca6256-ac10-4257-b07b-f7f2964ba3b1',
      },
    },
    ingredient: {
      connect: {
        id: 'f8346816-2081-4cfc-83a6-11911873ecf5',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '4b499aa7-16ed-42ec-afcb-b3d93560c4bd',
      },
    },
    ingredient: {
      connect: {
        id: '57a6fa64-fcc6-4ea2-bce1-4ae472c5f81b',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '4b499aa7-16ed-42ec-afcb-b3d93560c4bd',
      },
    },
    ingredient: {
      connect: {
        id: '7338bbc3-4cf3-49e4-ad82-f80e38daf849',
      },
    },
  },
  {
    quantity: 80,
    recipe: {
      connect: {
        id: '4b499aa7-16ed-42ec-afcb-b3d93560c4bd',
      },
    },
    ingredient: {
      connect: {
        id: 'af4c4245-c074-49e4-8558-bc384d66bf48',
      },
    },
  },
  {
    quantity: 300,
    recipe: {
      connect: {
        id: '4b499aa7-16ed-42ec-afcb-b3d93560c4bd',
      },
    },
    ingredient: {
      connect: {
        id: 'b9ab5752-f6a5-4332-9af6-937ca0ed68f4',
      },
    },
  },
  {
    quantity: 150,
    recipe: {
      connect: {
        id: '4b499aa7-16ed-42ec-afcb-b3d93560c4bd',
      },
    },
    ingredient: {
      connect: {
        id: 'a1b9969c-5ecf-4e3b-90fa-dee5a8f2f4a1',
      },
    },
  },
  {
    quantity: 2,
    recipe: {
      connect: {
        id: '4b499aa7-16ed-42ec-afcb-b3d93560c4bd',
      },
    },
    ingredient: {
      connect: {
        id: '1706675a-4895-40e5-b90d-5efeeeff340b',
      },
    },
  },
  {
    quantity: 11,
    recipe: {
      connect: {
        id: '4b499aa7-16ed-42ec-afcb-b3d93560c4bd',
      },
    },
    ingredient: {
      connect: {
        id: '89bf939e-6a62-4da6-aa42-ee99b2dc4cf4',
      },
    },
  },
  {
    quantity: 4,
    recipe: {
      connect: {
        id: '4b499aa7-16ed-42ec-afcb-b3d93560c4bd',
      },
    },
    ingredient: {
      connect: {
        id: '6cb2ccc9-02f2-494c-828f-6da7633bc3cc',
      },
    },
  },
];

export function seedRecipeIngredients(prisma: PrismaClient) {
  return Promise.all(
    recipeIngredients.map((recipeIngredient) =>
      prisma.recipeIngredientPivot.upsert({
        where: {
          recipeId_ingredientId: {
            recipeId: recipeIngredient.recipe.connect!.id!,
            ingredientId: recipeIngredient.ingredient.connect!.id!,
          },
        },
        update: recipeIngredient,
        create: recipeIngredient,
      }),
    ),
  );
}

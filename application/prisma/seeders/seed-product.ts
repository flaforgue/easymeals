import { Prisma, PrismaClient } from '../client';

const products: Prisma.ProductCreateInput[] = [
  {
    id: '9165cca8-e4b0-482c-99c7-d58a6256aa07',
    name: 'Dentifrice',
    category: {
      connect: {
        id: '931b60cc-fedc-4f97-84c8-33593ec3ca77',
      },
    },
  },
  {
    id: '55a51629-996a-4664-a6c6-d0383b8b4280',
    name: 'Gel douche',
    category: {
      connect: {
        id: '931b60cc-fedc-4f97-84c8-33593ec3ca77',
      },
    },
  },
  {
    id: '4f06cb92-dec9-47fd-b981-7da026d8506d',
    name: 'Shampoing',
    category: {
      connect: {
        id: '931b60cc-fedc-4f97-84c8-33593ec3ca77',
      },
    },
  },
  {
    id: '07bdfd5d-6f76-4902-bbc4-ffa26ab5959e',
    name: 'Après-shampoing',
    category: {
      connect: {
        id: '931b60cc-fedc-4f97-84c8-33593ec3ca77',
      },
    },
  },
  {
    id: '0a41474b-197b-4054-8ac0-db61cdb9ff8d',
    name: 'Savon',
    category: {
      connect: {
        id: '931b60cc-fedc-4f97-84c8-33593ec3ca77',
      },
    },
  },
  {
    id: '7276e888-42cd-41cf-9276-a96109098adc',
    name: 'Savon liquide',
    category: {
      connect: {
        id: '931b60cc-fedc-4f97-84c8-33593ec3ca77',
      },
    },
  },
  {
    id: '1cf2a52e-0a92-4fe3-817f-2c9ea3079216',
    name: 'Déodorant (homme)',
    category: {
      connect: {
        id: '931b60cc-fedc-4f97-84c8-33593ec3ca77',
      },
    },
  },
  {
    id: 'ca902091-ad63-417c-b529-2a3a0478db95',
    name: 'Déodorant (femme)',
    category: {
      connect: {
        id: '931b60cc-fedc-4f97-84c8-33593ec3ca77',
      },
    },
  },
  {
    id: 'fbfac8b7-034d-4047-acea-2a2597ff686d',
    name: 'Lessive',
    category: {
      connect: {
        id: 'bf2ec045-0651-438d-ba81-2033909bf3ad',
      },
    },
  },
  {
    id: '5c167e0e-71b0-4b0a-aa92-6af4f636bdf5',
    name: 'Lessive (bébé)',
    category: {
      connect: {
        id: 'bf2ec045-0651-438d-ba81-2033909bf3ad',
      },
    },
  },
  {
    id: 'acac6a4f-d9e4-47d2-8a2a-8b036d3d1590',
    name: 'Papier toilette',
    category: {
      connect: {
        id: 'bf2ec045-0651-438d-ba81-2033909bf3ad',
      },
    },
  },
  {
    id: '57dedcb3-51db-4788-94dd-4ca552400ccb',
    name: 'Essuie-tout',
    category: {
      connect: {
        id: 'bf2ec045-0651-438d-ba81-2033909bf3ad',
      },
    },
  },
  {
    id: 'e815e1b4-5e8a-48da-ab27-c089cac7af5e',
    name: 'Pastilles de lave-vaisselle',
    category: {
      connect: {
        id: 'bf2ec045-0651-438d-ba81-2033909bf3ad',
      },
    },
  },
  {
    id: '09fb5772-ce68-4429-928b-1439c5af2032',
    name: 'Liquide de rinçage',
    category: {
      connect: {
        id: 'bf2ec045-0651-438d-ba81-2033909bf3ad',
      },
    },
  },
  {
    id: 'cd9f7ce6-3870-4bfb-a9f8-d600bbae19f0',
    name: 'Sel de lave-vaisselle',
    category: {
      connect: {
        id: 'bf2ec045-0651-438d-ba81-2033909bf3ad',
      },
    },
  },
  {
    id: '6afdc1c0-3e09-4933-881e-970556b6420b',
    name: 'Liquide vaisselle',
    category: {
      connect: {
        id: 'bf2ec045-0651-438d-ba81-2033909bf3ad',
      },
    },
  },
  {
    id: '5c84ed3e-ecd1-4994-8adc-fd0f10e436f4',
    name: 'Décolor stop',
    category: {
      connect: {
        id: 'bf2ec045-0651-438d-ba81-2033909bf3ad',
      },
    },
  },
  {
    id: 'b9950b14-4d8a-451a-9ea3-96f042277214',
    name: 'Bouteille de savon noir',
    category: {
      connect: {
        id: 'bf2ec045-0651-438d-ba81-2033909bf3ad',
      },
    },
  },
  {
    id: 'a7afe429-5e0b-4732-8070-9433af685b49',
    name: "Vinaigre d'alcool",
    category: {
      connect: {
        id: 'bf2ec045-0651-438d-ba81-2033909bf3ad',
      },
    },
  },
  {
    id: '15b6a331-c95b-413e-85a4-964c3724083f',
    name: 'Sacs poubelle 30L',
    category: {
      connect: {
        id: 'bf2ec045-0651-438d-ba81-2033909bf3ad',
      },
    },
  },
  {
    id: '6f7e7473-cd02-45a0-9967-5752ff9ae998',
    name: 'Sacs poubelle 50L',
    category: {
      connect: {
        id: 'bf2ec045-0651-438d-ba81-2033909bf3ad',
      },
    },
  },
  {
    id: 'f5ea8e58-2478-4cb6-bdb9-b878da20e7a8',
    name: 'Bloc WC',
    category: {
      connect: {
        id: 'bf2ec045-0651-438d-ba81-2033909bf3ad',
      },
    },
  },
  {
    id: 'a6dfc63e-6053-4ca3-aa41-f874d12842cf',
    name: 'Gel WC',
    category: {
      connect: {
        id: 'bf2ec045-0651-438d-ba81-2033909bf3ad',
      },
    },
  },
  {
    id: '978bf298-2565-4f29-b3dc-38ebc005a5b5',
    name: 'Papier cuisson',
    category: {
      connect: {
        id: '66ecaae7-fcb7-436b-8a1e-e5da110d6dc1',
      },
    },
  },
  {
    id: '1afe3c51-5a0e-43e3-82e4-f80d65bca7c3',
    name: 'Papier aluminium',
    category: {
      connect: {
        id: '66ecaae7-fcb7-436b-8a1e-e5da110d6dc1',
      },
    },
  },
  {
    id: 'a81d11cf-b18a-43aa-9af5-4f916b9a5e00',
    name: 'Film plastique',
    category: {
      connect: {
        id: '66ecaae7-fcb7-436b-8a1e-e5da110d6dc1',
      },
    },
  },

  {
    id: 'e4e1b9b7-df6b-4dcd-8cd0-3f00526dc16e',
    name: 'Cacao en poudre',
    category: {
      connect: {
        id: '51b104de-9080-464e-a56f-811550ef3c49',
      },
    },
  },
  {
    id: '6e8b7224-90bf-426f-9f32-82cfed11af31',
    name: 'Cordon bleu',
    category: {
      connect: {
        id: '51b104de-9080-464e-a56f-811550ef3c49',
      },
    },
  },
  {
    id: '7106d813-3e17-4369-b456-bf6c86d005d0',
    name: 'Flammekueche',
    category: {
      connect: {
        id: '51b104de-9080-464e-a56f-811550ef3c49',
      },
    },
  },
  {
    id: '6feb7edf-12dd-483e-a3db-68bba808f2db',
    name: 'Nutella',
    category: {
      connect: {
        id: '51b104de-9080-464e-a56f-811550ef3c49',
      },
    },
  },
  {
    id: 'c6a8a344-2c37-41e1-845c-2b00303e2a51',
    name: 'Brioche',
    category: {
      connect: {
        id: '51b104de-9080-464e-a56f-811550ef3c49',
      },
    },
  },
  {
    id: '1866886a-a1bc-4928-9b55-bc8b0cb79af7',
    name: 'Petit princes',
    category: {
      connect: {
        id: '51b104de-9080-464e-a56f-811550ef3c49',
      },
    },
  },
  {
    id: 'a7f2084a-dcb9-4aad-a271-3f8850be6ca7',
    name: 'Petits écoliers',
    category: {
      connect: {
        id: '51b104de-9080-464e-a56f-811550ef3c49',
      },
    },
  },
  {
    id: 'd4c3cba4-a4bf-4791-b3ac-7ec8517dcaa0',
    name: 'Pims',
    category: {
      connect: {
        id: '51b104de-9080-464e-a56f-811550ef3c49',
      },
    },
  },
  {
    id: 'a02bb86b-1dc2-4706-841d-2566eeab56c2',
    name: "Jus d'orange",
    category: {
      connect: {
        id: '51b104de-9080-464e-a56f-811550ef3c49',
      },
    },
  },
  {
    id: '3d689a39-8aab-45ed-a0b0-72e130b8cc1b',
    name: 'Jus de fruit',
    category: {
      connect: {
        id: '51b104de-9080-464e-a56f-811550ef3c49',
      },
    },
  },
  {
    id: 'cdc1b6ff-d15f-4bad-b236-efc000553102',
    name: 'Yaourts (vanille)',
    category: {
      connect: {
        id: '51b104de-9080-464e-a56f-811550ef3c49',
      },
    },
  },
  {
    id: '3024a305-6c5e-46bb-b821-fd88ce80dc6f',
    name: 'Yaourts (chocolat)',
    category: {
      connect: {
        id: '51b104de-9080-464e-a56f-811550ef3c49',
      },
    },
  },
  {
    id: '60265063-7ef8-4891-9d14-aa586b09f46a',
    name: 'Yaourts (citron)',
    category: {
      connect: {
        id: '51b104de-9080-464e-a56f-811550ef3c49',
      },
    },
  },
  {
    id: '9d04b803-9944-4dc9-880b-f0789aa41852',
    name: 'Yaourts (fruits)',
    category: {
      connect: {
        id: '51b104de-9080-464e-a56f-811550ef3c49',
      },
    },
  },
  {
    id: '62bc97dc-ed9b-4047-821d-d4ce33521ceb',
    name: 'Compotes',
    category: {
      connect: {
        id: '51b104de-9080-464e-a56f-811550ef3c49',
      },
    },
  },
  {
    id: '555f5e80-18b9-4a15-924e-1b2becb9d86e',
    name: 'Vinaigrette soja & sésame',
    category: {
      connect: {
        id: '51b104de-9080-464e-a56f-811550ef3c49',
      },
    },
  },
  {
    id: '3d382eb9-010d-4a37-b5a7-ef5804e13fb6',
    name: "Pack d'eau plate",
    category: {
      connect: {
        id: '51b104de-9080-464e-a56f-811550ef3c49',
      },
    },
  },
  {
    id: '709a092c-3ef6-4ffd-b598-aed0700cae72',
    name: "Pack d'eau gazeuse",
    category: {
      connect: {
        id: '51b104de-9080-464e-a56f-811550ef3c49',
      },
    },
  },
  {
    id: '32309d4b-3fcb-401d-8907-645fc78de18a',
    name: 'Céréales petit-déjeuner',
    category: {
      connect: {
        id: '51b104de-9080-464e-a56f-811550ef3c49',
      },
    },
  },
];

export function seedProduct(prisma: PrismaClient) {
  return Promise.all(
    products.map((product) =>
      prisma.product.upsert({
        where: { id: product.id },
        update: product,
        create: product,
      }),
    ),
  );
}

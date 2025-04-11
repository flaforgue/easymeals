import { Prisma, PrismaClient } from '../client';

const ingredients: Prisma.IngredientCreateInput[] = [
  {
    id: '8cf564be-6129-48b0-abf3-6b921b0097be',
    name: 'Sauce fajitas à cuisiner',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '3a13b6ed-f21a-435c-bd17-13cf736a19ba',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '51aaed2c-cd3c-4833-8ff0-863273a49f8d',
    name: 'Pain naan',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '3a13b6ed-f21a-435c-bd17-13cf736a19ba',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: '7338bbc3-4cf3-49e4-ad82-f80e38daf849',
    name: 'Feuilles de bricks',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '3a13b6ed-f21a-435c-bd17-13cf736a19ba',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: 'dd2cd175-c6de-4ace-8a0b-5e1ed7512503',
    name: 'Pain de mie',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '3a13b6ed-f21a-435c-bd17-13cf736a19ba',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: 'be96b423-ad3f-42b2-9973-caa91d407622',
    name: 'Confiture de fraise',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '3a13b6ed-f21a-435c-bd17-13cf736a19ba',
      },
    },
    unit: {
      connect: {
        id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
      },
    },
  },
  {
    id: 'ba7f565c-6b85-485c-b330-5442e5535c39',
    name: 'Pain pita',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '3a13b6ed-f21a-435c-bd17-13cf736a19ba',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: 'a97d0cd0-4765-403b-b078-462a35b61bec',
    name: 'Tortillas de maïs',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '3a13b6ed-f21a-435c-bd17-13cf736a19ba',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: '8b6b8971-f863-4883-904b-2cddc3c9ff62',
    name: 'Tortillas de blé',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '3a13b6ed-f21a-435c-bd17-13cf736a19ba',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: '9199568a-1b1d-4db7-9f7b-c23200e72215',
    name: 'Pâte brisée',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '3a13b6ed-f21a-435c-bd17-13cf736a19ba',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: '3b10a476-ef6c-43fb-bd03-2ff2128bece3',
    name: 'Boeuf pour bourguignon',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '3492ce94-053a-464b-bc73-ffa337781682',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '9debacd1-b276-4fa4-a95d-b4919e0ce24a',
    name: 'Boeuf haché',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '3492ce94-053a-464b-bc73-ffa337781682',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '9063dc7b-d066-4ef1-a38f-db37994a7b5f',
    name: 'Paupiettes de veau',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '3492ce94-053a-464b-bc73-ffa337781682',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: '5bf8e261-7e6a-4246-b77e-4eaed9db541e',
    name: 'Blé',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: 'eaf4e45f-d578-4468-bc3b-c4fa7be81f11',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'e95fa290-e533-4aec-b32e-6a27de25dfdf',
    name: 'Farine de blé',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: 'eaf4e45f-d578-4468-bc3b-c4fa7be81f11',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '8ca258a9-324a-4b15-b780-4b011a6fe6db',
    name: 'Riz',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: 'eaf4e45f-d578-4468-bc3b-c4fa7be81f11',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '5b42b80c-3f2c-4450-808d-0aa91e000e02',
    name: 'Pâtes fraîches',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: 'eaf4e45f-d578-4468-bc3b-c4fa7be81f11',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '6c9258de-cc97-4053-a2fa-1f47b57b0391',
    name: 'Pâtes à lasagne',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: 'eaf4e45f-d578-4468-bc3b-c4fa7be81f11',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '6ae44657-0de9-4ec9-86ed-64c2636a1c75',
    name: 'Moutarde',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
      },
    },
  },
  {
    id: '75086d67-db3e-4269-9e1d-73c8fd42a068',
    name: 'Pâte de curry vert',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
      },
    },
  },
  {
    id: '9f28a4fa-5616-4d39-9239-7297262dcfa3',
    name: 'Pâte de curry rouge',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
      },
    },
  },
  {
    id: '5c7c1a9d-65b4-4fe2-8d44-b019cc3af1b3',
    name: 'Vin. balsamique blanc',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
      },
    },
  },
  {
    id: 'd41525e9-a02e-4276-ad94-a4302dd63e5c',
    name: 'Vin. balsamique noir',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
      },
    },
  },
  {
    id: '6cb2ccc9-02f2-494c-828f-6da7633bc3cc',
    name: "Huile d'olive",
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: '5c43e950-ad78-4618-8b99-bd1253bfac81',
      },
    },
  },
  {
    id: '2aba490b-e083-4de2-9463-7619359c5a1e',
    name: 'Huile de tournesol',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: '5c43e950-ad78-4618-8b99-bd1253bfac81',
      },
    },
  },
  {
    id: '16104aca-4e47-47d0-9bc6-288da7c54f82',
    name: 'Huile de noix',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: '5c43e950-ad78-4618-8b99-bd1253bfac81',
      },
    },
  },
  {
    id: '08c201f0-2d84-4dd1-b668-873a8ed312db',
    name: 'Huile de coco',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
      },
    },
  },
  {
    id: 'c68de564-61b7-4310-80ee-f632e717d192',
    name: 'Ketchup',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
      },
    },
  },
  {
    id: 'd0a7f8ec-5b80-4a6b-a304-a643ce7d9327',
    name: 'Mayonnaise',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
      },
    },
  },
  {
    id: '5c8aba35-0401-41d0-9172-2686a10fd367',
    name: 'Sauce barbecue',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
      },
    },
  },
  {
    id: 'b99b47fc-c3ab-47c2-8eb2-102ca7e38643',
    name: 'Sauce tomate',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: 'fdd0904c-078d-410c-ac45-684a1f8ed209',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'd6950004-1b8f-443f-bc65-178719234d4f',
    name: 'Concentré de tomate',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: 'fdd0904c-078d-410c-ac45-684a1f8ed209',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '19fcf4dc-3705-428b-b7b6-9bef1c52bad5',
    name: 'Tomates concassées',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: 'fdd0904c-078d-410c-ac45-684a1f8ed209',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '736144ae-c594-481c-9fad-41b28c8ea03f',
    name: 'Maïs en boîte',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: 'fdd0904c-078d-410c-ac45-684a1f8ed209',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'c2fd3267-dc04-45f1-bcdd-73223a2301c4',
    name: 'Pois chiches',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: 'fdd0904c-078d-410c-ac45-684a1f8ed209',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '4efc41aa-13c2-4553-90fc-8ba7be40b23e',
    name: 'Purée de tomate',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: 'fdd0904c-078d-410c-ac45-684a1f8ed209',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'd55b93eb-7a6b-4516-823a-a3189bae008b',
    name: 'Parmesan râpé',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '84de9062-60ce-4651-b73d-8076fbb5365c',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '1c2b000d-94f4-4c67-b604-69b40379a76f',
    name: 'Cheddar râpé',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '84de9062-60ce-4651-b73d-8076fbb5365c',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'a4ff1dfb-6a9e-454a-8455-950ff3f9125b',
    name: 'Parmesan en morceau',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '84de9062-60ce-4651-b73d-8076fbb5365c',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '54d4b253-52a3-43d1-a6da-4fe23472d9af',
    name: 'Gruyère râpé',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '84de9062-60ce-4651-b73d-8076fbb5365c',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'fe745e17-b856-47b9-9bd9-19e4d9f6e530',
    name: 'Fromage de chèvre frais',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '84de9062-60ce-4651-b73d-8076fbb5365c',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '2486f85b-30d0-448a-abd2-3f640d3a76ce',
    name: 'Bleu de Bresse',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '84de9062-60ce-4651-b73d-8076fbb5365c',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '5b067cea-1ea7-4ed6-801b-4d826b836b6d',
    name: 'Bûche de chèvre',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '84de9062-60ce-4651-b73d-8076fbb5365c',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'b9ab5752-f6a5-4332-9af6-937ca0ed68f4',
    name: 'Feta',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '84de9062-60ce-4651-b73d-8076fbb5365c',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'e919a8df-e0ec-4141-9c7f-638f1be2b445',
    name: 'Coriandre',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '6fc7760f-49f6-49fe-a6e1-496fc8e0d51d',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '89bf939e-6a62-4da6-aa42-ee99b2dc4cf4',
    name: 'Menthe',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '6fc7760f-49f6-49fe-a6e1-496fc8e0d51d',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '22a7e203-3105-4e7c-9137-4d22fb2fd726',
    name: 'Persil',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '6fc7760f-49f6-49fe-a6e1-496fc8e0d51d',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'd9dc4526-8e4b-4c67-92dc-0a632b2cfc46',
    name: 'Aneth',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '6fc7760f-49f6-49fe-a6e1-496fc8e0d51d',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '684d8ddc-9cd1-4b66-94a4-fb39e102b4a3',
    name: 'Feuilles de kaffir',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '6fc7760f-49f6-49fe-a6e1-496fc8e0d51d',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: 'f301b16a-8f7e-450d-8f0e-d9b1b633e3e1',
    name: 'Ciboulette',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '6fc7760f-49f6-49fe-a6e1-496fc8e0d51d',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '6120928f-a362-47ce-8b48-058d1fe7480f',
    name: 'Lait de coco',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: 'fdd0904c-078d-410c-ac45-684a1f8ed209',
      },
    },
    unit: {
      connect: {
        id: 'baa5ede4-30e4-412d-9158-6b73dbce2207',
      },
    },
  },
  {
    id: '849ef558-907e-4ae6-8049-5a5f5a2420c9',
    name: 'Lait entier',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '84de9062-60ce-4651-b73d-8076fbb5365c',
      },
    },
    unit: {
      connect: {
        id: 'baa5ede4-30e4-412d-9158-6b73dbce2207',
      },
    },
  },
  {
    id: 'a0f43f5a-bc16-48c3-a8e7-adb9cc712663',
    name: 'Lait demi-écrémé',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '84de9062-60ce-4651-b73d-8076fbb5365c',
      },
    },
    unit: {
      connect: {
        id: 'baa5ede4-30e4-412d-9158-6b73dbce2207',
      },
    },
  },
  {
    id: '13b12a1a-f968-4d2b-a30e-efa610898d62',
    name: 'Lait écrémé',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '84de9062-60ce-4651-b73d-8076fbb5365c',
      },
    },
    unit: {
      connect: {
        id: 'baa5ede4-30e4-412d-9158-6b73dbce2207',
      },
    },
  },
  {
    id: 'a808c522-d466-43b5-9b51-a30755419851',
    name: 'Béchamel',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '84de9062-60ce-4651-b73d-8076fbb5365c',
      },
    },
    unit: {
      connect: {
        id: 'baa5ede4-30e4-412d-9158-6b73dbce2207',
      },
    },
  },
  {
    id: 'af4c4245-c074-49e4-8558-bc384d66bf48',
    name: 'Beurre',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '84de9062-60ce-4651-b73d-8076fbb5365c',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '53569045-6ae5-4665-b9e5-65e7cd6afacf',
    name: 'Crème fraîche',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '84de9062-60ce-4651-b73d-8076fbb5365c',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '176769ba-ad18-455f-ad38-dcae1b624536',
    name: 'Crème liquide',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '84de9062-60ce-4651-b73d-8076fbb5365c',
      },
    },
    unit: {
      connect: {
        id: 'baa5ede4-30e4-412d-9158-6b73dbce2207',
      },
    },
  },
  {
    id: 'a1b9969c-5ecf-4e3b-90fa-dee5a8f2f4a1',
    name: 'Yaourt grec',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '84de9062-60ce-4651-b73d-8076fbb5365c',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '177be6be-a18b-4703-9508-197a858f8084',
    name: 'Yaourt nature',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '84de9062-60ce-4651-b73d-8076fbb5365c',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'f3451448-608f-4422-b53b-53ae5f58442c',
    name: 'Pommes de terre',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'fac062ef-f4cc-4bbf-971e-6310a05b3110',
    name: 'Pommes grenailles',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'de5b16f1-b096-4228-97a0-74ba1d35fc7c',
    name: 'Tomates',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '574aa65b-4cc7-41c9-9215-e45a748cf4b0',
    name: 'Salade',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '16cd886b-a5d3-4874-914d-40b56318b675',
    name: 'Poivrons jaunes',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: 'd639dcd2-9af0-4536-b337-b53160da4158',
    name: 'Poivrons rouges',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: '3c8c85d5-3c32-4e5d-881d-80fbc8bf7b82',
    name: 'Poivrons verts',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: '57a6fa64-fcc6-4ea2-bce1-4ae472c5f81b',
    name: 'Courgettes',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: 'bc56605c-c17b-4e83-b40f-9cf4d4cd0fc0',
    name: 'Concombres',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: '630e0c8e-0ad1-4c12-a8c6-4b74203f634a',
    name: 'Carottes',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: '5f091590-8f11-4b6d-ad64-ce502d0139b1',
    name: 'Panais',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: 'bf81e7d4-9763-4157-8824-c638c502473c',
    name: 'Petit pois',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'a1416d19-8a5c-417c-ab13-658c3f73a050',
    name: 'Haricots verts',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'd08225b9-1ee3-43ee-a204-863319e67e18',
    name: 'Chou vert',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'eca9f799-8ea5-4eef-8366-4416714335e4',
    name: 'Haricots plats',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'e2504532-7f93-4581-acbc-32e0e2290600',
    name: 'Endives',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: 'bb667cbf-f1b6-426e-a9a5-b9105f7c857a',
    name: 'Aubergines',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: '6b5a1d5e-f65e-4e66-97c5-5fc8b966003a',
    name: 'Gingembre',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'c5f067da-f11e-419b-8ffb-e0cb7673931f',
    name: 'Poireaux',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: '1c9dab22-32e8-4300-8aae-fde7f33b24dc',
    name: 'Haricots rouges',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '4b44cf18-9795-4176-8609-d7e7f1ffa8c6',
    name: 'Haricots noirs',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'e8658bf4-e832-4a18-9fd3-f004d4fd0258',
    name: 'Haricots blancs',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '03d39f8b-197d-403b-92c7-7d270771fb5d',
    name: 'Brocolis',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: '51eed8e5-d200-41dc-b89c-b480e1f976a2',
    name: 'Broccolini',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'fdcd1bf7-1b3c-46dc-86e1-ed63adc2cd4e',
    name: 'Champignons de paris',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'deb74786-08ec-42b4-97c6-b7744392091b',
    name: 'Citrons jaunes',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: 'f8346816-2081-4cfc-83a6-11911873ecf5',
    name: 'Citrons verts',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: 'a9018eba-7775-4e80-b9c2-5270fc5b078c',
    name: 'Patates douces',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: 'cb9270df-54a6-43b9-b495-bd8254025db6',
    name: 'Épinards',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '35de64d1-130e-4d6b-bb60-deb3ba4e8b56',
    name: 'Avocats',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: 'f9f865e3-6c63-4561-84a0-b991f0f203be',
    name: 'Lentilles vertes',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '4b4596a1-383e-4f13-82c0-6a57e0326430',
    name: 'Lentilles corail',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'd000ce8b-cca4-4d4f-9482-7be999d16f9e',
    name: 'Gnocchis',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: 'eaf4e45f-d578-4468-bc3b-c4fa7be81f11',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'e2d787ee-6b70-4102-90e1-cb1fb4d831b7',
    name: 'Pâtes',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: 'eaf4e45f-d578-4468-bc3b-c4fa7be81f11',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'dcc60412-a421-4ee1-afdb-a6289abb246f',
    name: 'Feuilles de lasagne',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: 'eaf4e45f-d578-4468-bc3b-c4fa7be81f11',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'a36fc203-7925-434c-86da-d60b08e52a67',
    name: "Cheveux d'ange",
    isStoredInQuantity: false,
    category: {
      connect: {
        id: 'eaf4e45f-d578-4468-bc3b-c4fa7be81f11',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '25ed812e-941a-4557-a67d-1d323d1782b2',
    name: 'Saumon',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '00ad4305-fdd7-449e-8a4f-2cf8e71d61c7',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '8fe3e630-7c3a-4d3a-a1e3-abcfb399e46d',
    name: 'Filet de cabillaud',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '00ad4305-fdd7-449e-8a4f-2cf8e71d61c7',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '054d3719-4291-4d09-9bd1-0defa2cbc153',
    name: 'Poissons pânés',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '00ad4305-fdd7-449e-8a4f-2cf8e71d61c7',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: '87e60612-888d-4854-a4f3-c5e3026c2ae0',
    name: 'Chair à farcir',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '3492ce94-053a-464b-bc73-ffa337781682',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'c72e3123-3ac1-4a0c-a414-6e400e5995ad',
    name: 'Filets de poulet',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '3492ce94-053a-464b-bc73-ffa337781682',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'f705e3c6-476d-4350-a9f9-254f161cf4eb',
    name: 'Poitrine de porc fumée',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '3492ce94-053a-464b-bc73-ffa337781682',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '57f71bce-8f5b-471d-9546-cb7c3a3f2495',
    name: 'Jambon blanc',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '3492ce94-053a-464b-bc73-ffa337781682',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '72d22580-fa55-474e-b390-4950ef4d741d',
    name: 'Saucisse de strasbourg',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '3492ce94-053a-464b-bc73-ffa337781682',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: '34144947-1d27-4ee9-9ae6-f7aa835af970',
    name: 'Saucisse de montbéliard',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '3492ce94-053a-464b-bc73-ffa337781682',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: '15a7cb88-1c06-4263-9f92-fe671ee95672',
    name: 'Saucisse de morteau',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '3492ce94-053a-464b-bc73-ffa337781682',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: '35a5a946-080f-48ca-b716-b99e7a4d8189',
    name: 'Jambon de pays',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '3492ce94-053a-464b-bc73-ffa337781682',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '0cfafafa-e81d-4c6e-ba3b-a927a01fefcc',
    name: 'Lardons',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '3492ce94-053a-464b-bc73-ffa337781682',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '396736f1-cbc1-48af-93a7-08421b4339cc',
    name: 'Cuisses de poulet',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '3492ce94-053a-464b-bc73-ffa337781682',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: '63e7ec8a-70bb-4e4c-a397-f1a8ded26296',
    name: 'Sel',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
      },
    },
  },
  {
    id: '5ceb348b-abc5-472f-aa89-05116d45c651',
    name: 'Bouquet garni',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: '35de7aa6-f331-430e-a2e2-7cf9f1f55b81',
    name: 'Sauce tahini',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '84ae51a0-edac-4cfe-b0d6-60aae5c25ec6',
    name: 'Sauce soja',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'baa5ede4-30e4-412d-9158-6b73dbce2207',
      },
    },
  },
  {
    id: 'c74ee230-306a-4f46-b235-74011a1add15',
    name: 'Poivre',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
      },
    },
  },
  {
    id: 'cd199b75-8ed2-4f50-89bd-863a4653908e',
    name: 'Paprika',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
      },
    },
  },
  {
    id: '5db0737f-bc97-49a9-bf4b-b29a1de3352b',
    name: 'Épices mexicaines',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
      },
    },
  },
  {
    id: '782071ae-8861-4bbf-bd13-844c69ccc35a',
    name: 'Canelle',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
      },
    },
  },
  {
    id: '4666ac76-9fee-4698-91b5-7c5a8f800b09',
    name: 'Muscade',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
      },
    },
  },
  {
    id: 'acade453-5ff2-432b-9bd4-c7712881a1a8',
    name: 'Feuilles de laurier',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: 'f2d9d3cc-3731-49a5-87cd-0b0c6afffd61',
    name: 'Romarin',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
      },
    },
  },
  {
    id: 'caa23027-f4e1-4a03-bc11-d2a7ff20edda',
    name: 'Thym',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
      },
    },
  },
  {
    id: '6b4ed907-e943-4938-86ba-2ce21c9e09f0',
    name: 'Herbes de provence',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
      },
    },
  },
  {
    id: '59e87f1e-7c82-4339-a112-fb3626c9eee0',
    name: 'Curry massala',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
      },
    },
  },
  {
    id: '71e68223-02f6-42ad-80ce-41ca3b73f3ac',
    name: 'Garam massala',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
      },
    },
  },
  {
    id: '884878b4-b394-43b5-bab7-c3b2138adc22',
    name: 'Ras el-hanout',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
      },
    },
  },
  {
    id: 'd916218a-9b6e-466c-8c41-501a03d8af67',
    name: 'Cumin',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
      },
    },
  },
  {
    id: '085a1849-e942-447b-92ae-586b31dea795',
    name: 'Curcuma',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
      },
    },
  },
  {
    id: 'cbbc69cd-b23e-40d5-9844-5d8b3974ca85',
    name: 'Tomates séchées',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '58d9b241-5ca2-4848-b613-7205b67e64ae',
    name: 'Feuilles de basilic',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: 'bea38bdd-5313-4ddc-93c7-540fff5166ee',
    name: 'Origan',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
      },
    },
  },
  {
    id: 'a9e671d4-7059-420f-94d7-5a9ad7740a5c',
    name: 'Estragon',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
      },
    },
  },
  {
    id: 'ed524a40-63b3-4a7e-b3e8-79a7717c2126',
    name: 'Piment de cayene',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: 'fd0bc5dc-0c93-4d75-aa89-134ae3af3f28',
      },
    },
  },
  {
    id: 'a66ce07a-b84d-44b1-b836-8352e48b5a1b',
    name: 'Piments oiseaux',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '550a3d7f-5765-463b-9b4b-093000d5dfc7',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: 'f3773667-7eaa-4e59-960b-ce5a8bb2a91d',
    name: "Gousses d'ail",
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: '56e80f15-848d-4add-9bf3-e27b915261d2',
    name: 'Oignons jaunes',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: 'b291c6af-dd03-4b17-aa99-c236dd7e7f37',
    name: 'Oignons rouges',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: 'ecca5577-84c0-493d-98e4-2fb319d43b63',
    name: 'Échalote',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '350d23b0-c9bf-4a06-a3f3-8952fcdd29bf',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: '1706675a-4895-40e5-b90d-5efeeeff340b',
    name: 'Oeufs',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '84de9062-60ce-4651-b73d-8076fbb5365c',
      },
    },
    unit: {
      connect: {
        id: '4d89a7f9-b353-46c0-90d2-8aab7e5c831f',
      },
    },
  },
  {
    id: '33059226-2274-4a70-816c-161d3fd8a6ee',
    name: 'Cacahuètes',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '94cd3c90-16da-4bca-9973-2ac4d6a78fbd',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '92658a2b-a704-4ffa-b55e-45c62f6c4cbb',
    name: 'Graines de sésame',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '94cd3c90-16da-4bca-9973-2ac4d6a78fbd',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'd61e9da0-b16a-4533-989b-c5f551a95678',
    name: 'Amandes effilées',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '94cd3c90-16da-4bca-9973-2ac4d6a78fbd',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'da26c23e-35ce-4183-b3ad-84d4ae830f35',
    name: 'Sucre de cassonade',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '3a13b6ed-f21a-435c-bd17-13cf736a19ba',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: 'ceb57336-3f54-47ef-aa4f-67963302ccdc',
    name: 'Sucre en poudre',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '3a13b6ed-f21a-435c-bd17-13cf736a19ba',
      },
    },
    unit: {
      connect: {
        id: 'a5b94067-5617-49cd-ab28-8772f903d928',
      },
    },
  },
  {
    id: '124cbad8-f7ff-43ae-a147-7a00833783d8',
    name: 'Bière blonde',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '3a13b6ed-f21a-435c-bd17-13cf736a19ba',
      },
    },
    unit: {
      connect: {
        id: 'baa5ede4-30e4-412d-9158-6b73dbce2207',
      },
    },
  },
  {
    id: '050587a3-de83-48e3-9d87-ca6f4c21d451',
    name: 'Bière brune',
    isStoredInQuantity: false,
    category: {
      connect: {
        id: '3a13b6ed-f21a-435c-bd17-13cf736a19ba',
      },
    },
    unit: {
      connect: {
        id: 'baa5ede4-30e4-412d-9158-6b73dbce2207',
      },
    },
  },
  {
    id: 'cb5099fd-75c2-49a0-9508-7e8e65f2d608',
    name: 'Bouillon de légumes',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '3a13b6ed-f21a-435c-bd17-13cf736a19ba',
      },
    },
    unit: {
      connect: {
        id: 'baa5ede4-30e4-412d-9158-6b73dbce2207',
      },
    },
  },
  {
    id: 'b59189c2-fa12-4abe-92e4-7fa4c1eaf253',
    name: 'Bouillon de volaille',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '3a13b6ed-f21a-435c-bd17-13cf736a19ba',
      },
    },
    unit: {
      connect: {
        id: 'baa5ede4-30e4-412d-9158-6b73dbce2207',
      },
    },
  },
  {
    id: 'be7624a6-82eb-4883-a1d8-862e7b024399',
    name: 'Bouillon de boeuf',
    isStoredInQuantity: true,
    category: {
      connect: {
        id: '3a13b6ed-f21a-435c-bd17-13cf736a19ba',
      },
    },
    unit: {
      connect: {
        id: 'baa5ede4-30e4-412d-9158-6b73dbce2207',
      },
    },
  },
];

export function seedIngredient(prisma: PrismaClient) {
  return Promise.all(
    ingredients.map((ingredient) =>
      prisma.ingredient.upsert({
        where: { id: ingredient.id },
        update: ingredient,
        create: ingredient,
      }),
    ),
  );
}

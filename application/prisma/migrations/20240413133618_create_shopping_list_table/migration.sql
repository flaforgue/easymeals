-- CreateTable
CREATE TABLE "ShoppingList" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShoppingList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShoppingListIngredientPivot" (
    "shoppingListId" TEXT NOT NULL,
    "ingredientId" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ShoppingListIngredientPivot_pkey" PRIMARY KEY ("shoppingListId","ingredientId")
);

-- AddForeignKey
ALTER TABLE "ShoppingListIngredientPivot" ADD CONSTRAINT "ShoppingListIngredientPivot_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShoppingListIngredientPivot" ADD CONSTRAINT "ShoppingListIngredientPivot_shoppingListId_fkey" FOREIGN KEY ("shoppingListId") REFERENCES "ShoppingList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

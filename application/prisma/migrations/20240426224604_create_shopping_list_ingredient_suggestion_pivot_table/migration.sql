-- CreateTable
CREATE TABLE "ShoppingListIngredientSuggestionPivot" (
    "shoppingListId" TEXT NOT NULL,
    "ingredientId" TEXT NOT NULL,

    CONSTRAINT "ShoppingListIngredientSuggestionPivot_pkey" PRIMARY KEY ("shoppingListId","ingredientId")
);

-- AddForeignKey
ALTER TABLE "ShoppingListIngredientSuggestionPivot" ADD CONSTRAINT "ShoppingListIngredientSuggestionPivot_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShoppingListIngredientSuggestionPivot" ADD CONSTRAINT "ShoppingListIngredientSuggestionPivot_shoppingListId_fkey" FOREIGN KEY ("shoppingListId") REFERENCES "ShoppingList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE "ShoppingListIngredientPivot" ADD COLUMN     "isChecked" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "ShoppingListProductPivot" ADD COLUMN     "isChecked" BOOLEAN NOT NULL DEFAULT false;

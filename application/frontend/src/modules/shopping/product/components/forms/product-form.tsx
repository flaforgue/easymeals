import TextInput from '#/components/inputs/text-input';
import ProductCategoryInput from '#/modules/shopping/product-category/components/product-category-input';

interface ProductFormProps {
  name: string;
  setName: (v: string) => void;
  productCategoryId: string;
  setProductCategoryId: (v: string) => void;
}
export default function ProductForm({ name, setName, productCategoryId, setProductCategoryId }: ProductFormProps) {
  return (
    <div
      className={`
        flex
        gap-2
      `}
    >
      <TextInput
        value={name}
        onChange={setName}
        className="flex-1"
      />
      <ProductCategoryInput
        value={productCategoryId}
        onChange={setProductCategoryId}
      />
    </div>
  );
}

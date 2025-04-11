import CreateButton from '#/components/buttons/simple-buttons/create-button';
import DefaultButton from '#/components/buttons/simple-buttons/default-button';
import SubmitButton from '#/components/buttons/simple-buttons/submit-button';
import IconProductStorage from '#/components/icons/icon-product-storage';
import Modal from '#/components/modals/modal';
import ProductForm from '#/modules/shopping/product/components/forms/product-form';
import { logError } from '#/utils/error';

type SubmitType = 'create' | 'update';

interface ProductFormModalProps {
  submitType: SubmitType;
  isModalOpen: boolean;
  onCloseModal: () => void;
  onSubmit: () => Promise<void>;
  name: string;
  productCategoryId: string;
  setName: (v: string) => void;
  setProductCategoryId: (v: string) => void;
}
export default function ProductFormModal({
  submitType,
  isModalOpen,
  onCloseModal,
  onSubmit,
  name,
  productCategoryId,
  setName,
  setProductCategoryId,
}: ProductFormModalProps) {
  const isFormValid = name !== '' && productCategoryId !== '';
  const handleClose = () => {
    setName('');
    onCloseModal();
  };
  const handleSubmit = () => {
    onSubmit().then(handleClose).catch(logError);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onCancel={handleClose}
      size="small"
    >
      <div className="p-2">
        <div
          className={`
            mb-4
            text-center
            text-lg
          `}
        >
          {submitType === 'create' ? 'Nouveau produit' : ''}
          {submitType === 'update' ? 'Modification du produit' : ''}
        </div>
        <div
          className={`
            mb-8
            h-40
            rounded-full
            bg-slate-50
            p-2
            text-green-500
          `}
        >
          <IconProductStorage />
        </div>
        <div className="mt-4">
          <ProductForm
            name={name}
            setName={setName}
            productCategoryId={productCategoryId}
            setProductCategoryId={setProductCategoryId}
          />
        </div>
        <div
          className={`
            mt-6
            text-center
          `}
        >
          <DefaultButton
            onClick={handleClose}
            className="mr-2"
          >
            Annuler
          </DefaultButton>
          {submitType === 'update' && (
            <SubmitButton
              onClick={handleSubmit}
              isDisabled={!isFormValid}
            >
              Mettre à jour
            </SubmitButton>
          )}
          {submitType === 'create' && (
            <CreateButton
              onClick={handleSubmit}
              isDisabled={!isFormValid}
              tooltipText={isFormValid ? '' : 'Veuillez donner un nom au produit'}
            >
              Ajouter
            </CreateButton>
          )}
        </div>
      </div>
    </Modal>
  );
}

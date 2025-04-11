import DefaultButton from '#/components/buttons/simple-buttons/default-button';
import DeleteButton from '#/components/buttons/simple-buttons/delete-button';
import IconWarning from '#/components/icons/icon-warning';
import Modal from '#/components/modals/modal';
import GlobalLoadingOverlay from '#/components/overlays/global-loading-overlay';

interface DeleteModalProps {
  isOpen: boolean;
  body: string;
  isSubmitting: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function DeleteModal({ isOpen, body, onConfirm, onCancel, isSubmitting }: DeleteModalProps) {
  return (
    <>
      {isSubmitting && <GlobalLoadingOverlay />}
      <Modal
        isOpen={isOpen}
        onCancel={onCancel}
        size="small"
      >
        <div
          className={`
            p-4
            text-center
          `}
        >
          <div
            className={`
              mb-6
              h-14
              text-rose-500
            `}
          >
            <IconWarning />
          </div>

          <h3
            className={`
              mb-5
              text-lg
              font-normal
              text-slate-500
            `}
          >
            {body}
          </h3>

          <div
            className={`
              flex
              flex-col
              justify-center
              gap-2

              tablet:flex-row
            `}
          >
            <DefaultButton onClick={onCancel}>Non, annuler</DefaultButton>

            <DeleteButton onClick={onConfirm}>Oui, supprimer</DeleteButton>
          </div>
        </div>
      </Modal>
    </>
  );
}

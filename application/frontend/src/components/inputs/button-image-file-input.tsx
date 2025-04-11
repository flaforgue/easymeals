import { ChangeEvent, useId, useRef } from 'react';
import DefaultButton from '#/components/buttons/simple-buttons/default-button';
import IconUpload from '#/components/icons/icon-upload';
import SpinningLoader from '#/components/spinning-loader';
import { useImageSignedUpload } from '#/modules/shared/generic/upload/hooks/use-image-signed-upload';

interface ButtonImageFileInputProps {
  onChange: (v: string) => void;
}

export default function ButtonImageFileInput({ onChange }: ButtonImageFileInputProps) {
  const uploaderId = `button-image-file-input-${useId()}`;
  const inputRef = useRef<HTMLInputElement>(null);
  const { uploadImage, isUploadPending } = useImageSignedUpload(uploaderId, onChange);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    uploadImage(e.target.files?.[0] ?? null);
  };
  const triggerInputClick = () => {
    if (inputRef.current === null) {
      return;
    }

    inputRef.current.click();
  };

  return (
    <div>
      <DefaultButton
        onClick={triggerInputClick}
        className="w-fit"
        tooltipText="Image JPEG, max 1 Mo"
      >
        <div
          className={`
            flex
            items-center
            justify-center
            gap-1
            text-slate-500
          `}
        >
          <div className="h-4">{isUploadPending ? <SpinningLoader /> : <IconUpload />}</div>
          <p className="font-black">Envoyer une image</p>
        </div>
      </DefaultButton>
      <input
        ref={inputRef}
        type="file"
        name={uploaderId}
        id={uploaderId}
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
}

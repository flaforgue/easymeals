import { ChangeEvent, useId, useRef, useState } from 'react';
import LocalOverlay from '#/components/overlays/local-overlay';
import AnimatedIcon from '#/components/animated-icon';
import LocalLoadingOverlay from '#/components/overlays/local-loading-overlay';
import { useImageSignedUpload } from '#/modules/shared/generic/upload/hooks/use-image-signed-upload';

interface PreviewedImageFileInputProps {
  urlValue: string | null;
  urlPlaceholder: string | null;
  onChange: (v: string) => void;
  className?: string;
}

export default function PreviewedImageFileInput({
  urlValue,
  urlPlaceholder,
  onChange,
  className = '',
}: PreviewedImageFileInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const uploaderId = `previewed-image-file-input-${useId()}`;
  const { uploadImage, isUploadPending } = useImageSignedUpload(uploaderId, onChange);
  const triggerInputClick = () => {
    if (inputRef.current === null) {
      return;
    }

    inputRef.current.click();
  };

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    uploadImage(e.target.files?.[0] ?? null);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        relative

        ${className}
      `}
    >
      <img
        src={urlValue ?? urlPlaceholder ?? ''}
        className={`
          mx-auto
          min-h-20
          content-center
          overflow-hidden
          rounded-md
        `}
      />
      {isUploadPending && <LocalLoadingOverlay className="rounded-md" />}
      <LocalOverlay
        tooltipText="Envoyer une image JPEG (max 1 Mo)"
        onClick={triggerInputClick}
        className="rounded-md"
      >
        <>
          {isUploadPending && <LocalLoadingOverlay className="rounded-md" />}
          {!isUploadPending && (
            <div
              className={`
                text-center
                font-black
                text-white
              `}
            >
              <div
                className={`
                  mx-auto
                  w-12
                `}
              >
                <AnimatedIcon
                  icon="upload"
                  isPlaying={isHovered}
                />
              </div>
              (Max 1 Mo)
            </div>
          )}
        </>
      </LocalOverlay>
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

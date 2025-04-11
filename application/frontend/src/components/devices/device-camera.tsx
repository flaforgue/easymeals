import CreateButton from '#/components/buttons/simple-buttons/create-button';
import DefaultButton from '#/components/buttons/simple-buttons/default-button';
import SubmitButton from '#/components/buttons/simple-buttons/submit-button';
import IconCheck from '#/components/icons/icon-check';
import IconClose from '#/components/icons/icon-close';
import IconPhoto from '#/components/icons/icon-photo';
import LocalLoadingOverlay from '#/components/overlays/local-loading-overlay';
import { convertBase64ImageToFile } from '#/modules/shared/generic/upload/utils';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

interface DeviceCameraProps {
  onChange: (file: File) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export default function DeviceCamera({ onChange, onCancel, isLoading = false }: DeviceCameraProps) {
  const expectedWidth = 1024;
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [expectedHeight, setExpectedHeight] = useState(0);
  const [base64ImageData, setBase64ImageData] = useState<string | null>(null);
  const hasPictureToValidate = base64ImageData !== null;

  const openDeviceCamera = () => {
    if (videoRef.current === null || canvasRef.current === null) {
      return;
    }

    navigator.mediaDevices
      .getUserMedia({
        video: {
          aspectRatio: 4 / 3,
          width: 1024,
          height: 768,
          facingMode: 'environment',
        },
        audio: false,
      })
      .then((stream) => {
        if (videoRef.current === null) {
          return;
        }

        videoRef.current.srcObject = stream;

        return videoRef.current.play();
      })
      .catch(console.error);
  };
  useEffect(openDeviceCamera, [openDeviceCamera]);

  const [isStreaming, setIsStreaming] = useState(false);
  const startStreaming = () => {
    if (isStreaming || videoRef.current === null || canvasRef.current === null) {
      return;
    }

    const videoAspectRatio = videoRef.current.videoHeight / videoRef.current.videoWidth;
    const newExpectedHeight = videoAspectRatio * expectedWidth;
    // Firefox currently has a bug where the height can't be read from the video
    const validNewExpectedHeight =
      isNaN(newExpectedHeight) || newExpectedHeight === 0 ? expectedWidth / (4 / 3) : newExpectedHeight;

    setExpectedHeight(validNewExpectedHeight);
    setIsStreaming(true);
  };

  const takePicture = () => {
    if (canvasRef.current === null || videoRef.current === null) {
      return;
    }

    const context = canvasRef.current.getContext('2d');
    if (context === null) {
      return;
    }

    if (expectedHeight === 0) {
      setBase64ImageData(null);

      return;
    }

    context.drawImage(videoRef.current, 0, 0, expectedWidth, expectedHeight);

    setBase64ImageData(canvasRef.current.toDataURL('image/jpeg', 0.8));
  };

  const cancelPicture = () => setBase64ImageData(null);
  const validatePicture = () => {
    if (base64ImageData === null) {
      return;
    }

    try {
      onChange(convertBase64ImageToFile(base64ImageData));
    } catch (err) {
      toast.error("La photo n'a pas pu être prise");
    }
  };

  return (
    <div
      className={`
        fixed
        inset-0
        z-50
        flex
        flex-col
        justify-between
        bg-black
      `}
    >
      <div className="h-[calc(100%-5rem)]">
        <video
          ref={videoRef}
          height={expectedHeight}
          width={expectedWidth}
          onCanPlay={startStreaming}
          className={`
            z-10
            mx-auto
            max-h-full
            max-w-full

            ${base64ImageData !== null ? 'hidden' : ''}
          `}
        >
          <p className="text-white">Video stream not available.</p>
        </video>
        {base64ImageData !== null && (
          <img
            height={expectedHeight}
            width={expectedWidth}
            className={`
              mx-auto
              max-h-full
              max-w-full
              object-contain
            `}
            src={base64ImageData}
          />
        )}
        <canvas
          ref={canvasRef}
          height={expectedHeight}
          width={expectedWidth}
          className="hidden"
        />
      </div>
      {isLoading && <LocalLoadingOverlay />}
      <div
        className={`
          z-20
          flex
          h-20
          w-full
          justify-between
          gap-4
          p-4
        `}
      >
        <DefaultButton
          className="flex-1"
          onClick={hasPictureToValidate ? cancelPicture : onCancel}
        >
          <div
            className={`
              flex
              items-center
              justify-center
              text-xl
            `}
          >
            <div className="w-5">
              <IconClose />
            </div>
            <p>Annuler</p>
          </div>
        </DefaultButton>
        {hasPictureToValidate && (
          <CreateButton
            className={`
              block
              flex-1
            `}
            onClick={validatePicture}
          >
            <div
              className={`
                flex
                items-center
                justify-center
                gap-2
                text-xl
              `}
            >
              <div className="w-5">
                <IconCheck />
              </div>
              <p>Valider</p>
            </div>
          </CreateButton>
        )}
        {!hasPictureToValidate && (
          <SubmitButton
            className={`
              block
              flex-1
            `}
            onClick={takePicture}
          >
            <div
              className={`
                flex
                items-center
                justify-center
                gap-2
                text-xl
              `}
            >
              <div className="w-5">
                <IconPhoto />
              </div>
              <p>Capturer</p>
            </div>
          </SubmitButton>
        )}
      </div>
    </div>
  );
}

import DefaultButton from '#/components/buttons/simple-buttons/default-button';

import IconPhoto from '#/components/icons/icon-photo';
import DeviceCamera from '#/components/devices/device-camera';
import { useImageSignedUpload } from '#/modules/shared/generic/upload/hooks/use-image-signed-upload';
import { useId, useState } from 'react';

interface DeviceCameraPictureInputProps {
  onChange: (v: string) => void;
  className?: string;
}

export default function DeviceCameraPictureInput({ onChange, className = '' }: DeviceCameraPictureInputProps) {
  const [isDeviceCameraOpen, setIsDeviceCameraOpen] = useState(false);
  const closeDeviceCamera = () => setIsDeviceCameraOpen(false);
  const openDeviceCamera = () => setIsDeviceCameraOpen(true);

  const uploaderId = `device-picture-input-${useId()}`;
  const onPictureUploaded = (url: string) => {
    closeDeviceCamera();
    onChange(url);
  };
  const { uploadImage, isUploadPending } = useImageSignedUpload(uploaderId, onPictureUploaded);

  return (
    <>
      <DefaultButton
        onClick={openDeviceCamera}
        className={`
          w-fit

          ${className}
        `}
      >
        <div
          className={`
            flex
            items-center
            justify-center
            gap-2
            text-slate-500
          `}
        >
          <div className="h-4">
            <IconPhoto />
          </div>
          <p className="font-black">Prendre une photo</p>
        </div>
      </DefaultButton>
      {isDeviceCameraOpen && (
        <DeviceCamera
          isLoading={isUploadPending}
          onChange={uploadImage}
          onCancel={closeDeviceCamera}
        />
      )}
    </>
  );
}

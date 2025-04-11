import BooleanInput from '#/components/inputs/boolean-input';
import CuisineTypeInput from '#/modules/cooking/cuisine-type/components/cuisine-type-input';
import NumberInput from '#/components/inputs/number-input';
import { RECIPE_MAX_TOTAL_TIME } from '#/shared';
import TextInput from '#/components/inputs/text-input';
import PreviewedImageFileInput from '#/components/inputs/previewed-image-file-input';
import { DEFAULT_RECIPE_ILLUSTRATION_URL } from '#/modules/cooking/recipe/constants';
import ButtonImageFileInput from '#/components/inputs/button-image-file-input';
import DeviceCameraPictureInput from '#/components/inputs/device-camera-picture-input';

interface RecipeFormProps {
  name: string;
  illustrationUrl: string | null;
  preparationTimeInMinutes: number;
  totalTimeInMinutes: number;
  isVegetarian: boolean;
  cuisineTypeId: string;
  specialNamePlacholder?: string;
  setName: (v: string) => void;
  setIllustrationUrl: (v: string) => void;
  setPreparationTimeInMinutes: (v: number) => void;
  setTotalTimeInMinutes: (v: number) => void;
  setIsVegetarian: (v: boolean) => void;
  setCuisineTypeId: (v: string) => void;
}

export default function RecipeForm({
  name,
  illustrationUrl,
  preparationTimeInMinutes,
  totalTimeInMinutes,
  isVegetarian,
  cuisineTypeId,
  specialNamePlacholder = '',
  setName,
  setIllustrationUrl,
  setPreparationTimeInMinutes,
  setTotalTimeInMinutes,
  setIsVegetarian,
  setCuisineTypeId,
}: RecipeFormProps) {
  return (
    <div
      className={`
        flex
        w-full
        flex-wrap
        items-center
        justify-center
        gap-8
      `}
    >
      <div className="w-96">
        <PreviewedImageFileInput
          urlValue={illustrationUrl}
          urlPlaceholder={DEFAULT_RECIPE_ILLUSTRATION_URL}
          onChange={setIllustrationUrl}
        />
        <div
          className={`
            mt-2
            flex
            items-center
            justify-between
            gap-2
          `}
        >
          <ButtonImageFileInput onChange={setIllustrationUrl} />
          <DeviceCameraPictureInput onChange={setIllustrationUrl} />
        </div>
      </div>
      <div className="flex-1">
        <div
          className={`
            mb-4
            justify-between
            gap-4

            tablet:flex
          `}
        >
          <div
            className={`
              mb-4
              flex-1

              tablet:mb-0
            `}
          >
            <TextInput
              label="Nom de la recette"
              value={name}
              onChange={setName}
              className="min-w-56"
              placeholder={specialNamePlacholder}
            />
          </div>
          <div className="flex-1">
            <CuisineTypeInput
              value={cuisineTypeId}
              onChange={setCuisineTypeId}
              label="Type de cuisine"
            />
          </div>
        </div>
        <div
          className={`
            mb-4
            flex
            flex-wrap
            justify-between
          `}
        >
          <div className="mr-4">
            <NumberInput
              label="🕙 Prépa. (mins)"
              value={preparationTimeInMinutes}
              onChange={setPreparationTimeInMinutes}
              min={0}
              max={RECIPE_MAX_TOTAL_TIME}
            />
          </div>
          <div className="laptop:mr-4">
            <NumberInput
              label="🕙 Total (mins)"
              value={totalTimeInMinutes}
              onChange={setTotalTimeInMinutes}
              min={0}
              max={RECIPE_MAX_TOTAL_TIME}
            />
          </div>
          <div
            className={`
              mt-4
              flex
              w-full
              items-end

              laptop:mt-0
              laptop:w-48
            `}
          >
            <BooleanInput
              value={isVegetarian}
              onChange={setIsVegetarian}
            >
              <p>🥦 Végétarien</p>
            </BooleanInput>
          </div>
        </div>
      </div>
    </div>
  );
}

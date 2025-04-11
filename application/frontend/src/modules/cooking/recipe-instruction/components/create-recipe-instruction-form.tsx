import CreateButton from '#/components/buttons/simple-buttons/create-button';
import TextareaInput from '#/components/inputs/textarea-input';
import { useCreateRecipeInstructionMutation } from '#/modules/cooking/recipe-instruction/mutations';
import { uuidv4 } from '#/shared';
import { useState } from 'react';

interface CreateRecipeInstructionProps {
  recipeId: string;
  nextInstructionOrder: number;
}
export default function CreateRecipeInstructionForm({ recipeId, nextInstructionOrder }: CreateRecipeInstructionProps) {
  const [text, setText] = useState('');
  const createRecipeInstructionMutation = useCreateRecipeInstructionMutation();
  const createRecipeInstruction = () => {
    const id = uuidv4();
    createRecipeInstructionMutation.mutate(
      {
        id: id,
        recipeId: recipeId,
        text: text,
        timerNbMinutes: 0,
        order: nextInstructionOrder,
      },
      {
        onSuccess: () => setText(''),
      },
    );
  };

  return (
    <div>
      <TextareaInput
        onChange={setText}
        value={text}
        placeholder="Nouvelle instruction ..."
        rows={4}
      />
      <div
        className={`
          mt-4
          text-right
        `}
      >
        <CreateButton onClick={createRecipeInstruction}>Ajouter l&apos;instruction</CreateButton>
      </div>
    </div>
  );
}

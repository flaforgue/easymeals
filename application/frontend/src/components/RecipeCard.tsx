'use client';

import DeleteButton from '@/components/DeleteButton';
import ImageFilling from '@/components/ImageFilling';
import Link from 'next/link';
import { Recipe } from '@lemonpie/shared';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({
  recipe,
}: RecipeCardProps) {
  const imageUrl = recipe.imageUrl ?? '/images/lemonpie.jpeg';

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="relative w-full h-52">
        <ImageFilling src={imageUrl} />
      </div>
      <div className="px-4 py-2">
        <div className="text-lg mb-2">{recipe.name}</div>
      </div>
      <div className="px-4 pt-2 pb-2 flex justify-end	">
        <Link href={`/recipes/${recipe.id}/delete`} scroll={false}>
          <DeleteButton />
        </Link>
      </div>
    </div>
  );
}
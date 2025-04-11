import { createMeal, deleteMeal, moveMeal, updateMeal } from '#/modules/planning/meal/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MealsQueryKey } from '#/modules/planning/meal/queries';
import { UseCustomMutationResult } from '#/utils/mutation';
import toast from 'react-hot-toast';

export function useCreateMealMutation(): UseCustomMutationResult<typeof createMeal> {
  return useMutation({
    mutationFn: createMeal,
  });
}

export function useUpdateMealMutation(): UseCustomMutationResult<typeof updateMeal> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateMeal,
    onSuccess: () => {
      toast.success('Repas mis à jour', { id: 'global' });

      return queryClient.invalidateQueries({
        queryKey: [MealsQueryKey.List],
      });
    },
  });
}

export function useMoveMealMutation(): UseCustomMutationResult<typeof moveMeal> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: moveMeal,
    onSuccess: () => {
      toast.success('Repas déplacé', { id: 'global' });

      return queryClient.invalidateQueries({
        queryKey: [MealsQueryKey.List],
      });
    },
  });
}

export function useDeleteMealMutation(): UseCustomMutationResult<typeof deleteMeal> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteMeal,
    onSuccess: () => {
      toast.success('Repas supprimé', { id: 'global' });

      return queryClient.invalidateQueries({
        queryKey: [MealsQueryKey.List],
      });
    },
  });
}

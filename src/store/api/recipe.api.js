import { api } from "./api";

export const recipeApi = api.injectEndpoints({
    endpoints: builder => ({
        createRecipe: builder.mutation({
            query: (recipe) => ({
                body: recipe,
                url: '/',
                method: 'POST'
            }),
            invalidatesTags: () => [{
                type: 'Recipe',
            }]
        }),
        deleteRecipe: builder.mutation({
            query: (itemId) => ({
              url: `/${itemId}`,
              method: 'DELETE',
           }),
           invalidatesTags: () => [{
            type: 'Recipe',
        }] 
        }),
    })
})

export const { useCreateRecipeMutation, useDeleteRecipeMutation } = recipeApi //тут может быть ошибка
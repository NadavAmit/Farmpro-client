import React from 'react';
import useReactQuery from './useReactQuery';

const model = 'land';

const useLands = () => {
    const { GetAll, GetOne, Create, Update, Delete } = useReactQuery();

    const getAllLands = () => {
        const { data, isLoading, error, isError } = GetAll('/land', 'getAllLands', model, true);
        return { data, isLoading, error, isError };
    };

    const getSingleLand = (id: string) => {
        const { data, isLoading, error, isError } = GetOne(id, '/land', `getLand/${id}`, model, true);
        return { data, isLoading, error, isError };
    };

    const addLand = async (newLandData: any) => {
        try {
            return await Create.mutateAsync(
                {
                    path: 'land',
                    newData: newLandData,
                    model: model,
                    enabled: true,
                    queryKey: 'getAllLands'
                })
        }
        catch (error) {
            return error;
        }
    };

    // const updateLand = (id: string, updatedLandData: any) => {
    //     const { updateData, error } = Update(id, '/land', updatedLandData, model, true);
    //     return { updateData, error };
    // };
    const updateLand = async (id: string, updatedLandData: any) => {

        try {
            return await Update.mutateAsync(
                {
                    id,
                    path: 'land',
                    updatedData: updatedLandData,
                    model: model,
                    enabled: true,
                    queryKey: 'getAllLands'
                })
        }
        catch (error) {
            return error;
        }
    };

    const removeLand = async (id: string) => {
        try {
            return await Delete.mutateAsync(
                {
                    id,
                    path: 'land',
                    model: model,
                    enabled: true,
                    queryKey: 'getAllLands'
                })
        }
        catch (error) {
            return error;
        }
    };

    return {
        getAllLands,
        getSingleLand,
        addLand,
        updateLand,
        removeLand
    };
};

export default useLands;
import React from 'react';
import useReactQuery from './useReactQuery';

const model = 'field';

const useFields = () => {
    const { GetAll, GetOne, Create, Update, Delete } = useReactQuery();

    const getAllFields = () => {
        const { data, isLoading, error, isError } = GetAll('/field', 'getAllFields', model, true);
        return { data, isLoading, error, isError };
    };

    const getSingleField = (id: string) => {
        const { data, isLoading, error, isError } = GetOne(id, '/field', `getField/${id}`, model, true);
        return { data, isLoading, error, isError };
    };

    const addField = async (newFieldData: any) => {
        try {
            return await Create.mutateAsync(
                {
                    path: 'field',
                    newData: newFieldData,
                    model: model,
                    enabled: true,
                    queryKey: 'getAllFields'
                })
        }
        catch (error) {
            return error;
        }
    };

    const updateField = async (id: string, updatedFieldData: any) => {

        try {
            return await Update.mutateAsync(
                {
                    id,
                    path: 'field',
                    updatedData: updatedFieldData,
                    model: model,
                    enabled: true,
                    queryKey: 'getAllFields'
                })
        }
        catch (error) {
            return error;
        }
    };

    const removeField = async (id: string) => {
        try {
            return await Delete.mutateAsync(
                {
                    id,
                    path: 'field',
                    model: model,
                    enabled: true,
                    queryKey: 'getAllFields'
                })
        }
        catch (error) {
            return error;
        }
    };

    return {
        getAllFields,
        getSingleField,
        addField,
        updateField,
        removeField
    };
};

export default useFields;
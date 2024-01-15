import React from 'react';
import useReactQuery from './useReactQuery';
import Earning from '../api/models/earning';

const model = 'earning';

const useEarnings = () => {
    const { GetAll, GetOne, Create, Update, Delete } = useReactQuery();

    const getAllEarnings = () => {
        const { data, isLoading, error, isError } = GetAll('/earning', 'getAllEarnings', model, true);
        return { data, isLoading, error, isError };
    };

    const getSingleEarning = (id: string) => {
        const { data, isLoading, error, isError } = GetOne(id, '/earning', `getEarning/${id}`, model, true);
        return { data, isLoading, error, isError };
    };

    const getEarningsByFieldId = (fieldId: string) => {
        const queryKey = ["getAllEarnings", fieldId];
        const path = `earning/field/${fieldId}`;
    
        const { data, isLoading, error, isError } = GetAll(
          path,
          queryKey,
          model,
          true
        );
    
        return { data, isLoading, error, isError };
      };

    const addEarning = async (newEarningData: Earning) => {
        try {
            return await Create.mutateAsync(
                {
                    path: 'earning',
                    newData: newEarningData,
                    model: model,
                    enabled: true,
                    queryKey: ['getAllEarnings']
                })
        }
        catch (error) {
            return error;
        }
    };

    const updateEarning = async (id: string, updatedEarningData: any) => {

        try {
            return await Update.mutateAsync(
                {
                    id,
                    path: 'earning',
                    updatedData: updatedEarningData,
                    model: model,
                    enabled: true,
                    queryKey: ['getAllEarnings']
                })
        }
        catch (error) {
            return error;
        }
    };

    const removeEarning = async (id: string) => {
        try {
            return await Delete.mutateAsync(
                {
                    id,
                    path: 'earning',
                    model: model,
                    enabled: true,
                    queryKey: ['getAllEarnings']
                })
        }
        catch (error) {
            return error;
        }
    };

    return {
        getAllEarnings,
        getSingleEarning,
        getEarningsByFieldId,
        addEarning,
        updateEarning,
        removeEarning
    };
};

export default useEarnings;
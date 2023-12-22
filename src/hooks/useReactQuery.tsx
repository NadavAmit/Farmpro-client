import React from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import apiClient from '../api/apiClient';

const fetchData = async (model: string): Promise<any> => {
    const url = `/api/land/`; // Customize the base URL as needed
    try {
        const response = await apiClient.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data. Check the console for details.');
    }
};

const useReactQuery = () => {
    const queryClient = useQueryClient()

    const GetAll = (path: string, queryKey: string = path, model: string, enabled?: boolean) => {
        const { data, isLoading, error, isError } = useQuery({
            queryKey: [queryKey],
            queryFn: () => apiClient
                .get(path)
                .then(res => res.data)
                .catch((err) => {
                    console.error('Error fetching data:', err);
                    return Promise.reject({ status: 'fail', message: err.message })
                })
        }
        )
        return { data, isLoading, error, isError }

    }

    const GetOne = (id: string, path: string, queryKey: string = `${path}/${id}`, model: string, enabled?: boolean) => {
        const { data, isLoading, error, isError } = useQuery({
            queryKey: [queryKey],
            queryFn: () => apiClient
                .get(`${path}/${id}`)
                .then(res => res.data)
                .catch((err) => {
                    console.error('Error fetching data:', err);
                    return Promise.reject({ status: 'fail', message: err.message })
                })
        });

        return { data, isLoading, error, isError };
    };

    const Create = useMutation(
        {
            mutationFn: (props: { path: string, newData: any, model: string, queryKey?: string, enabled?: boolean }) => 
            { return apiClient.post(props.path, props.newData) },
            onSuccess: (data, variables) => {
                if (variables.queryKey) {
                    queryClient.invalidateQueries({ queryKey: [variables.queryKey] })
                }
            },
            onError: (error) => {
                console.error('Error creating data:', error);
            }
        }
    );

    const Update = useMutation(
        {
            mutationFn: (props: { id: string, path: string, updatedData: any, model: string, queryKey?: string, enabled?: boolean }) =>
             { return apiClient.put(`${props.path}/${props.id}`, props.updatedData) },
            onSuccess: (data, variables) => {
                if (variables.queryKey) {
                    queryClient.invalidateQueries({ queryKey: [variables.queryKey] })
                }
            },
            onError: (error) => {
                console.error('Error updating data:', error);
            }
        }
    );

    const Delete = useMutation(
        {
            mutationFn: (props: { id: string, path: string, model: string, queryKey?: string, enabled?: boolean }) => 
            { return apiClient.delete(`${props.path}/${props.id}`) },
            onSuccess: (data, variables) => {
                if (variables.queryKey) {
                    queryClient.invalidateQueries({ queryKey: [variables.queryKey] })
                }
            },
            onError: (error) => {
                console.error('Error deleting data:', error);
            }
        }
    );


    return {
        GetAll,
        GetOne,
        Create,
        Update,
        Delete
    };

}
export default useReactQuery;
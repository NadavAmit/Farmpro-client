import React from "react";
import useReactQuery from "./useReactQuery";
import Activity from "../api/models/activity";

const model = "activity";
const path = "/activity";

const useActivities = () => {
  const { GetAll, GetOne, Create, Update, Delete } = useReactQuery();

  const getAllActivities = () => {
    const { data, isLoading, error, isError } = GetAll(
      path,
      "getAllActivities",
      model,
      true
    );
    return { data, isLoading, error, isError };
  };

  const getSingleActivity = (id: string) => {
    const { data, isLoading, error, isError } = GetOne(
      id,
      path,
      `getActivity/${id}`,
      model,
      true
    );
    return { data, isLoading, error, isError };
  };

  const getAllFieldActivitiesById = (fieldId: string) => {
    const queryKey = ['getAllActivities', fieldId];
    const path = `activity/field/${fieldId}`;

    const { data, isLoading, error, isError } = GetAll(
        path,
        queryKey,
        model,
        true
      );

    return { data, isLoading, error, isError };
  };

  const addActivity = async (newActivityData: Activity) => {
    const queryKeys = ["getAllActivities"]
    try {
      return await Create.mutateAsync({
        path: "activity",
        newData: newActivityData,
        model: model,
        enabled: true,
        queryKey: queryKeys,
      });
    } catch (error) {
      return error;
    }
  };

  const updateActivity = async (id: string, updatedActivityData: any) => {
    try {
      return await Update.mutateAsync({
        id,
        path: "activity",
        updatedData: updatedActivityData,
        model: model,
        enabled: true,
        queryKey: ["getAllActivities"],
      });
    } catch (error) {
      return error;
    }
  };

  const removeActivity = async (id: string) => {
    try {
      return await Delete.mutateAsync({
        id,
        path: "activity",
        model: model,
        enabled: true,
        queryKey: ["getAllActivities"],
      });
    } catch (error) {
      return error;
    }
  };

  return {
    getAllActivities,
    getSingleActivity,
    getAllFieldActivitiesById,
    addActivity,
    updateActivity,
    removeActivity,
  };
};

export default useActivities;

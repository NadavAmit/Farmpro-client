import React from "react";
import useReactQuery from "./useReactQuery";
import Expense from "../api/models/expense";

const model = "expense";

const useExpenses = () => {
  const { GetAll, GetOne, Create, Update, Delete } = useReactQuery();

  const getAllExpenses = () => {
    const { data, isLoading, error, isError } = GetAll(
      "/expense",
      "getAllExpenses",
      model,
      true
    );
    return { data, isLoading, error, isError };
  };

  const getSingleExpense = (id: string) => {
    const { data, isLoading, error, isError } = GetOne(
      id,
      "/expense",
      `getExpense/${id}`,
      model,
      true
    );
    return { data, isLoading, error, isError };
  };
  const getExpensesByFieldId = (fieldId: string) => {
    const queryKey = ["getAllExpenses", fieldId];
    const path = `expense/field/${fieldId}`;

    const { data, isLoading, error, isError } = GetAll(
      path,
      queryKey,
      model,
      true
    );

    return { data, isLoading, error, isError };
  };

  const addExpense = async (newExpenseData: Expense) => {
    try {
      return await Create.mutateAsync({
        path: "expense",
        newData: newExpenseData,
        model: model,
        enabled: true,
        queryKey: ["getAllExpenses"],
      });
    } catch (error) {
      return error;
    }
  };

  const updateExpense = async (id: string, updatedExpenseData: any) => {
    try {
      return await Update.mutateAsync({
        id,
        path: "expense",
        updatedData: updatedExpenseData,
        model: model,
        enabled: true,
        queryKey: ["getAllExpenses"],
      });
    } catch (error) {
      return error;
    }
  };

  const removeExpense = async (id: string) => {
    try {
      return await Delete.mutateAsync({
        id,
        path: "expense",
        model: model,
        enabled: true,
        queryKey: ["getAllExpenses"],
      });
    } catch (error) {
      return error;
    }
  };

  return {
    getAllExpenses,
    getSingleExpense,
    getExpensesByFieldId,
    addExpense,
    updateExpense,
    removeExpense,
  };
};

export default useExpenses;

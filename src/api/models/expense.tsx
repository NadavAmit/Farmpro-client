interface Expense {
    _id?: number;
    fieldId: number;
    expenseType: string;
    amount: number;
    date: Date;
}

export default Expense;
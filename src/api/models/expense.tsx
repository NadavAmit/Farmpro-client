interface Expense {
    _id?: number;
    field_id: number;
    expense_type: string;
    amount: number;
    date: Date;
}

export default Expense;
interface Earning {
    _id?: number;
    land_id: number;
    earning_type: string;
    amount: number;
    date: Date;
}

export default Earning;
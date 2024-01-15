interface Activity {
    _id?: number;
    status: string;
    date?: Date;
    cropType: string;
    fieldSize: number;
    field: number;
}

export default Activity;
interface Activity {
    _id?: number;
    status: string;
    date?: Date;
    cropType: string;
    fieldSize: number;
    fieldId: number;
}

export default Activity;
interface Field {
    id?: string;
    name: string;
    size: number;
    cropId?:number;
    cropType: number;
    stage: number;
}

export default Field;
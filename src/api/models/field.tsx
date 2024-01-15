interface Field {
    id?: number;
    name: string;
    size: number;
    cropId?:number;
    cropType: number;
    stage: number;
}

export default Field;
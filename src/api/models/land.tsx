interface Land {
    _id?: string;
    name: string;
    size: number;
    cropId?:number;
    cropType: number;
    stage: number;
}

export default Land;
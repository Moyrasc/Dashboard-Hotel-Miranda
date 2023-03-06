export interface Room {
    id: number,
    name: string;
    typeRoom: string;
    description: string;
    photo: string[];
    number: number;
    offers: boolean;
    price: number;
    discount: number;
    cancellation: string;
    amenities: string;
    status: string;
    roomFloor: string
}
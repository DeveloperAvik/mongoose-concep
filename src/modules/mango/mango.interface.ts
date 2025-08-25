export interface IMango {
    name: string;
    variety: string;
    origin: string;
    unit: "KG" | "Dozen" | "Piece";
    taste: 'sweet' | 'sour' | 'sweet and sour';
    price: number;
    inStock: string;
    season: "Summer" | "Winter" | "Spring" | "Autumn";
}
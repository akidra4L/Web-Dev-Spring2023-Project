export interface ICategory {
    imgURL: string;
    title: string;
};

export interface AuthToken {
    token: string;
};

export interface SignUpToken {
    username: string;
    first_name: string;
    last_name: string;
    password: string;
    email: string;
};

export interface IRecipe {
    id: number;
    name: string;
    image: string;
    description: string;
};

export interface IMasterClass {
    id: number;
    name: string;
    date: Date;
    duration: number;
    location: string;
    description: string,
    image: string;
    price: number,
    maxAttendees: number,
    attendees: string[],
}
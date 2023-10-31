export type Realtor = {
    id: string;
    userName: string;
    fullName: string;
    email: string;
    avatarImage: string;
    experience: string;
    bio: string;
    city: string;
    sold: string;
    specialization: string;
};

export type newRealtor = {
    userName: string;
    fullName: string;
    email: string;
    avatarImage: string;
    password: string;
    experience: string;
    bio: string;
    city: string;
    sold: string;
    specialization: string;
};

export type Property = {
    id: string;
    for: string;
    type: string;
    kind: string;
    images: [string];
    area: string;
    rooms: string;
    bathrooms: string;
    description: string;
    city: string;
    price: string;
    realtor: Realtor;
};

export type SearchPropertyInput = {
    city?: string;
    kind?: string;
    for?: string;
};

export type NewReqInput = {
    name: string;
    email: string;
    id: string;
    phone: string;
    message: string;
};

export type SignUpFormValues = {
    userName: string;
    fullName: string;
    email: string;
    avatarImage: [File];
    password: string;
    experience: string;
    bio: string;
    city: string;
    sold: string;
    specialization: string;
};

export type LogInFormValues = {
    email: string;
    password: string;
};

export type BuyFormValues = {
    for: string;
    city: string;
};

export type ContactFormValues = {
    name: string;
    phone: string;
    email: string;
    message: string;
};

export type RealtorFormValues = {
    city: string;
    name: string;
};

export type BeginCardFormValues = {
    for: string;
    type: string;
    kind: string;
};

export type FinalCardFormValues = {
    images: FileList;
    area: string;
    rooms: string;
    bathrooms: string;
    description: string;
    city: string;
    price: string;
};

export type NewProperty = {
    for: string;
    type: string;
    kind: string;
    images: string[];
    area: string;
    rooms: string;
    bathrooms: string;
    description: string;
    city: string;
    price: string;
};

export type Request = {
    name: string;
    phone: string;
    message: string;
    email: string;
    id: string;
};

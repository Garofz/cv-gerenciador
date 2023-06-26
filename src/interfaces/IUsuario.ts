export interface IUsuario {
    _Id: number;
    name: string;
    email: string;
    maskedEmail: string;
    agents: IUserAgent[];
    products: IUserProduct[];
    accessToken: IAccessToken;
}
export interface IUserProduct {
    product: IProduct;
}
export interface IUserAgent {
    agent: IAgent;
}
export interface IAccessToken {
    token: string;
    expirationDate: Date;
    creationDate: Date;
}
export interface IProduct {
    _Id: number;
    description: string;
    name: string;
}
export interface IAgent {
    _Id: number;
    name: string;
    active: boolean;
    logo: string;
    personCategory: IPersonCategory;
    document: IDocument;
    access: IAccess;
}
export interface IDocument {
    _Id: number;
    document: string;
    maskedDocument: string;
}

export interface IPersonCategory {
    _Id: number;
    description: string;
}
export interface IAccess {
    _Id: number;
    description: string;
    mainAccess: boolean;
    firstAccess: boolean;
    lastAccess?: Date;
    inactivationAccessDate?: Date;
    signUpDate: Date;
}

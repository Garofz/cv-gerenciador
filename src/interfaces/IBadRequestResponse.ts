export interface IBadRequestResponse {
    controle: IControleResponse;
    error: IErrorResponse;
}
export interface IControleResponse {
    prefix: string;
    message: string;
}
export interface IErrorResponse {
    error: string;
}

export class AppError {
    //handle error if that ocurred in http transactions
    public handleError(error: any): Promise<any> {
        console.error('han error has ocurred: ', error);
        return Promise.reject(error.message || error);
    }
}
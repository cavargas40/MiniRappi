export class AppError {
    public handleError(error: any): Promise<any> {
        console.error('han error has ocurred: ', error); //con proposito de demostracion unicamente
        return Promise.reject(error.message || error);
    }
}
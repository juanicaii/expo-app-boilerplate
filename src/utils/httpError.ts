export class HttpError extends Error {
    code: string
    constructor(message: string, code: string) {
        super(message);
        this.message = message;
        this.code = code;
    }
}
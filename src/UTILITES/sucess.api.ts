export class SucessApi{
public message: string;
public statusCode: number;
public data: any;
    constructor( message: string,  statusCode: number,data:any){
        this.message = message;
        this.statusCode = statusCode;
        this.data = data;
    }
}
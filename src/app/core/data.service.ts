import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { ICostumer, IOrder } from "../shared/interfaces";

@Injectable()
export class DataService{

    baseUrl: string = "assets/";

    constructor(){

    }



    private handleError(error: any){
        console.error('server error:', error);
        if(error.error instanceof Error){
            const errMessage = error.error.message;
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || "Node.js server error");
    }
}
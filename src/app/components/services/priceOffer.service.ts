import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class PriceOfferService{
    path: string = environment.apiUrl;


    constructor(
        private httpClient: HttpClient) { }

        priceSend(data: any):any{
            return this.httpClient.post<any>(this.path+"/PriceOfferAPI/Add",data);
        }
      
    }
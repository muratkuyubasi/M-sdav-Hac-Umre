import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class FrontMenüService {
    path: string = environment.apiUrl;
    lang: string = "tr"


    constructor(
        private httpClient: HttpClient) { }

     
        getList():any {
            return this.httpClient.get<any>(this.path+"/FrontMenuItemAPI/GetListByParentIdNull?languageId=1&isActive=true");
        }
       
    }
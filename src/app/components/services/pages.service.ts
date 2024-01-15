import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class PagesService {
    path: string = environment.apiUrl;
    // lang: string = "tr"


    constructor(
        private httpClient: HttpClient) { }

     
        getPagesDetail(pageId: string): Observable<any> {
            //const url="AnnouncementAPI/GetList?typeId="+typeId+"&languageId="+languageId
            const url = `PageAPI/GetById?id=${pageId}`;
            return this.httpClient.get<any>(this.path + url);
          }
        getid(id: string): Observable<any> {
            return this.httpClient.get<any>(this.path + "/PageAPI/GetById?id="+id)
        }
       
        getslug(slug:string): Observable<any> {
            return this.httpClient.get<any>(this.path + "/FrontMenuItemAPI/GetBySlug?slug="+slug)
        }
        getList():any {
            return this.httpClient.get<any>(this.path+"/PageAPI/GetList");
        }
    }
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environments"


@Injectable({
    providedIn:"root"
})
export class ApiService {
    constructor(private http: HttpClient) { }

    getData(city: string) {
        const url = environment.baseUrl + city + environment.apiConfig;
        return this.http.get(url)
    }
}
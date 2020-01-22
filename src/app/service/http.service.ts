import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, mapTo, take, startWith, last, find } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private httpService: HttpClient) {}
  APIlink = "https://5e193080cc623b001467869d.mockapi.io/book";
  getAPI() {
    return this.httpService.get(this.APIlink).pipe(map(data => Object.keys(data)))
  }
}

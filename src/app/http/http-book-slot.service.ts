import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BookSlot } from "../class/bookSlot";
import { Observable, catchError, of } from "rxjs";

@Injectable({providedIn: 'root'})
export class HttpBookSlotService {
    public constructor(private readonly httpClient: HttpClient) {}

    public save(item: BookSlot): Observable<any> {
        const fakeAPI = 'https://fake.com/save'
        return this.httpClient.post(fakeAPI, item.toJSON()).pipe(
            catchError((error: HttpErrorResponse) => {
                return of(error);
            })
        )
    }
}
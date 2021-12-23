import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem("token")
        if(token){
            const httpHeaders: HttpHeaders = new HttpHeaders({
                "Authorization" : `Bearer ${token}`
            })

            const reqVaovao = req.clone({
                headers: httpHeaders
            })
            return next.handle(reqVaovao)
            
        }
        else
        return next.handle(req)
    }

}
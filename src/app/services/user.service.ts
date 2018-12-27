import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'

@Injectable()
export class UserService {
    private headers = new Headers({ 'Content-Type': 'application/json;' })
    private options = new RequestOptions({ headers: this.headers })

    constructor (private http: Http) {

    }
    
    // 是否登录
    public isLogin(): boolean {
        const token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        return !this.isTokenExpired(token);
    }

    // 利用http请求判断用户是否登录或token是否过期
    private isTokenExpired(token:string):boolean {
        return isTokenExpired
    }
}
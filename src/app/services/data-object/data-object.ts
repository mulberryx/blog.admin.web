/**
 * 用户服务
 * @author Philip
 */
import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'

@Injectable()
export class DataObject {
    private headers = new Headers({ 'Content-Type': 'application/json;' })
    private options = new RequestOptions({ headers: this.headers })

    constructor (private http: Http) {

    }
    
    /**
     * 是否登录
     * @param {object} 查询参数
     */
    public query(): object {
        return {}
    }

    /**
     * 是否登录
     * @param {string} 对象id
     */
    public details(): object {
        return {}
    }

    public add():
}
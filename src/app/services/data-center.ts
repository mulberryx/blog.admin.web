/**
 * 数据中心 
 * @author Philip
 */
import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'

@Injectable()
export class DataObject {
    private headers = new Headers({
        'Content-Type': 'application/json;' 
    })

    private options = new RequestOptions({
        headers: this.headers
    })

    constructor (private http: Http) {
        this.http = http
    }
    
    /**
     * 是否登录
     * @param {object} 查询参数
     */
    public query (filters, pageNum, pageSize): object {
        return {}
    }

    /**
     * 是否登录
     * @param {string} 对象id
     */
    public details (id): object {
        return {}
    }

    /**
     * 是否登录
     * @param {string} 对象id
     */
    public add (): object {
        return {}
    }

    /**
     * 是否登录
     * @param {string} 对象id
     */
    public update (): object {
        return {}
    }
}
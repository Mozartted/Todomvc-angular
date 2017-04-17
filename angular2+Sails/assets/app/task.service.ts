import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import { Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import {Task} from './task';


@Injectable()
export class TaskService{

    public task:Task;
    private baseUrl = '';
    constructor(private http:Http){
        let tasks=http.get(this.baseUrl) //retrieving all todods
              .map((res:Response)=>res.json())
              .catch((error:any)=>Observable.throw(error.json().error || 'Server error'));

        tasks.subscribe( 
            tasks => this.task = tasks, //Bind to view
            err => {
            console.log(err);
        });
    }

}
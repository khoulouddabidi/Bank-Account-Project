
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, Subscriber } from 'rxjs';
import { Client } from "app/models/client";


@Injectable()
export class CommonService {

    client: Client;


    public selectClient: BehaviorSubject<Client>
    = new BehaviorSubject(this.client);


    constructor() {
       
        

    }
}
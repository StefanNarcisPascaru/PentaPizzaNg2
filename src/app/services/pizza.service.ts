import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Pizza} from "../models/pizza";

@Injectable()
export class PizzaService {

  constructor(private http: Http) { }

  addPizza(pizza) {
    //return this.http.post(`http://localhost:4200/pizza/insert`, pizza);
    return Observable.of<Pizza>(pizza);
  }
}

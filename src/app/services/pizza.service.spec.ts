import { TestBed, inject } from '@angular/core/testing';

import { PizzaService } from './pizza.service';
import {Pizza} from "../models/pizza";
import {Http} from "@angular/http";
import {Observable} from "rxjs";

describe('PizzaService', () => {
  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers:[PizzaService,
        {
          provide:Http
        }]
    });
  });


  it('should be returning an observable of type pizza',inject([PizzaService],
    (pizzaService:PizzaService)=>{
    let mockPizza=new Pizza("1","mock",[]);
    pizzaService.addPizza(mockPizza).subscribe((response)=>{
      expect(response).toBe(mockPizza);
    });
  }))
})

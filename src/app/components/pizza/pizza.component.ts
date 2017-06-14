import {Component, ViewChild, OnInit} from '@angular/core';
import {Pizza} from "../../models/pizza";
import {Ingredient} from "../../models/Ingredient";
import {PizzaService} from "../../services/pizza.service";
import {Router} from "@angular/router";

@Component({
  selector: 'PentaStagione-newPizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit
{
  @ViewChild('form') form;
  ingredients:Ingredient[]=
    [
      new Ingredient("1","salt"),
      new Ingredient("2","pepper"),
      new Ingredient("3","cheese"),
      new Ingredient("4","bacon"),
      new Ingredient("5","spinach"),
    ];
  pizza:Pizza=new Pizza("001","newPizza",this.ingredients);

  constructor(private pizzaService:PizzaService, private router: Router){}
  ngOnInit(){}

  submit(pizza) {
    if (this.form.valid)
      this.pizzaService.addPizza(pizza)
        .subscribe((response) => {
          console.log(response);
          this.router.navigate([''])
        });
  }

}

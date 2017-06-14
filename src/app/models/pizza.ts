import {Ingredient} from "./Ingredient";

export class Pizza
{
  public constructor(id:string, name:string, ingredients:Ingredient[])
  {
    this.id=id;
    this.name=name;
    this.ingredients=ingredients;
  }
  public id:string;
  public name:string;
  public ingredients:Ingredient[];
}

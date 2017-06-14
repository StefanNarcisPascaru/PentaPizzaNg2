import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PizzaComponent} from "../components/pizza/pizza.component";
import {HomeComponent} from "../components/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pizza',
    component: PizzaComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './routings/routing';

import { PizzaComponent } from './components/pizza/pizza.component';
import { HomeComponent } from './components/home/home.component';
import { RootComponent } from './components/root/root.component';
import { PizzaService} from './services/pizza.service'

@NgModule({
  declarations: [
    PizzaComponent,
    HomeComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PizzaService],
  bootstrap: [RootComponent]
})
export class AppModule { }

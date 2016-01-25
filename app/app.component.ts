import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CafeComponent} from './cafe/cafe.component';
import {CookingComponent} from './cooking/cooking.component';
import {CraftingComponent} from './crafting/crafting.component';
import {InventoryComponent} from './inventory/inventory.component';
import {FoodComponent} from './food/food.component';
import {FurnitureComponent} from './furniture/furniture.component';

@Component({
     selector: 'app',
     template: `
        <h1>Kurjira Atsume</h1>
        <nav>
            <a [routerLink]="['Cafe']">Cafe</a>
            <a [routerLink]="['Cooking']">Cooking</a>
            <a [routerLink]="['Crafting']">Crafting</a>
            <a [routerLink]="['Inventory']">Inventory</a>
            <a [routerLink]="['Food']">Food</a>
            <a [routerLink]="['Furniture']">Furniture</a>
        </nav>  
        <router-outlet></router-outlet> 
     `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/cafe/', name: 'Cafe', component: CafeComponent, useAsDefault: true},
    {path:'/cooking/', name: 'Cooking', component: CookingComponent},
    {path:'/crafting/', name: 'Crafting', component: CraftingComponent},
    {path:'/inventory/...', name: 'Inventory', component: InventoryComponent},
    {path:'/food/', name: 'Food', component: FoodComponent},
    {path:'/furniture/', name: 'Furniture', component: FurnitureComponent},
])
export class AppComponent { }
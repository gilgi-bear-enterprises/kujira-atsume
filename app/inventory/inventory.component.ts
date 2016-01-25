import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {IngredientsComponent} from './inventory-ingredients.component'
import {MaterialsComponent} from './inventory-materials.component'
import {InventoryService} from './inventory.service'

@Component({
    template: `
        <h2>Inventory</h2>
        <nav>
            <a [routerLink]="['Ingredients']">Ingredients</a>
            <a [routerLink]="['Materials']">Materials</a> 
        </nav>
        <router-outlet></router-outlet>           
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [InventoryService]
})
@RouteConfig([
    {path:'/ingredients/', name: 'Ingredients', component: IngredientsComponent, useAsDefault: true},
    {path:'/materials/', name: 'Materials', component: MaterialsComponent}
])
export class InventoryComponent { }

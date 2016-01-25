import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {Resource, InventoryService} from './inventory.service';

@Component({
    template: `
        <h3>List of Ingredients</h3>
        <ul>
            <li *ngFor="#ingredient of ingredients"
                    [class.selected]="isSelected(ingredient)"
                    (click)="onSelect(ingredient)">
                <img src="{{ingredient.image}}">
                <br>
                <h4>Name: {{ingredient.name}} </h4>
                <h4>Quantity: {{ingredient.quantity}} </h4>
                <p *ngIf="isSelected(ingredient)">{{ingredient.description}}</p>
            </li>
        </ul>
        
    `,
})
export class IngredientsComponent implements OnInit { 
    ingredients: Resource[];
    
    private _selectedId: number;
    
    constructor(
        private _service: InventoryService,
        private _router: Router,
        routeParams: RouteParams) {
            this._selectedId = +routeParams.get('id');
    }
    
    isSelected(ingredient: Resource){
        return ingredient.id === this._selectedId;
    }
    
    ngOnInit(){
        this._service.getIngredients()
            .then(ingredients => this.ingredients = ingredients);
    }
    
    onSelect(ingredient: Resource) {
        this._router.navigate( ['Ingredients', {id: ingredient.id}] );
    }
}
import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {Resource, InventoryService} from './inventory.service';

@Component({
    template: `
        <h3>List of Materials</h3>
        <ul>
            <li *ngFor="#material of materials"
                    [class.selected]="isSelected(material)"
                    (click)="onSelect(material)">
                <img src="{{material.image}}">
                <br>
                <h4>Name: {{material.name}} </h4>
                <h4>Quantity: {{material.quantity}} </h4>
                <p *ngIf="isSelected(material)">{{material.description}}</p>
            </li>
        </ul>
        
    `,
})
export class MaterialsComponent implements OnInit {
    materials: Resource[];
    
    private _selectedId: number;
    
    constructor(
        private _service: InventoryService,
        private _router: Router,
        routeParams: RouteParams) {
            this._selectedId = +routeParams.get('id');
    }
    
    isSelected(material: Resource){
        return material.id === this._selectedId;
    }
    
    ngOnInit(){
        this._service.getMaterials()
            .then(materials => this.materials = materials);
    }
    
    onSelect(material: Resource) {
        this._router.navigate( ['Materials', {id: material.id}] );
    }
 }
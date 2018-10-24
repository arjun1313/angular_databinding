import { parent_service } from './../parent_sevice';
import { Component, Input } from '@angular/core';


@Component({
    selector:'Scenario3Child',
    templateUrl:'./child.html',
    providers:[parent_service]
})
export class Scenario3Child {
     
    @Input() data:string;
    
}
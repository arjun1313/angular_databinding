import { parent_service } from './parent_sevice';
import { Component, Input } from '@angular/core';


@Component({
    selector:'Scenario4Parent',
    templateUrl:'./parent.html',
    providers:[parent_service]
})
export class Scenario4Parent {
     
    @Input() data:string;
}


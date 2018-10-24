import { Component, Input } from '@angular/core';

@Component({
    selector:'Scenario5Child',
    templateUrl:'./child.html',
})
export class Scenario5Child {
    
    @Input() datafromgc:string;
}
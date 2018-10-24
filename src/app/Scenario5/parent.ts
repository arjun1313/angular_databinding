import { Component, Input } from '@angular/core';

@Component({
    selector:'Scenario5Parent',
    templateUrl:'./parent.html',
})
export class Scenario5Parent {
     
    @Input() data:string;
}


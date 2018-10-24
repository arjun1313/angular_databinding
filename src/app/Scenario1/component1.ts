import { service1 } from './service1';
import { Component } from '@angular/core';

@Component({
    selector:'Scenario1',
    templateUrl:'./component1.html',
    providers:[service1]
})
export class Scenario1Component {
     
    private data ;

    constructor(private _dataservice:service1){}

    onAddData(daTa:string){
        this.data =this._dataservice.insertData(daTa);
        console.log(this._dataservice.showData());
    }
}
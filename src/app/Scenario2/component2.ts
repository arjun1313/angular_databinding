import { service2 } from './service2';
import { Component } from '@angular/core';

@Component({
    selector:'Scenario2',
    templateUrl:'./component2.html',
    providers:[service2]
})
export class Scenario2Component {
     
    private data ;

    constructor(private _dataservice:service2){}

    onAddData(daTa:string){
        this.data =this._dataservice.insertData(daTa);
    }
    onShowData(){
        this.data =this._dataservice.showData();
    }
}
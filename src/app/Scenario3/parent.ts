import { parent_service } from './parent_sevice';
import { Component } from '@angular/core';


@Component({
    selector:'Scenario3Parent',
    templateUrl:'./parent.html',
    providers:[parent_service]
})
export class Scenario3Parent {
     
    private data ;

    public _dataservice:parent_service;

    constructor( dataservice:parent_service){
        this._dataservice = dataservice;
    }

    onAddData(daTa:string){
        this.data =this._dataservice.insertData(daTa);
    }

}


import { child_service } from './child_service';
import { Component, Input } from '@angular/core';


@Component({
    selector:'Scenario4Child',
    templateUrl:'./child.html',
    providers:[child_service]
})
export class Scenario4Child {
    
    private data ;

    private _dataservice:child_service;

    constructor( dataservice:child_service){
        this._dataservice = dataservice;
    }

    onAddData(daTa:string){
        this.data =this._dataservice.insertData(daTa);
    } 
}
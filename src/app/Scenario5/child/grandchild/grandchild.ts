import { Component } from '@angular/core';
import {grandchild_service} from './grandchild_service'

@Component({
    selector:'Scenario5GrandChild',
    templateUrl:'./grandchild.html',
    providers:[grandchild_service]
})
export class Scenario5GrandChild {
    
    private data ;

    private _dataservice:grandchild_service;

    constructor( dataservice:grandchild_service){
        this._dataservice = dataservice;
    }

    onAddData(daTa:string){
        this.data =this._dataservice.insertData(daTa);
    } 
}
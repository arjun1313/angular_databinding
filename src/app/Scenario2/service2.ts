export class service2 {

    private data = "this is default" ;

    insertData(data :string){
        this.data = data;
    }
    showData(){
        return this.data ;
    }
}
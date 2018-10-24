export class service1 {

    private data ;

    insertData(data :string){
        this.data = data;
    }
    showData(){
        return this.data ;
    }
}
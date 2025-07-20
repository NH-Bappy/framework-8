// 1 : todo :middleware;
// 2 : routes;
// 3 : nested/seprated routes;
// 4 : encryption module;

class app{
    constructor (){
        this.routes = [];
        this.middleWare = [];
    }



    get(path , callback) {
        this.routes.push({method:"GET" , path ,callback});
    }


    post(path , callback){
        this.routes.push({method:"POST" , path , callback});
    }

    delete(path , callback){
        this.routes.push({method:"DELETE" , path , callback});
    }
}


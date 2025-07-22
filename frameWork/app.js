// 1 : todo :middleware;
// 2 : routes;
// 3 : nested/seprated routes;
// 4 : encryption module;
const {log} = require("console");
const http = require("http");

class express{
    constructor (){
        this.routes = [];
        this.middleWare = [];
    }

// middleWare

use(mwF){
    this.middleWare.push(mwF)
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
//middleWare function execution

middleWareFunEx(req , res){
 const dispatch =(item) => {
    if(item >= this.middleWare.length){
        return Promise.resolve();
    }
    return new Promise((resolve) => {
        const singleMwF = this.middleWare[item];
        singleMwF(req , res ,() => {
            resolve(dispatch(item + 1));
        });
    });
 };
 return dispatch(0);
};


    //start server
    listen(port , callback){
        const server = http.createServer(async (req,res) => {

            // log(req.url);

            // execute middleWare function
            await this.middleWareFunEx(req , res)


            // match the routes
        const isMatch = this.routes.find(item => item.method == req.method && item.path == req.url);
        if(isMatch){
            isMatch.callback(req , res)
        }
        });
        server.listen(port , callback)
    }
}

module.exports = express;


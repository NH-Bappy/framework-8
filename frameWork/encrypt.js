const crypto = require("crypto")



class brypt{
    hashPassword = (password) => {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.scryptSync(password , salt , 64).toString('hex')
    return{salt , hash}
};
    varifyPassword = (userPassword , salt , hash) => {
    const varify = crypto.scryptSync(userPassword , salt , 64).toString("hex");
    return varify == hash
};
}


module.exports = brypt

// const hashPassword = (password) => {
//     const salt = crypto.randomBytes(16).toString('hex');
    
//     const hash = crypto.scryptSync(password , salt , 64).toString('hex')
    
//     return{salt , hash}
// }


// const varifyPassword = (userPassword , salt , hash) => {

//     const varify = crypto.scryptSync(userPassword , salt , 64).toString("hex");

//     return varify == hash
// }

// const {salt , hash} = hashPassword("1234")

// console.log(varifyPassword("1234" , salt ,hash));

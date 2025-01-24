// class ExpressError extends Error{
//     constructor(statusCode , message) {
//         super();
//         this.statusCode = statusCode;
//         this.message = message;
//     }
// }

// module.exports = ExpressError; 


 const errorHandler = (statusCode , message) =>{
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
}

module.exports = errorHandler;
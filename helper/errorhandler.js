
function sendResponse(res, status_code, message, data=null){
    
    res.status(status_code).send({msg:message, data:data})
}


function INTERNALSERVERERROR(res,error){
    sendResponse(res,500, "Internal Server Error", error.message)
    
}

function NOTFOUNDEXCEPTION(res,data){
    sendResponse(res,404, "Object Not Found", data)
}

module.exports = {INTERNALSERVERERROR,  NOTFOUNDEXCEPTION}


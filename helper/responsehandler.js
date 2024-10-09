
function sendResponse(res, status_code, message, data=null){
    
    res.status(status_code).send({msg:message, data:data})
}


function CREATEOBJECTRESPONSE(res,data){
    sendResponse(res,201, "Objecct created successfully", data)
}



function GETDATARESPONSE(res,data){
    sendResponse(res,200, "Data sent successfully", data)
}

function UPDATERESPONSE(res,data){
    sendResponse(res,200, "Data updated successfully", data)
}



function OBJECTDELETEDSUCCESS(res,data=null){
    sendResponse(res,200, "Object Deleted Successfully")
}

module.exports = {CREATEOBJECTRESPONSE, GETDATARESPONSE, UPDATERESPONSE, OBJECTDELETEDSUCCESS}
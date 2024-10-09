const {INTERNALSERVERERROR} = require("../helper/errorhandler")

function errorHandler(err, req, res, next) {
    console.error(err.stack);
    INTERNALSERVERERROR(res,err)
  }

  module.exports = {errorHandler}
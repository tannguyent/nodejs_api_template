
const httpStatus = require('http-status');
const APIException = require('../exceptions/APIException');

module.exports =  (req, res, next) => {
  next(new APIException(httpStatus.NOT_FOUND, 'Not found'));
};

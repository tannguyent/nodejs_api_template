const { 
  CreateUserValidation,
  GetAllUserValidation,
  GetUserValidation,
  UpdateUserValidation,
  DeleteUserValidation,
} = require ('./validation');


const GetAllUser = require('./GetAllUser');
const GetUser = require('./GetUser');
const CreateUser = require('./CreateUser');
const UpdateUser = require('./UpdateUser');
const DeleteUser = require('./DeleteUser');

module.exports = {
  GetAllUser,
  GetUser,
  CreateUser, 
  UpdateUser, 
  DeleteUser,
  CreateUserValidation,
  GetAllUserValidation,
  GetUserValidation,
  UpdateUserValidation,
  DeleteUserValidation,
};
  
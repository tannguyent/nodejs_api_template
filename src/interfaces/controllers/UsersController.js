const { Router } = require('express');
const { inject } = require('awilix-express');
const Status = require('http-status');

const HomeController = {
  get router() {
    const router = Router();

    router.get('/', this.index);
    
    return router;
  },

  index(req, res, next) {
    res
      .status(Status.OK)
      .json({'message': 'welcome to node api boilerplate'});
  },
};

module.exports = HomeController;

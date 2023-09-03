const express = require('express');  // Call Express js
const router = express.Router();  // Make Router Object From Express.js

// Import all controllers
const blogController = require('../controllers/blogController');
const blogDetailsController = require('../controllers/blogDetailsController');
const commentController = require('../controllers/commentController');
const portfolioController = require('../controllers/portfolioController');
const messageController = require('../controllers/messageController');
const productController = require('../controllers/productController');
const profitController = require('../controllers/profitController');
const projectController = require('../controllers/projectController');
const serviceController = require('../controllers/serviceController');
const titleController = require('../controllers/titleController');



// Route all requests to the appropriate controller
router.get("/blog/read", blogController.read);
router.get("/blog/create", blogController.create);
router.get("/blog/delete", blogController.delete);
router.get("/blog/update", blogController.update);

router.get("/blogDetails/read", blogDetailsController.read);
router.get("/blogDetails/create", blogDetailsController.create);
router.get("/blogDetails/delete", blogDetailsController.delete);
router.get("/blogDetails/update", blogDetailsController.update);

router.get("/comment/read", commentController.read);
router.get("/comment/create", commentController.create);
router.get("/comment/delete", commentController.delete);
router.get("/comment/update", commentController.update);

router.get("/message/read", messageController.read);
router.get("/message/create", messageController.create);
router.get("/message/delete", messageController.delete);
router.get("/message/update", messageController.update);

router.get("/portfolio/read", portfolioController.read);
router.get("/portfolio/create", portfolioController.create);
router.get("/portfolio/delete", portfolioController.delete);
router.get("/portfolio/update", portfolioController.update);

router.get("/product/read", productController.read);
router.get("/product/create", productController.create);
router.get("/product/delete", productController.delete);
router.get("/product/update", productController.update);

router.get("/profit/read", profitController.read);
router.get("/profit/create", profitController.create);
router.get("/profit/delete", profitController.delete);
router.get("/profit/update", profitController.update);

router.get("/project/read", projectController.read);
router.get("/project/create", projectController.create);
router.get("/project/delete", projectController.delete);
router.get("/project/update", projectController.update);

router.get("/service/read", serviceController.read);
router.get("/service/create", serviceController.create);
router.get("/service/delete", serviceController.delete);
router.get("/service/update", serviceController.update);

router.get("/title/read", titleController.read);
router.get("/title/create", titleController.create);
router.get("/title/delete", titleController.delete);
router.get("/title/update", titleController.update);



// Export Router
module.exports=router;

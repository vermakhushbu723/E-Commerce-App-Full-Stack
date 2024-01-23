import express  from "express";
const router=express.Router();
import ProduCtontroller from "./product.controller.js";

const produCtontroller=new ProduCtontroller();

router.get('/getAll',produCtontroller.getAllProduct);
router.get('/create',produCtontroller.addAllProduct);
router.get('/rate',produCtontroller.rateProduct);
router.get('/getOne',produCtontroller.getOneProduct);
router.get('/filter',produCtontroller.filterProduct);


export default router;
import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/About", homeController.getAboutPage);

    return app.use("/", router);
}
module.exports = initWebRoutes;
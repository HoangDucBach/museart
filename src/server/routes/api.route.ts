import express from "express";
import {authenticateToken} from "../middlewares/auth.middleware";
import {
    ArticleController,
    ArtworkController,
    ExhibitionController,
    ProductController
} from "../controllers/api.controller";

export const apiRouter = express.Router();
apiRouter.route("/*")
    .get(authenticateToken);
apiRouter.get('/artworks',(ArtworkController.getArtworks));
apiRouter.get('/artworks/:id',(ArtworkController.getArtwork));

apiRouter.get('/exhibitions', (ExhibitionController.getExhibitions));
apiRouter.get('/exhibitions/:id', (ExhibitionController.getExhibition));

apiRouter.get('/articles', (ArticleController.getArticles));
apiRouter.get('/articles/:id', (ArticleController.getArticle));

apiRouter.get('/products', (ProductController.getProducts));
apiRouter.get('/products/:id', (ProductController.getProduct));
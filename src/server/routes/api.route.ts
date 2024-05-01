import express from "express";
import {authenticateAdmin, authenticateToken} from "../middlewares/auth.middleware";
import {
    ArticleControllerInstance,
    ArtworkControllerInstance,
    ExhibitionControllerInstance, ProductControllerInstance
} from "../controllers/api.controller";
import {CartControllerInstance} from "../controllers/user.controller";

export const apiRouter = express.Router();
// apiRouter.route("/*")
//     .get(authenticateToken);
apiRouter.get('/artworks', (ArtworkControllerInstance.getAll));
apiRouter.get('/artworks/:id', (ArtworkControllerInstance.get));
apiRouter.put('/artworks/:id', authenticateAdmin, ArtworkControllerInstance.update);
apiRouter.delete('/artworks/:id', authenticateAdmin, ArtworkControllerInstance.delete);

apiRouter.get('/exhibitions', (ExhibitionControllerInstance.getAll));
apiRouter.get('/exhibitions/:id', (ExhibitionControllerInstance.get));
apiRouter.put('/exhibitions/:id', authenticateAdmin, ExhibitionControllerInstance.update);
apiRouter.delete('/exhibitions/:id', authenticateAdmin, ExhibitionControllerInstance.delete);

apiRouter.get('/articles', (ArticleControllerInstance.getAll));
apiRouter.get('/articles/:id', (ArticleControllerInstance.get));
apiRouter.put('/articles/:id', authenticateAdmin, ArticleControllerInstance.update);
apiRouter.delete('/articles/:id', authenticateAdmin, ArticleControllerInstance.delete);

apiRouter.get('/products', (ProductControllerInstance.getAll));
apiRouter.get('/products/:id', (ProductControllerInstance.get));
apiRouter.put('/products/:id', authenticateAdmin, ProductControllerInstance.update);
apiRouter.delete('/products/:id', authenticateAdmin, ProductControllerInstance.delete);



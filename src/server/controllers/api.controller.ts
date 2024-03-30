import {Request, Response, NextFunction} from "express";
import {Article, Artwork, Exhibition, Product, Sound} from "../models/api.model";
import {createQueryCondition} from "../models/helper.model";
import {IArgumentsController, IBaseController} from "./base.controller";

export class ArtworkController implements IBaseController {
    create(req: Request, res: Response, next: NextFunction): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const artworkId = req.params.id;
            Artwork.destroy({where: {'detail.id': artworkId}}).then(r => {
                res.status(200).json({message: 'Artwork deleted'});
            });
            res.status(200).json({message: 'Artwork deleted'});
        } catch (error) {
            res.status(500).json({error: 'Error deleting artwork'});
        }
    }

    async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const artworkId = req.params.id;
            const artwork = await Artwork.findAll({
                where: {'detail.id': artworkId},
            });
            if (artwork) {
                res.status(200).json(artwork);
            } else {
                res.status(404).json({message: 'Artwork not found'});
            }
        } catch (error) {
            res.status(500).json({error: 'Error getting artwork'});
        }
    }

    async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const queryConditions = createQueryCondition(req.query);
            const artworkId = req.params.id
            if (artworkId) {
                queryConditions.where = {'detail.id': artworkId};
            }
            const artworks = await Artwork.findAll(queryConditions);
            res.status(200).json(artworks);
        } catch (error) {
            res.status(500).json({error: 'Error getting artworks'});
        }

    }

    async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const artworkId = req.params.id;
            Artwork.update(req.body, {where: {'detail.id': artworkId}}).then(r => {
                res.status(200).json({message: 'Artwork updated'});
            });
            res.status(200).json({message: 'Artwork updated'});
        } catch (error) {
            res.status(500).json({error: 'Error updating artwork'});
        }
    }
}

export class ExhibitionController implements IBaseController {
    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        return Promise.resolve(undefined);
    }

    async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const exhibitionId = req.params.id;
            Exhibition.destroy({where: {'detail.id': exhibitionId}}).then(r => {
                res.status(200).json({message: 'Exhibition deleted'});
            });
            res.status(200).json({message: 'Exhibition deleted'});
        } catch (error) {
            res.status(500).json({error: 'Error deleting exhibition'});
        }
    }

    async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const queryConditions = createQueryCondition(req.query);
            const exhibitionId = req.params.id
            if (exhibitionId) {
                queryConditions.where = {'detail.id': exhibitionId};
            }
            const exhibitions = await Exhibition.findAll(queryConditions);
            res.status(200).json(exhibitions);
        } catch (error) {
            res.status(500).json({error: 'Error getting exhibitions'});
        }
    }

    async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const exhibitionId = req.params.id;
            const exhibition = await Exhibition.findAll({where: {'detail.id': exhibitionId}});
            if (exhibition) {
                res.status(200).json(exhibition);
            } else {
                res.status(404).json({message: 'Exhibition not found'});
            }
        } catch (error) {
            res.status(500).json({error: 'Error getting exhibition'});
        }
        return Promise.resolve(undefined);
        return Promise.resolve(undefined);
    }

    async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const exhibitionId = req.params.id;
            Exhibition.update(req.body, {where: {'detail.id': exhibitionId}}).then(r => {
                res.status(200).json({message: 'Exhibition updated'});
            });
            res.status(200).json({message: 'Exhibition updated'});
        } catch (error) {
            res.status(500).json({error: 'Error updating exhibition'});
        }
    }
}

export class ArticleController implements IBaseController {
    async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const queryConditions = createQueryCondition(req.query);
            const articleId = req.params.id
            if (articleId) {
                queryConditions.where = {'detail.id': articleId};
            }
            const articles = await Article.findAll(queryConditions);
            res.status(200).json(articles);
        } catch (error) {
            res.status(500).json({error: 'Error getting articles'});
        }
    }

    async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const articleId = req.params.id;
            const article = await Article.findAll({where: {'detail.id': articleId}});
            if (article) {
                res.status(200).json(article);
            } else {
                res.status(404).json({message: 'Article not found'});
            }
        } catch (error) {
            res.status(500).json({error: 'Error getting article'});
        }

    }

    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const articleId = req.params.id;
            Article.update(req.body, {where: {'detail.id': articleId}}).then(r => {
                res.status(200).json({message: 'Article updated'});
            });
            res.status(200).json({message: 'Article updated'});
        } catch (error) {
            res.status(500).json({error: 'Error updating article'});
        }
    }

    async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const articleId = req.params.id;
            Article.destroy({where: {'detail.id': articleId}}).then(r => {
                res.status(200).json({message: 'Article deleted'});
            });
            res.status(200).json({message: 'Article deleted'});
        } catch (error) {
            res.status(500).json({error: 'Error deleting article'});
        }
    }
}

export class ProductController implements IBaseController {
    async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const queryConditions = createQueryCondition(req.query);
            const productId = req.params.id
            if (productId) {
                queryConditions.where = {'detail.id': productId};
            }
            const products = await Product.findAll(queryConditions);
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({error: 'Error getting products'});
        }
    }
    async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const productId = req.params.id;
            const product = await Product.findAll({where: {'detail.id': productId}});
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({message: 'Product not found'});
            }
        } catch (error) {
            res.status(500).json({error: 'Error getting product'});
        }
    }

    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const productId = req.params.id;
            Product.update(req.body, {where: {'detail.id': productId}}).then(r => {
                res.status(200).json({message: 'Product updated'});
            });
        } catch (error) {
            res.status(500).json({error: 'Error updating product'});
        }
    }

    async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const productId = req.params.id;
            Product.destroy({where: {'detail.id': productId}}).then(r => {
                res.status(200).json({message: 'Product deleted'});
            });
        } catch (error) {
            res.status(500).json({error: 'Error deleting product'});
        }
    }
}

export const ArtworkControllerInstance = new ArtworkController();
export const ExhibitionControllerInstance = new ExhibitionController();
export const ArticleControllerInstance = new ArticleController();
export const ProductControllerInstance = new ProductController();

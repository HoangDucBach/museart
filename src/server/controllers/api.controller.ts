import {Request, Response, NextFunction} from "express";
import {Article, Artwork, Exhibition, Product, Sound} from "../models/api.model";
import {createQueryCondition} from "../models/helper.model";

export class ArtworkController {
    static async getArtworks(req: Request, res: Response, next: NextFunction) {
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

    static async getArtwork(req: Request, res: Response, next: NextFunction) {
        try {
            const artworkId = req.params.id;
            const artwork = await Artwork.findAll({where: {'detail.id': artworkId}});
            if (artwork) {
                res.status(200).json(artwork);
            } else {
                res.status(404).json({message: 'Artwork not found'});
            }
        } catch (error) {
            res.status(500).json({error: 'Error getting artwork'});
        }
    }
}

export class ExhibitionController {
    static async getExhibitions(req: Request, res: Response, next: NextFunction) {
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

    static async getExhibition(req: Request, res: Response, next: NextFunction) {
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
    }
}

export class ArticleController {
    static async getArticles(req: Request, res: Response, next: NextFunction) {
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

    static async getArticle(req: Request, res: Response, next: NextFunction) {
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

}
export class ProductController {
    static async getProducts(req: Request, res: Response, next: NextFunction) {
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

    static async getProduct(req: Request, res: Response, next: NextFunction) {
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
}

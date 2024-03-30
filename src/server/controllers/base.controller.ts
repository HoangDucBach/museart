import {Request, Response, NextFunction} from "express";

export interface IArgumentsController {
    req: Request;
    res: Response;
    next: NextFunction;
}

export interface IBaseController {
    get(req: Request, res: Response, next: NextFunction): Promise<void>;

    getAll(req: Request, res: Response, next: NextFunction): Promise<void>;

    create(req: Request, res: Response, next: NextFunction): Promise<void>;

    update(req: Request, res: Response, next: NextFunction): Promise<void>;

    delete(req: Request, res: Response, next: NextFunction): Promise<void>;

}
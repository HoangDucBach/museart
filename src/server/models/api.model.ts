import { DataTypes, Model } from 'sequelize';
import { sequelize } from './config.model';

interface BaseModelAttributes {
    id: number;
    detail: any;
}

class BaseModel extends Model<BaseModelAttributes> {
    public id!: number;
    public detail!: any;
}

BaseModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    detail: {
        type: DataTypes.JSON,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'base_models',
    timestamps: false
});

export class Artwork extends BaseModel {}
export class Exhibition extends BaseModel {}
export class Article extends BaseModel {}
export class Product extends BaseModel {}
export class Sound extends BaseModel {}
export class Image extends BaseModel {}
export class Video extends BaseModel {}

Artwork.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    detail: {
        type: DataTypes.JSON,
        allowNull: false
    }
}, { sequelize, modelName: 'artworks', timestamps: false });
Exhibition.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    detail: {
        type: DataTypes.JSON,
        allowNull: false
    }
}, { sequelize, modelName: 'exhibitions', timestamps: false });
Article.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    detail: {
        type: DataTypes.JSON,
        allowNull: false
    }
}, { sequelize, modelName: 'articles', timestamps: false });
Product.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    detail: {
        type: DataTypes.JSON,
        allowNull: false
    }
}, { sequelize, modelName: 'products', timestamps: false });
Sound.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    detail: {
        type: DataTypes.JSON,
        allowNull: false
    }
}, { sequelize, modelName: 'sounds', timestamps: false });
Image.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    detail: {
        type: DataTypes.JSON,
        allowNull: false
    }
}, { sequelize, modelName: 'images', timestamps: false });
Video.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    detail: {
        type: DataTypes.JSON,
        allowNull: false
    }
}, { sequelize, modelName: 'videos', timestamps: false });

sequelize.sync().then(r => console.log('Database synced')).catch(e => console.log(e));

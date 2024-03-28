import {DataTypes, Model} from 'sequelize';
import {sequelize} from "./config.model";

class BaseModel extends Model {
    public detail!: any;
}

class Artwork extends BaseModel {}
class Exhibition extends BaseModel {}
class Product extends BaseModel {}
class Sound extends BaseModel {}
class Image extends BaseModel {}
class Video extends BaseModel {}

Artwork.init({
}, {
    sequelize,
    modelName: 'artworks',
});

Exhibition.init({
}, {
    sequelize,
    modelName: 'exhibitions',
});

Product.init({
}, {
    sequelize,
    modelName: 'products',
});

Sound.init({
}, {
    sequelize,
    modelName: 'sounds',
});

Image.init({
}, {
    sequelize,
    modelName: 'images',
});

Video.init({
}, {
    sequelize,
    modelName: 'videos',
});

sequelize.sync().then(r => console.log('Database synced')).catch(e => console.log(e));

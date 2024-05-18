import {DataTypes, Model, Optional} from "sequelize";
import {sequelize} from "./config.model";
import { config } from "dotenv-flow";
import {AppConfig} from "../config";

config({node_env: AppConfig.NODE_ENV});

interface UserAttributes {
    id: number;
    username: string;
    email: string;
    password: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}
interface StatusAttributes {
    id: number;
    type: string;
    numberOfLikes: number;
    commentIds: number[];
    createdAt: Date;
    updatedAt: Date;
}

interface StatusCreationAttributes extends Optional<StatusAttributes, 'id'> {
}
interface CommentAttributes {
    id: number;
    userId: string;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
}

interface CommentCreationAttributes extends Optional<CommentAttributes, 'id'> {
}
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {
}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public username!: string;
    public email!: string;
    public password!: string;
    public role!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    // public readonly carts?: Cart[];
    // public readonly status?: Status[];
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    role: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'updated_at'
    },

}, {
    sequelize,
    modelName: 'users'
});

// Carts

interface CartAttributes {
    id: number;
    userId: number;
    productIds: string[];
    total: number;
    address: any;
    payMethod: string;
    createdAt: Date;
    updatedAt: Date;
}

interface CartCreationAttributes extends Optional<CartAttributes, 'id'> {
}

export class Cart extends Model<CartAttributes, CartCreationAttributes> implements CartAttributes {
    public id!: number;
    public userId!: number;
    public productIds!: string[];
    public total!: number;
    public address!: any;
    public payMethod!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Cart.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        },
        field: 'user_id'
    },
    productIds: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
        field: 'product_ids'
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    address: {
        type: DataTypes.JSONB,
        allowNull: false
    },
    payMethod: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'pay_method'
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'updated_at'
    }
}, {
    sequelize,
    modelName: 'carts'
});
export class Comment extends Model<CommentAttributes, CommentCreationAttributes> implements CommentAttributes {
    public id!: number;
    public userId!: string;
    public comment!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        },
        field: 'user_id'
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'updated_at'
    }
}, {
    sequelize,
    modelName: 'comments'
});
export class Status extends Model<StatusAttributes, StatusCreationAttributes> implements StatusAttributes {
    public id!: number;
    public type!: string;
    public numberOfLikes!: number;
    public commentIds!: number[];
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Status.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    type: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    numberOfLikes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'number_of_likes'
    },
    commentIds: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false,
        field: 'comment_ids'
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'updated_at'
    }
}, {
    sequelize,
    modelName: 'status',
    tableName: 'status'
});
// Relation
Cart.belongsTo(User, {foreignKey: 'userId'});
User.hasMany(Cart, {foreignKey: 'userId'});
Comment.belongsTo(User, {foreignKey: 'userId'});
User.hasMany(Comment, {foreignKey: 'userId'});
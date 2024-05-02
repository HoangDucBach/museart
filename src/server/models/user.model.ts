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
        type: DataTypes.ARRAY(DataTypes.TEXT),
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
Cart.belongsTo(User, {foreignKey: 'userId'});
User.hasMany(Cart, {foreignKey: 'userId'});
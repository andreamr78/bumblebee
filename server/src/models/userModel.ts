import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/db';

// Define the User model
class User extends Model {
    public id!: number;
    public username!: string;
    public email!: string;
    public password!: string;
}

// Initialize the User model by extending the Sequelize Model class
User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'User',
    timestamps: true,
});

export default User;
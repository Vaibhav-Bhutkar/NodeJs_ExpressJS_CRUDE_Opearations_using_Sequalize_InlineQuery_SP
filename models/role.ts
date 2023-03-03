'use strict';
import { userInfo } from 'os';
import { Model } from 'sequelize';

interface RoleAttributes {
  ID: number,
  Name: string,
  Description: string
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Role extends Model<RoleAttributes> implements RoleAttributes {
    ID!: number;
    Name!: string;
    Description!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here

    }
  };
  Role.init({
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    Description: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Role',
    freezeTableName: true,
    timestamps: true,
    updatedAt: 'UpdatedAt',
    createdAt: 'CreatedAt',
  });
  return Role;
};
const { DataTypes } = require("sequelize");
const { _sequelize } = require("@/infra/context");

const { InstituicaoModel } = require("@/models/instituicao/instituicaoModel");
const { TipoCursoModel } = require("@/models/tipo-curso/tipoCursoModel");

const CursoModel = _sequelize.define(
  "curso",
  {
    id_curso: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    tx_descricao: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  { tableName: "curso", createdAt: false, updatedAt: false }
);

InstituicaoModel.hasMany(CursoModel);
TipoCursoModel.hasMany(CursoModel);

module.exports = { CursoModel };

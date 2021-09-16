module.exports = (sequelize, DataTypes) => {
    let alias = "Movies";
    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title:{ 
            type:DataTypes.STRING(500),
            allowNull:false,
        },
        rating: {
            type: DataTypes.DECIMAL.UNSIGNED
        },
        awards:{
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        release_date: {
            type: DataTypes.DATE
        },
        length: {
            type:DataTypes.INTEGER(10).UNSIGNED
        },
        genre_id: {
            type: DataTypes.INTEGER(10).UNSIGNED
        }
    }
    
    let config = {
        tableName: "movies",
        timestamps: true
    }
    const Movie = sequelize.define(alias,cols,config)
    return Movie;
}
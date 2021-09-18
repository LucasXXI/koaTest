const { Model, Sequelize } = require('sequelize');

class User extends Model{
    static init(sequelize){
        super.init({
            name: Sequelize.STRING,
            age: Sequelize.INTEGER,
            email: Sequelize.STRING
        },{
            sequelize 
        });
    }
}
 
module.exports = User;
import {Sequelize} from 'sequelize'

const db = new Sequelize('reactdb', 'root', '',{
    host:'localhost',
    dialect: 'mysql'
})

export default db
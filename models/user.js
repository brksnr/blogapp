const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");
const bcrypt = require("bcrypt");


const User = sequelize.define("user", {
    fullname: {
        type: DataTypes.STRING,
        allownull: false,
        validate: {
            notEmpty: {
                msg: "Ad Soyad girmelisiniz!"
            },
            isFullName(value){
                if(value.split(" ").length < 2){
                    throw new Error("Lütfen ad ve soyad bilginizi giriniz!")
                }
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allownull: false,
        unique: {
            args: true,
            msg: "Email daha önce alınmış"
        },
        validate: {
            notEmpty: {
                msg: "Email adresi girmelisiniz!"
            },
            isEmail: {
                msg: "Geçerli bir formatta Email girmelisiniz."
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allownull: false,
        validate:{
            notEmpty: {
                msg: "Parola boş olamaz!"
            },
            len: {
                args: [5, 10],
                msg: "Parola 5 ila 10 karakter uzunluğunda olmalıdır!"
            }
        }
    }
}, {timestamps : true});

User.afterValidate( async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
});

module.exports = User;
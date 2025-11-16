const User = require("../models/user");
const bcrypt = require("bcrypt");
const emailService = require("../helpers/send-mail");
const config = require("../config");

exports.get_register = async function(req, res, next) {
    try {
        return res.render("auth/register", {
            title: "register"
        })
    }
    catch(err){
        next(err);
    }
}

exports.post_register = async function (req, res, next){
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    

    try{
        throw new Error("Hata oluştu!");
        await User.create({fullname: name, email: email, password: password});

        //  emailService.sendMail({
        //      from: config.email.from,
        //      to: newUser.email,
        //      subject: "Hesabınız oluşturuldu!",
        //      text: "Hesabınız başarılı şekilde oluşturuldu"
        //  })
        
        req.session.message = { text : "Hesabınıza giriş yapabilirsiniz!", class: "success"};
        return res.redirect("login");
    }
    catch(err){
        let msg = "";
        if(err.name == "SequelizeValidationError" || err.name == "SequelizeUniqueConstraintError"){
        for(let e of err.errors){
            msg += e.message + " "
        }
        return res.render("auth/register", {
            title: "register",
            message: {text: msg, class:"danger"}
        })
        } else {
            next(err);
        }
        
        
        
    }
}

exports.get_login = async function(req, res, next) {
    const message = req.session.message;
    delete req.session.message;
    try {
        return res.render("auth/login", {
            title: "login",
            message: message,
            csrfToken: req.csrfToken()
        })
    }
    catch(err){
        console.log(err);
        next(err);
    }
}

exports.get_logout = async function(req, res, next) {
    try {
        await req.session.destroy();
        return res.redirect("/account/login");
    }
    catch(err){
        console.log(err);
        next(err);
    }
}

exports.post_login = async function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;


    try {
        const user = await User.findOne({
            where: {
                email: email
            }
        })
        if(!user){
        return res.render("auth/login", {
        title: "login",
        message: {text : "Email hatalı!", class: "danger"}
        })
        }
        const match = await bcrypt.compare(password, user.password)
        if(match){
            const userRoles = await user.getRoles({
                attributes: ["rolename"],
                raw: true
            });
            req.session.roles = userRoles.map((role) => role["rolename"]); // ["admin" ,"moderator"]
            req.session.isAuth = true;
            req.session.fullname = user.fullname;
            req.session.userid = user.id;

            const url = req.query.returnUrl || "/";
            return res.redirect(url); 
        } 
        return res.render("auth/login", {
        title: "login",
        message: {text : "Parola hatalı!", class: "danger"}
        })
    }
    catch(err){
        console.log(err);
        next(err);
    }
}


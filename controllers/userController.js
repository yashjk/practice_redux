const User = require("../models/user");

function createUser(req , res , next){
    User.create(req.body , (err , user) =>{
        if (err) return next(err);
        res.status(200).json( { user } );
    })
}

function findUserList( req , res , next) {
    User.find( {} , ( err , users) =>{
        if(err) return next(err);
        res.status(200).json( {users } );
    });
}


function deleteUser( req , res , next ) {
    const id = req.params.id;
    User.findByIdAndDelete( id , ( err , user) => {
        res.status(200).json( { user } );
    })
}


function updateUser( req , res , next ) {
    cosnt id = req.params.id;
    User.findByIdAndUpdate( id , req.body , { new : true} , ( err , user) => {
        if ( err ) return  next( err );
        res.status( 200 ).json( { user } );
    })
}

module.exports = { createUser , findUserList ,updateUser , deleteUser }
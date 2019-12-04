const router = require('express').Router();
const fs = require('fs');
const path = require('path');

    router.route('/proses').post((req,res) => {
    if(req.files){
        let img = req.files.gambar
        let path = "./public/images/" + img.name

        img.mv(path,(err) => {
            if(err){
                console.log(err);
            }else{
                let nama = req.body.nama
                let hobi = req.body.hobi

                res.send(`nama saya adalah '${nama}' dan hobi saya adalah '${hobi}' <br> <img src="../images/${img.name}">`)
            }
        })
    }
});



module.exports = router;
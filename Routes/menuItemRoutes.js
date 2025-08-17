const express = require('express');
const router = express.Router();
const MenuItem = require('../Menu')

router.post('/' ,async (req,res)=>{
    try{
        const data =req.body
        const newMenu = new MenuItem(data);
        const response =  await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server Error'});
    }
})
//get
router.get('/',async(req,res)=>{
    try{
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(arr){
        console.log(arr);
        res.status(500).json({error:'Internal Server Eror'});

    }
})

module.exports=router
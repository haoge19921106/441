var express=require("express");
var router=express.Router();
router.use("/ajax",function(reg,res){
    var data=[
        {name:"啊三",phone:"13312345678",en:"a"},
        {name:"白四",phone:"13312345678",en:"b"},
        {name:"蔡五",phone:"13312345678",en:"c"},
        {name:"邓六",phone:"13312345678",en:"d"},
        {name:"二七",phone:"13312345678",en:"e"},
        {name:"范八",phone:"13312345678",en:"f"},
        {name:"郭九",phone:"13312345678",en:"g"},
        {name:"胡十",phone:"13312345678",en:"h"},
        {name:"啊三",phone:"13312345678",en:"i"},
        {name:"姜四",phone:"13312345678",en:"j"},
        {name:"康五",phone:"13312345678",en:"k"},
        {name:"老六",phone:"13312345678",en:"l"},
        {name:"马七",phone:"13312345678",en:"m"},
        {name:"女八",phone:"13312345678",en:"n"},
        {name:"哦九",phone:"13312345678",en:"o"},
        {name:"彭十",phone:"13312345678",en:"p"},
        {name:"强三",phone:"13312345678",en:"q"},
        {name:"任四",phone:"13312345678",en:"r"},
        {name:"申五",phone:"13312345678",en:"s"},
        {name:"谭六",phone:"13312345678",en:"t"},
        {name:"有七",phone:"13312345678",en:"u"},
        {name:"为八",phone:"13312345678",en:"v"},
        {name:"王九",phone:"13312345678",en:"w"},
        {name:"许十",phone:"13312345678",en:"x"},
        {name:"杨九",phone:"13312345678",en:"y"},
        {name:"张十",phone:"13312345678",en:"z"},
    ]
    res.send(JSON.stringify(data));
})
module.exports=router;
function addUser(req,res,next){
        const body=req.body
        const {sex,fullname,address}=body
        console.log(fullname,sex,address)
        res.send('<h1>Successfully accepted your request</h1>')
};

module.exports={addUser}
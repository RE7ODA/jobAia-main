const jobPostModel = require('../../../DB/models/JobPost.model')
class search{
    static searchFun = async (req,res)=>{
        try{
            const result = await jobPostModel.find({$or:[
                {jobTitle:{$regex:req.params.key,$options:'i'}},
                {CompanyName:{$regex:req.params.key,$options:'i'}},
                {jobType:{$regex:req.params.key,$options:'i'}}
            ]})
            if(result === 0) return res.status(404),send({apiStatus:false,data:{},message:"job not found"})
                res.status(200).send({apiStatus:true,data:result,message:'Job Found'})
        }
        catch(e){
            res.status(500).send({apiStatus:false,data:e.message,message:"error in search"})
        }
    }
}
module.exports = search
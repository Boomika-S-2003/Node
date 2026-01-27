export const showData=async(req,res)=>{

    console.log(req.body);

    const {practice,sub}=req.body

    if(practice==='own'&&sub==="express.js"){
        await res.status(201).json({practice,sub})
    }
    else{
        res.status(404).json({messege:'this is wrong'})
    }
    
}
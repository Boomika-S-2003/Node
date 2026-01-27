export const showMessege=async(req,res)=>{
    console.log(req.body);

    const{name,backend}=req.body

    if (name==='react'){
        await res.status(200).json({name})}
    else{
        res.status(404).json({messege:'this is not a crt name'})
    
    }

    

}
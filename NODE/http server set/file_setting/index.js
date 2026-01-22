import http from "http"
import fs from 'fs'

const index=http.createServer()

// fs.readFile('data.txt','utf-8',(err,data)=>{
//     if (err){
//         console.log(err);}
//         else{
//             console.log("file data is:",data);
            
//         }
        
//         })


// fs.writeFile('data2.txt','this is the data for i write in data 2 file',(err)=>{
//     if(err){
//         console.log(err);
        
//     }
//     else{
//         console.log('file created sucessfully');
        
//     }

// } )


fs.appendFile('data2.txt','this is modified text',(err)=>{
    if(err){
        console.log(err);
        
    }
    else{
        console.log('modified succesfully');
        
    }
})


index.listen(5000,()=>{
    console.log("successfull set");
    
})
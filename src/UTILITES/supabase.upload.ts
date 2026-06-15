import {supabase} from './supbase.config.js';
import {randomUUID} from "crypto"
const uploadFile = async (file:Express.Multer.File) => {
    
     
          const fileName = `${randomUUID()}-${file.originalname}`;
        const {data, error} = await supabase.storage.from('NOTES').upload(fileName, file.buffer,{
            upsert: false,
            contentType: file.mimetype
        });
        
        if(error){
            console.log("Error uploading file to Supabase Storage:", error);
            return null;
        }
        return data.path;



    
}

export { uploadFile };
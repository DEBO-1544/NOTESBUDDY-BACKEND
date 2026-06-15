import {supabase} from "./supbase.config.js";

const UploadedUrl=async(file :any)=>{

    const {data}=  await supabase.storage.from('NOTES').getPublicUrl(file);

    return data.publicUrl;


}
export {UploadedUrl}
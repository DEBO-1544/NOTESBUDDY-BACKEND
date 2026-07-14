import {supabase} from "./supbase.config.ts";

const UploadedUrl=async(file :any)=>{

    const {data}=  await supabase.storage.from('NOTES').getPublicUrl(file);

    return data.publicUrl;


}
export {UploadedUrl}
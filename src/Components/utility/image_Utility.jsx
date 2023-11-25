import axios from 'axios';
const photoUpload_key = "6f81d3831efbbc74472fc167375b90fb";
export  const imageUpload = async image => {
  const formData=new FormData()
  formData.append("image",image )
  const {data}=await axios.post(
   `https://api.imgbb.com/1/upload?key=${photoUpload_key}`,formData
  )
  return data;
};


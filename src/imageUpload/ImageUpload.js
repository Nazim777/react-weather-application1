import React,{useState} from 'react'
import axios from 'axios'

const ImageUpload = () => {
    const [image, setimage] = useState('')
    const handleChange=(e)=>{
        setimage(e.target.files)
    }
   // console.log(image)
    const handleSubmit=()=>{
        const url='' // url will be there
        const formData= new formData() // image data will be there
        formData.append('image', image)
        axios.post(url,formData).then((res)=>{
            console.log(res)
        }) 
    }
  return (
    <div className='container'>
        <input type="file" onChange={handleChange} />
        <button type='submit' className='btn btn-info' onClick={handleSubmit}>Submit</button>
      
    </div>
  )
}

export default ImageUpload

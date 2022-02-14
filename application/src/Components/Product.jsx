import React, {useState} from 'react'
import { ProductInput } from './ProductInput'

export const Product = () => {
    const [formData, setFormData] = useState({});
  return (
    <div>
        <ProductInput formData={formData} setFormData={setFormData}/>
        
    </div>
  )
}

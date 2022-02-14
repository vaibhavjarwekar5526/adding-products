import React from 'react'
//import styled from 'styled-components';

export const ProductInput = ({formData, setFormData}) => {
    

    const onChangeHandle = (e) => {
        let {name, value} = e.currentTarget;

        setFormData({
            ...formData,
            [name] : value
        });
    }

    const updateData = (e) => {
        e.preventDefault();
        let payload = {
            title: formData.title,
            cost: formData.cost,
            image: formData.image,
            category: formData.category
        }
        fetch("http://localhost:3000/posts", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((err) => console.log(err));
        
    }
  return (
    <div>
        <h1>Product Input</h1>
        <form>
            <div>
                <label>Title:</label>
                <input type="text" name="title" value={formData.title} onChange={onChangeHandle} />
            </div>
            <div>
                <label>Cost:</label>
                <input type="text" name="cost" value={formData.cost} onChange={onChangeHandle} />
            </div>
            <div>
                <label>Image:</label>
                <input type="text" name="image" value={formData.image} onChange={onChangeHandle} />
            </div>
            <div>
                <label>Category:</label>
                <input type="text" name="category" value={formData.category} onChange={onChangeHandle} />
            </div>
            <div>
                <input type="submit" value="Submit" onClick={updateData}/>
            </div>
        </form>
    </div>
  )
}

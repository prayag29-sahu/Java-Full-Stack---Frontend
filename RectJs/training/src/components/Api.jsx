import React, { useEffect, useState } from 'react'

const Api = () => {
    let [apiData, SetData] = useState([])
    useEffect(() => {
        fetch("https://dummyjson.com/recipes").then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data.recipes);
            SetData(data.recipes)
        })
    }, []);

    function handleDelete(item) {
        console.log(item);
        let newarray = apiData.filter((a, b) => {
            return b !== item
        })
        SetData(newarray)
    }
    return (
        <div>
            {apiData.map((a, index) => {
                return (
                    <>
                        <div id="card">
                            <img src={a.image} />
                            <p>{a.name}</p>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Api
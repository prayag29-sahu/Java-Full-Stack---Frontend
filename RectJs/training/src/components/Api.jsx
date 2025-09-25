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
    })
    return (
        <div>
            {apiData.map((a) => {
                return (
                    <>
                        <div id="card">
                            <img src={a.image} />
                            <p>{a.name}</p>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Api
import React, { useState, useEffect } from 'react'
import './gallary.css';

const WallGallary = () => {
  const [data, setData] = useState([])

  const [expand, setExpand] = useState(" ");

  useEffect(() => {
    fetch('http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0')
      .then((res) => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <>
      <h1 className="main-heading">Click on image for expand</h1>
      <div className="container">
        {
          data.map((item) => {
            return (
              <div className="img-item" key={item.id}>

                {
                  expand === item.id ?
                    <img
                      src={item.urls.small}
                      alt={item.alt_description}
                    />
                    : <img
                      src={item.urls.thumb}
                      alt={item.alt_description}
                      onClick={() => setExpand(item.id)}
                    />
                }
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default WallGallary

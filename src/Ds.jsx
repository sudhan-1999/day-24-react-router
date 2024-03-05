import React from 'react'

function Ds() {
  const data=[{
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-1536x804.webp',
    des:'12 Real-World Data Science Examples: Power Of Data Science',
    credit:'By Lukesh S'
  },{
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/01/paper-analysis-2-1536x1024.jpg',
    des:'How to become a Data Scientist after Mechanical Engineering?',
    credit:'By Lahari Chandana'
  },{
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-1536x804.webp',
    des:'Top 10 High Paying Non-Coding Jobs in Data Science in 2024',
    credit:'By Isha Sharma'
  }]
  return (
    <div className="container">
      <div className="row">
        {data.map((e, index) => {
          return (
            <div className="col-lg-4" key={index}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={e.img} className="card-img-top" alt="Data Science..." />
                <div className="card-body">
                  <h5 className="card-title">{e.des}</h5>
                  <p className="card-text">{e.credit}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Ds
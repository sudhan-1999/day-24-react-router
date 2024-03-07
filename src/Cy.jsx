import React from 'react'

function Cy() {
  const cyber=[{
    img:'	https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-600x314.png',
    des:'Cybersecurity Vs Ethical Hacking: Top 10 Differences',
    credit:'By Tushar Vinocha'
  },{
    img:'https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif',
    des:'Non-Coding Jobs in Cybersecurity: A Comprehensive Guide',
    credit:'By Jaishree Tomar'
  },{
    img:'https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif',
    des:'8 Different Types of Cybersecurity and Threats Involved',
    credit:'By Tushar Vinocha'
  }]
  return (
    <div style={{"margin":"50px"}}> 
    <div className='container'>
      <div className='row'>
        {cyber.map((e,index)=>{
          return(
            <div className='col-lg-4' key={index}>
              <div className="card" style={{ width: "18rem" ,height:"20rem" }}>
                <img src={e.img} className="card-img-top" alt="Data Science..." />
                <div className="card-body">
                  <h5 className="card-title">{e.des}</h5>
                  <p className="card-text">{e.credit}</p>
                </div>
          </div> 
            </div>
          )
        }
        )
      }
      </div>
    </div>
    </div>
  )
}

export default Cy;
import React from "react";

function Fsd() {
  const fullstack = [
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html-1200x801.jpg",
      des: "Best Full-Stack Development Project Ideas in 2024 ",
      credit: "By Isha Sharma ",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2021/09/Full-Stack-Developer-course-syllabus.png",
      des: "Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024 [U... ",
      credit: "By Archana",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html-1200x801.jpg",
      des: "How Long Would It Take to Be a Full Stack Developer? ",
      credit: "By Meghana",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        {fullstack.map((e, index) => {
          return (
            <div className="col-lg-4" key={index}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={e.img} className="card-img-top" alt="Full Stack Development..." />
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
  );
}

export default Fsd;

import React from "react";


export default function PageTeacher() {
  const user = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {

//     const {data}= await
//     axios
//     .post(`http://localhost:8000/teacherData/findDataById`, {
//         userId: us
//     })
//     .then((res)=>{
//         console.log(res.data);

//     })
// }, []);
  return (
    <>
      <br />
      <div className="container border rounded-1 p-5">
        <div className="row align-items-center">
          <div className="col">
            <figure>
              <h6 className="display-6">המורה {user.userName}</h6><br/>
              <figcaption class="blockquote-footer">
                {/* עיר מגורים */}
              </figcaption>
            </figure>
          </div>
        </div>
        <br />

        <div className="container">
          <div className="row">
            <div className="col">
              <div className="container">
                <div className="row">
                  <br />
                  <p className="lead fw-normal">קצת עליי</p>
                  <p>//////////</p>
                  <br />
                  <p className="lead fw-normal">תחומי לימוד</p>
                  <p>//////////</p>
                  <br />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="container">
                <div className="row">
                  <p className="lead fw-normal">פרטי התקשרות</p>
                  <p>טלפון ליצירת קשר: {user.phone}</p>
                  <p>כתובת א-מייל: {user.mail}</p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

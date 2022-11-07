import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function Sign() {
    const navigate=useNavigate()
  const [article, setarticle] = useState({ name: "", email: "", password: "" });
  
  const handleSignUp = async(e) => {
          e.preventDefault();
          const response = await fetch(
            "http://localhost:5000/api/auth/creatuser",
            {
              method: "POST",
      
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: article.email,
                password: article.password,
                name: article.name,
              }),
            }
          );
          const json = await response.json();
          console.log(json);
          if(json.success){
            localStorage.setItem('token',json.authtoken)
            navigate("/")
        }
        else{
          alert('type a valid email please')
        }
  };
  const onChange = (e) => {
    setarticle({ ...article, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="name"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter your name"
            name="name"
            onChange={onChange}
            minLength={3}
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            onChange={onChange}
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            onChange={onChange}
            minLength={6}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Sign;

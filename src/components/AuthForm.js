import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
const AuthForm = () => {
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [isloggin, setLoggin] = useState(false);
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(null);
  function changeLogginFun(e) {
    e.preventDefault();
    setLoggin((prev) => {
      return !prev;
    });
  }
  function userAuthntication(e) {
    e.preventDefault();
    if (isloggin) {
    } else {
      setloading(true);
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAoKVBtv4adgpg6dWlO3FNtEW2brYblq3Y",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: phone,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        setloading(false);
        if (res.ok) {
        } else {
          res.json().then((data) => {
            let errormessage = "Authentication failed";
            if (data && data.error && data.error.code) {
              errormessage = data.error.message;
            }
            seterr(errormessage);
          });
        }
      });
    }
  }

  return (
    <>
      <section id="LoginForm">
        {err ? (
          <div>
            <Alert key={"danger"} variant={"danger"}>
              {err}
            </Alert>
          </div>
        ) : null}
        <div className="loginform-styling">
          <h2>{isloggin ? "Login" : "Signup"}</h2>
          <Form id="formstyling-form" onSubmit={userAuthntication}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Id</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone No.</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => {
                  setphone(e.target.value);
                }}
              />
            </Form.Group>
            {loading && <p>Sending request...</p>}
            {!loading && (
              <Button variant="primary" type="submit">
                {isloggin ? "Login" : "Signup"}
              </Button>
            )}
          </Form>
          <div className="goLink-auth">
            <Button variant="primary" type="submit" onClick={changeLogginFun}>
              {isloggin ? "Go to signup page" : "Go to loggin page"}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
export default AuthForm;

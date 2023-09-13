import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CreateContext from "../store/create-context";
import { useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();
  const [password, setpassword] = useState("");
  const createContext = useContext(CreateContext);
  async function ForgetPassword() {
    let response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAoKVBtv4adgpg6dWlO3FNtEW2brYblq3Y",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: createContext.token,
          password: password,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    response = await response.json();
    if (response) history.replace("/store");
  }
  return (
    <>
      <section>
        <div className="home-album">
          <h1>Your User Profile</h1>
          <h2>New Password</h2>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Control
              type="text"
              placeholder="Enter password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </Form.Group>

          <Button className="primary" onClick={ForgetPassword}>
            Change Password
          </Button>
        </div>
      </section>
    </>
  );
};
export default Home;

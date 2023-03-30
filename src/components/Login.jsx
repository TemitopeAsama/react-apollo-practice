import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    login: true,
    name: "",
    email: "",
    password: "",
  });

  return (
    <div>
      <h4 className="mv3">{formState.login ? "Login" : "Sign Up"}</h4>
      <div className="flex flex-column">
        {!formstate.login && (
          <>
            <input
              value={formState.name}
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
              type="text"
              placeholder="Your name"
            />
          </>
        )}
        <input
          value={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
          type="text"
          placeholder="Your email address"
        />
        <input
          value={formState.password}
          onChange={(e) =>
            setFormState({ ...formState, password: e.target.value })
          }
          type="text"
          placeholder="Choose a safe password"
        />
      </div>

      <div className="flex mt3">
        <button className="pointer mr2 button">
          {formState.login ? "Login" : "Create Account"}
        </button>
        <button
          className="button pointer"
          onClick={(e) =>
            setFormState({
              ...formState,
              login: !formState.login,
            })
          }
        >
          {formState.login
            ? "Need to create an account?"
            : "Already have an account?"}
        </button>
      </div>
    </div>
  );
};

export default Login;

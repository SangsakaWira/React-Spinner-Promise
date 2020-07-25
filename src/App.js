import React, { useState } from "react";
import { Spinner, Row, Container } from "react-bootstrap";
import "./styles.css";
import axios from "axios";
import { render } from "react-dom";

export default function App() {
  let [text, setText] = useState("Hello");
  let [isLoading, setLoading] = useState(false);

  // USING CALLBACK
  const getFirstNameCallback = callback => {
    let nama = "Sangsaka";
    setTimeout(() => {
      callback(nama);
    }, 1000);
  };

  // USING PROMISE
  const getFirstNamePromise = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Wira");
      }, 1000);
    });
  };

  const getSecondNamePromise = input => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Utama");
      }, 1000);
    });
  };

  // USING SYNC PROCESS
  const getFirstName = () => {
    let nama = "Sangsaka";
    setTimeout(() => {
      return nama;
    }, 1000);
  };

  const fetchItems = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/todos/1")
          .then(result => {
            resolve(result.data);
          });
      }, 2500);
    });
  };

  const login = async () => {
    setLoading(true);
    const response = await fetchItems();
    setLoading(false);
    console.log(response);
    setText(response.title);
  };

  const render = () => {
    if (isLoading) {
      return (
        <div>
          <Spinner
            animation="border"
            role="status"
            style={{ marginTop: "5px" }}
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      );
    } else {
      return <h1>{text}</h1>;
    }
  };

  return (
    <Container style={{ textAlign: "center" }}>
      <h1>Hello CodeSandbox</h1>
      <button onClick={login}>Mantap!</button>
      {render()}
    </Container>
  );
}

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const contact = () => {
  const [count, setcount] = useState(0);
  const increment = () => {
    setcount(count + 1);
  };
  const [name, setname] = useState("your name");
  const set = (e) => {
    const newname = e.target.value;
    setname(newname);
  };
  const [cat, setcat] = useState("");

  const generate = () => {
    axios.get("https://catfact.ninja/fact?max_length=100").then((res) => {
      setcat(res.data.fact);
    });
  };

  const [yourname, nameset] = useState("");
  const [age, setAge] = useState(0);

  const AgeGenerate = () => {
    axios.get(`https://api.agify.io/?name=${yourname}`).then((res) => {
      setAge(res.data.age);
    });
  };

  return (
    <div className=" mt-8 lg:ml-52  ml-15 pt-6">
      <br />
      <div className="flex flex-row space-x-10">
        <div>
          <label htmlFor="input">name : </label>
          <input
            type="text"
            placeholder="enter your name"
            className="border rounded-md border-black"
            onChange={set}
          />
        </div>
        <div>
          <p>you are typing : {name}</p>
        </div>
      </div>
      <br />
      <button
        onClick={generate}
        className="bg-slate-400 rounded-lg right-2 p-2"
      >
        Generate cat facts{" "}
      </button>
      <span className="m-2"> :{cat}</span>
      <br />
      <br />
      <label htmlFor="age"> Name :</label>
      <input
        type="text"
        placeholder="......enter name"
        onChange={(e) => {
          nameset(e.target.value);
        }}
        className="m-2 rounded border border-black"
      />
      <button
        onClick={AgeGenerate}
        className="bg-slate-400 rounded-lg right-2 p-2"
      >
        Generate Age{" "}
      </button>
      <br />
      <br />
      <span className="m-6">age is :{age}</span>
      <br /> <br />
    </div>
  );
};

export default contact;

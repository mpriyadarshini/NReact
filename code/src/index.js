import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";

const container = React.createElement(
  "div",
  {
    id: "container",
    className: "title",
  },
  [
    React.createElement(
      "h1",
      {
        style: { color: "red" },
        key: "header1",
      },
      "Im a header1"
    ),
    React.createElement(
      "h2",
      {
        style: { color: "red" },
        key: "header2",
      },
      "Im a header2"
    ),
    React.createElement(
      "h3",
      {
        style: { color: "red" },
        key: "header3",
      },
      "Im a header3"
    ),
  ]
);

const container2 = (
  <div>
    <h1>Header 1</h1>
    <h1>Header 2</h1>
    <h1>Header 3</h1>
  </div>
);




const burgerKing = {
  name:"Burger King",
  image:"https://static.dezeen.com/uploads/2021/01/burger-king-logo-rebrand-bk-jkr_logo_dezeen_2364_col_0.jpg",
  cuisines:["Burger","American"],
  rating:"4.2"
}









const AppLayout = () => {
  return(
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
  )
}

const HeaderComponentLogo = () => {
  return (
    <div className="header">
      <div>
        {" "}
        <img src="./image/icon.png"></img>
      </div>
      <div>
        {" "}
        <input type="text"></input>
      </div>
      <div>
        {" "}
        <img src="./image/user.png"></img>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(container)//for createElement
// root.render(container2)//for JSX Element
// root.render(<HeaderComponent/>)//for functional component

//create a header component from scratch using functional components with
root.render(<AppLayout />); //for functional component

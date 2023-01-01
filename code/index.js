import React from "react";
import ReactDOM from "react-dom/client";

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
)

const HeaderComponent = () => {
    return(
        <div>
            <h1>Header 1</h1>
            <h1>Header 2</h1>
            <h1>Header 3</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container)//for createElement
root.render(container2)//for JSX Element
root.render(<HeaderComponent/>)//for functional component
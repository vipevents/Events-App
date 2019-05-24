let i1 = document.getElementById("input-1");
let i2 = document.getElementById("input-2");
let submit = document.getElementById("submit");
let modal = document.getElementById("remove");
let cards = [
  {
    i1: "hi sdfsdfsd sfdsdf sfd sdf sdf",
    i2: "hello"
  },

  {
    i1: "hi sdfsdfsd sfdsdf sfd sdf sdf",
    i2: "hello"
  },

  {
    i1: "hi sdfsdfsd sfdsdf sfd sdf sdf",
    i2: "hello"
  },

  {
    i1: "hi sdfsdfsd sfdsdf sfd sdf sdf",
    i2: "hello"
  },

  {
    i1: "hi sdfsdfsd sfdsdf sfd sdf sdf",
    i2: "hello"
  },

  {
    i1: "hi sdfsdfsd sfdsdf sfd sdf sdf",
    i2: "hello"
  },

  {
    i1: "hi sdfsdfsd sfdsdf sfd sdf sdf",
    i2: "hello"
  },

  {
    i1: "hi sdfsdfsd sfdsdf sfd sdf sdf",
    i2: "hello"
  }
];

let cardMap = cards.map(e => {
  let text = "hi";
  var h = document.createElement("div");
  var hi = document.createElement("h1");
  // Create a <h1> element
  var t = document.createTextNode(
    `Date: ${e.i1}  Description of event: ${e.i2}`
  ); // Create a text node
  h.appendChild(t);
  document
    .getElementById("output")
    .appendChild(h)
    .classList.add("hey");
});

submit.addEventListener("click", () => {
  e = {
    i1: `${i1.value}`,
    i2: `${i2.value}`,
    id: 1
  };
  console.log(e.i1, e.i2);
  cards.push(e);
  let last = cards.slice(-1)[0];
  var h = document.createElement("div");
  var hi = document.createElement("h1");
  var button = document.createElement("hbutton");
  var t = document.createTextNode(`Date: ${last.i1}  Description: ${last.i2}`); // Create a text node
  h.appendChild(t);
  document
    .getElementById("output")
    .appendChild(h)
    .classList.add("hey");

  // Create a <h1> element
});

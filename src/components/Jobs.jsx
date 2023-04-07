import React, { Fragment } from "react";

function FriendLy(props) {

  var people = props.people;

  var peopleItem = people.map(function (person) {

    var friendlyStyle = {
      display: 'inline-block',
      margin: 20,
      marginLeft:100,
      height: 260,
      width: 500,
      padding: 0,
      backgroundColor: "#FFF",
      WebkitFilter: "drop-shadow(0px 0px 5px #555)",
      filter: "drop-shadow(0px 0px 5px #555)"
    };
    return <div style={friendlyStyle}>
      <Avatar img={person.img} name={person.name} />
      {/* <UserName name={person.name} /> */}
      <Details details={person.details} type={person.type} pay={person.pay} posted={person.posted} />
      <Apply />
    </div>
  });
  return (
    <div>{peopleItem}</div>
  );
}

function Avatar(props) {
  var avatarStyle = {
    marginLeft: 20,
    marginTop: 30,
    color: "#5f9ea0"
  }
  return (
    <i className={props.img} aria-hidden="true" style={avatarStyle}>  {props.name} </i>
  );
}

let Details = (props) => {
  var nameStyle = {
    fontSize: 16,
    fontFamily: "Courier-prime",
    fontWeight: "bold",
    paddingLeft:30
  }
  var pStyle = {
    fontSize: 16,
    fontFamily: "Courier-prime",
    paddingLeft:30,
    paddingTop:20,
    fontWeight: "bold",
  }
  return (
    <div>
      <p style={pStyle}>Type:&nbsp;&nbsp; {props.type}</p>
      <p style={nameStyle}>Pay: &nbsp;&nbsp; {props.pay}</p>
      <p style={nameStyle}>Posted:&nbsp;&nbsp; {props.posted}</p>
    </div>
  );
}

let Apply = () => {
  let buttonStyle = {
    color:"white",
    backgroundColor:"#5f9ea0",
    marginLeft:400
  }
  let buttonStyle1 = {

  }
  return (
    <button style={buttonStyle} type="submit" >Apply</button>
  );
}

function Jobs() {
  var people = [{ name: "Content writer", img: "fa fa-briefcase fa-3x", type: "Part Time", pay: "20$ per hour", posted: "Today" },
  { name: "Blog topic creater", img: "fa fa-briefcase fa-3x", type: "Internship", pay: "30$", posted: "5 Days Ago"  },
  { name: "SEO marketing", img: "fa fa-briefcase fa-3x", type: "Full Time", pay: "40$", posted: "A Week Ago" },
  { name: "Email marketing", img: "fa fa-briefcase fa-3x", type: "Part Time", pay: "28$", posted: "1 day ago" }
  
  ];
  return (
    <FriendLy people={people} />
  );
}

export default Jobs;

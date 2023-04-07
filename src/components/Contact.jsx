import React from "react";

function FriendLy(props) {
      
    var people = props.people;
    
    var peopleItem = people.map(function(person) {
      
      var friendlyStyle = {
        display: 'inline-block',
        margin: 80,
        height: 300,
        width: 300,
        padding: 0,
        backgroundColor: "#FFF",
        WebkitFilter: "drop-shadow(0px 0px 5px #555)",
        filter: "drop-shadow(0px 0px 5px #555)"
      };
        return <div style={friendlyStyle}>
          <Avatar img={person.img}/>
          <UserName name={person.name}/>
          <Details details={person.details}/>
        </div>
    });
    return(
      <div>{peopleItem}</div>
    );
  }

  function Avatar(props) {
    var avatarStyle = {
      marginLeft: 120,
      marginTop: 50,
      color: "lightblue"
    }
    return(
        <i className={props.img} aria-hidden="true" style={avatarStyle}></i>
    );
  }

  function UserName(props) {
    var nameStyle = {
      fontSize: 24,
      textAlign: "center",
      fontFamily: "Arial, Helvetica, sans-serif",
      margin: 20,
      color:"#5f9ea0"
    }
    return(
      <h1 style={nameStyle}>{props.name}</h1>
    );
  }

  function Details(props) {
    var nameStyle = {
      fontSize: 18,
      textAlign: "center",
      fontFamily: "Courier-prime"
    }
    return(
      <h1 style={nameStyle}>{props.details}</h1>
    );
  }

   

  function Contact(){
    var people = [{name: "Email", img:"fa fa-envelope fa-4x", details:"rachagiri.h@northeastern.edu"},
    {name: "Mobile", img: "fa fa-phone fa-4x", details:"8609380339"},
    {name: "Address", img: "fa fa-map fa-4x", details:"75 Saint Alphonsus #509, Boston, MA"},
    ];
      return(
          <FriendLy people={people}/>
      );
  }

export default Contact;

import React from "react";

function FriendLy(props) {
      
    var people = props.people;
    
    var peopleItem = people.map(function(person) {
      
      var friendlyStyle = {
        display: 'inline-block',
        margin:20,
        height: 170,
        width: 1300,
        backgroundColor: "#FFF",
        WebkitFilter: "drop-shadow(0px 0px 5px #555)",
        filter: "drop-shadow(0px 0px 5px #555)"
      };
        return <div style={friendlyStyle}>
          <Details details={person.details} des = {person.des}/>
          <Details1 details={person.details} des = {person.des}/>
        </div>
    });
    return(
      <div>{peopleItem}</div>
    );
  }

  

  function Details(props) {
    var nameStyle = {
      fontSize: 18,
      textAlign: "left",
      margin:20,
      fontWeight:"bold",
      fontFamily: "Courier-prime"
    }
    return(
      <h1 style={nameStyle}>{props.details}</h1>
    );
  }
  function Details1(props) {
    var nameStyle = {
      fontSize: 18,
      textAlign: "left",
      margin:15,
      fontFamily: "Courier-prime"
    }
    return(
      <p style={nameStyle}>{props.des}</p>
    );
  }

   let white = () => {
     return(
      <div>
      <p>
      Sometimes in life, you should travel a long way, to find out what is near you. 
      It took me a journey miles away to realize this.
      And I started visualizing what I would say to my weird little thirteen-year-old self.  
      Here’s the letter to my thirteen-year-old self who thought clearing an entrance exam can change her life,
      little did she know that a test has nothing to do with changing lives.  
      Dear Harsha, I wish I could meet you and reassure you that life has not even begun yet. 
      There is much more waiting for you, what everything you are worrying about now will be so insignificant one day.
      </p>
      </div>
     );
   }

   let black = () => {
    return(
     <div>
     <p>
     And to write this article, I went through a few blogs and videos trying to get a hook on writing my experiences 
     from a bustling, all too familiar life in India to a country I had only seen in movies and sitcoms. 
     It’s hard to put it in words or talk about it in a nuanced way. Three months in Boston and it’s crazy how fast time flies.
     This is not, however, a tutorial session but they're maybe a few tips hidden along the way for anyone who is thinking of the move, never having been to the US before.
     Hope you love, reading it… The flight was long, but I was quickly distracted by the note cards written by my brother. 
     He wrote, “Happiness is a Choice. None can take away that from you.       
     

     </p>
     </div>
    );
  }

  let grey = () => {
    return(
     <div>
     <p>
     Droplets as clear as glass, heaven that says "I'm sending love". Sounds of pitter-patter all over, 
     The memories you bring, Of puddles splashed in as children. Hot cocoa waiting for... Petrichor penetrating the heart's core
    , Yes! Summer shower it is. 
     </p>
     </div>
    );
  }
  
  function About(){
    var people = [{name: "Email", img:"fa fa-envelope fa-4x", details:" Dear Me!", des:white()},
    {name: "Mobile", img: "fa fa-phone fa-4x", details:"An Initial fix", des:black()},
    {name: "Address", img: "fa fa-map fa-4x", details:"Pluviophile", des:grey()},
    ];
      return(
          <FriendLy people={people}/>
      );
  }

export default About;

import React from "react";

function Home() {
  var imageStyle = {
    height: 300,
    weight: 300
  }
  var people = [{ details: "rachagiri.h@northeastern.edu" }];
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://www.pngkit.com/png/detail/262-2620612_free-old-pen-png-writing-a-letter-png.png"
              alt=""
              style={imageStyle}
            />
          </div>
          <FriendLy people={people} />
        </div>
      </div>
    </div>
  );
}

function FriendLy(props) {

  var people = props.people;

  var peopleItem = people.map(function (person) {

    var friendlyStyle = {
      display: 'inline-block',
      
      height: 300,
      width: 470,
      backgroundColor: "#FFF",
      WebkitFilter: "drop-shadow(0px 0px 5px #555)",
      filter: "drop-shadow(0px 0px 5px #555)"
    };
    return <div style={friendlyStyle}>
      <Details details={person.details} />
    </div>
  });
  return (
    <div>{peopleItem}</div>
  );
}

function Details(props) {
  var nameStyle = {
    fontSize: 18,
    fontFamily: "Courier-prime",
    margin:8
  }
  return (
    // <h1 style={nameStyle}>{props.details}</h1>
    <div style={nameStyle}>
      <h1 class="font-weight-solid">I Write....
And then, we communicate!</h1>
      <p>
      I am super excited to start my writing journey. 
      Blogging is such an amazing way to express me to the fullest. 
      My name is Harsha vardhani and I live in Boston. Since the age of 10, I've been fascinated by writing.
       And here I am today, check listing one of my bucket goals. 
       I hope my blog posts give you some inspiration(handy tips) for better chaos in life. Happy reading!
      </p>
    </div>
  );
}


export default Home;

// (function() {

//   console.log("working");
//   var x=document.getElementById("demo");

//    function showPosition(position)
//      {
//       console.log("hihi");
//      x.innerHTML="Latitude: " + position.coords.latitude + 
//      "<br>Longitude: " + position.coords.longitude; 
//      }

//  if (navigator.geolocation) {

//       console.log("we have geolocation");
//     navigator.geolocation.getCurrentPosition(showPosition);
//       console.log("function returned");

//   }

//   else{
//     x.innerHTML="Geolocation is not supported by this browser.";
//   }


// })();

var x=document.getElementById("demo");
function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  else{x.innerHTML="Geolocation is not supported by this browser.";}
  }
function showPosition(position)
  {
  x.innerHTML="Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;  
  }

  (function(){getLocation()
  })();
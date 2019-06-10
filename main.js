// Write your JavaScript code here!

var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];
  
// We're going to solve this by breaking the problem into three parts.
// Programmers like automating things, we'll populate the HTML drop down options using code,
// instead of having to type out all the values.
// Create a function that does the some math and gives us the new weight.
// Then create a function that responds when the user clicks on the button.

// 1. Populate the dropdown element with the data found in the planets array.
// The value of each option should be the planet's name.
// Use the following built-in methods:
// `.forEach` `document.createElement` `document.getElementById` `.appendChild`
//option.innerHTML = element[0];

//var select = document.getElementById("planets")
//console.log(select)
planets.forEach(function(element) {
   var select = document.getElementById("planets")
    let option = document.createElement("OPTION")
txt = document.createTextNode(element[0]);
option.appendChild(txt);
//option.setAttribute("value",element[1]);
select.insertBefore(option,select.lastChild);
});  
function calculateWeight(weight, planetName) {
  var userWeight = document.getElementById("user-weight").value;
  var planetName = document.getElementById("planets").selectedIndex-1;
  var planet_gravity = planets[planetName][1];
  return userWeight * planet_gravity;

};
// function calculateWeight(weight, planetName) {
//     // 2. Write the code to return the correct weight

//     var correctWeight = weight * planetName;
//     // return correctWeight;
//   }
  
  function handleClickEvent(e) {
    // 3. Create a variable called userWeight and assign the value of the user's weight.
      var userWeight = document.getElementById("user-weight").value;
      console.log(userWeight);
    // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
    var planetName = document.getElementById("planets").value;
    
      console.log(planetName);
    // 5. Create a variable called result and assign the value of the new calculated weight.
      var result = calculateWeight(userWeight,planetName);
      console.log(result);
      planetName =  $("#planets option:selected").text();
    // 6. Write code to display the message shown in the screenshot.
    document.getElementById("output").innerHTML = "If you were on " + planetName + ", you would weigh " + result + "lbs!";
    // console.log('If you were on ' + planetName + ', you would weigh ' + result + "lbs!");  
    // //return result;
  }

  // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
  $('#calculate-button').click(function(){
    //Some code
    handleClickEvent();
    //console.log('This is the correct weight!');
});


  // Bonus Challenges
  // 8. Reverse the drop down order so that the sun is first.
  // 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)



  //things to try
  //will need to do the for loop to iterate through calculateWeight e.g. if (userWeight == planetName[i][1])
  //change end of userWeight on Line 50 to .value -- THIS ALSO RETURNS CORRECT WEIGHT INPUTTED
  //add in onclick part for handleClickEvent for HTML -- THIS MADE THE CALCULATION BUTTON WORK!
// select.onclick = handleClickEvent();{alert('Welcome to the Astra Weight Calculator!');};   

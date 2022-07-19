// True or False Quiz
// var tfImageR = {
//   tfPassed: "https://horizontalwireline.com/wp-content/uploads/2019/03/Congratulations.png",
//   tfFailed: "https://www.urdesignmag.com/wordpress/wp-content/uploads/2020/04/12-simple-ways-to-practise-sustainability-in-everyday-life-1200x520.jpg"
//   }

var tfButton = $('.tf-submit-button');
var tfResult = $('.tf-quiz-result');
// var tfQuizPic = $('.tf-quiz-pic');
var fact1 = $('.TF1');
var fact2 = $('.TF2');
var fact3 = $('.TF3');
var fact4 = $('.TF4');
var fact5 = $('.TF5');
var fact6 = $('.TF6');

tfButton.on('click', tfQuiz);

function tfQuiz(event) {
  event.preventDefault();

  var q1 = $('.TF1 option:selected').val();
  console.log("Q1: " + q1);
  var q2 = $('.TF2 option:selected').val();
  console.log("Q2: " + q2);
  var q3 = $('.TF3 option:selected').val();
  console.log("Q3: " + q3);
  var q4 = $('.TF4 option:selected').val();
  console.log("Q4: " + q4);
  var q5 = $('.TF5 option:selected').val();
  console.log("Q5: " + q5);
  var q6 = $('.TF6 option:selected').val();
  console.log("Q6: " + q6);
  var passed = false;

  if (q1 === "False1" && q2 === "True2" && q3 === "True3" && q4 === "False4" && q5 === "False5" && q6 === "True6") {

    passed = true;
  }

  fact1.val("");
  fact2.val("");
  fact3.val("");
  fact4.val("");
  fact5.val("");
  fact6.val("");
console.log(passed);
var container = $('.tf-image-container');

  if (passed) {
    tfResult.text('Congrats, you passed! Move to the What Do You Know page to take the next quiz😄');
    // container.append(`<img src="https://horizontalwireline.com/wp-content/uploads/2019/03/Congratulations.png">`);
    // tfQuizPic.attr('src', tfImageR.tfPassed); <= refers to our 'tfImageR' object 
  } else {
    tfResult.text(`Unfortunately, you did not pass. Maybe try again😥`);
    // container.append(`<img src= "https://www.urdesignmag.com/wordpress/wp-content/uploads/2020/04/12-simple-ways-to-practise-sustainability-in-everyday-life-1200x520.jpg">`);
    // tfQuizPic.attr('img', tfImageR.tfFailed) ;<= refers to our 'tfImageR' object 
  }
}



//What Do You Know Quiz JS

var scoreImage = {
  didPass: "https://i2.wp.com/www.circularonline.co.uk/wp-content/uploads/2020/10/sustainability.png?w=1000&ssl=1",
  didNotPass: "https://www.urdesignmag.com/wordpress/wp-content/uploads/2020/04/12-simple-ways-to-practise-sustainability-in-everyday-life-1200x520.jpg"
}

var button = $('.submit-btn');
var result = $('.quiz-result');
var quizPic = $('.quiz-pic');
var oneInput = $('.money-select');
var twoInput = $('.enviro-select');
var threeInput = $('.women-select');
var fourInput = $('.emission-select');
var fiveInput = $('.landfill-select');
var sixInput = $('.pounds-select');

button.on('click', quizResult);

function quizResult(event) {
  event.preventDefault();

  var questionOne = $('.money-select option:selected').val();
  var questionTwo = $('.enviro-select option:selected').val();
  var questionThree = $('.women-select option:selected').val();
  var questionFour = $('.emission-select option:selected').val();
  var questionFive = $('.landfill-select option:selected').val();
  var questionSix = $('.pounds-select option:selected').val();
  var userPassed = false;

  if (questionOne === "500 billion" && questionTwo === "they pollute water and land" && questionThree === "one in three" && questionFour === "8 percent" && questionFive === "three out of five" && questionSix === "81") {
    userPassed = true;
  }

  oneInput.val("");
  twoInput.val("");
  threeInput.val("");
  fourInput.val("");
  fiveInput.val("");
  sixInput.val("");

  if (userPassed) {
    result.text(`Your Result: Congratulations! You passed! Remember to dress green <3`);
    quizPic.attr('src', scoreImage.didPass);
  } else {
    result.text(`Your Result: Unfortunately, you did not pass, but keep on trying! You got this <3`);
    quizPic.attr('src', scoreImage.didNotPass);
  }
}



AOS.init();
/* Skill Cards */

const skillcards = document.querySelector(".skillcards");

// Array of object for projects
const projects = [
  {
    title: "Java Script",
    cardImage: "assets/images/javascript.png",
  },
  {
    title: "React",
    cardImage: "assets/images/react.png",
  },
  {
    title: "Angular",
    cardImage: "assets/images/angular.jpg",
  },
  {
    title: "HTML",
    cardImage: "assets/images/html.png",
  },
  {
    title: "CSS",
    cardImage: "assets/images/css.png",
  },
  {
    title: "Typescript",
    cardImage: "assets/images/typescript.jpeg",
  },
  {
    title: "Node.js",
    cardImage: "assets/images/node-js.png",
  },
  {
    title: "Microsoft SQL Server",
    cardImage: "assets/images/sql-server.png",
  },
  {
    title: "Git",
    cardImage: "assets/images/git.png",
  },
  {
    title: "Android App Development",
    cardImage: "assets/images/android.png",
  },
  {
    title: "Python",
    cardImage: "assets/images/python.jpg",
  },
  {
    title: "Java",
    cardImage: "assets/images/java.jpeg",
  },
];

// function for rendering skill cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage,description, Previewlink, Githublink }) => {
    output += `       
    <div class="column skill-card card" 
     style="margin: 5px; margin-bottom: 200px; width: 300px; height: 150px;" 
     data-aos="zoom-in-up" 
     data-aos-easing="linear" 
     data-aos-delay="300" 
     data-aos-duration="600">
  <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat; height: 100%;">
    <div class="header" style="height: 20%;"></div>
    <div class="data" style="height: 80%; display: flex; align-items: center; justify-content: center;">
      <div class="content" style="padding: 5px;">
        <div class="title-div">
          <h1 class="title" style="font-size: 20px; margin: 0;"><a href="#" style="text-decoration: none;">${title}</a></h1>
        </div>
      </div>
    </div>
  </div>
</div>

`;
  });
  skillcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all skill cards, and hide those which don't match the search query
  for (i = 0; i < skillcard.length; i++) {
    if (
      title[i].textContent.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}

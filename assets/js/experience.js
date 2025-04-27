AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Graduate Student Assistant",
    cardImage: "assets/images/experience-page/msu.png",
    place: "Montana State University",
    time: "(Aug, 2024 - May 2025)",
    desp: "<li>Delivered hands-on instruction in Node.js, React, Java, Python, and SQL to over 100 students, emphasizing full-stack development principles and best practices, resulting in a 20% boost in project outcome.</li><li> Designed and implemented 40+ coding exercises that simulated real world scenarios, including API integrations and full stack web applications, to enhance problem solving and development skills.</li><li>Mentored students on real-world projects involving front-end design, back-end logic, and database architecture, with 75% of mentees securing entry-level developer roles.</li>",
  },
  {
    title: "Senior Software Developer",
    cardImage: "assets/images/experience-page/hexagon.png",
    place: "Hexagon",
    time: "(Nov, 2021 - Aug 2023)",
    desp: "<li>Developed a responsive Project Management Web Application by leveraging React for the front-end, Node.js for the back-end, and Microsoft SQL for the database, ensuring a seamless and responsive user experience.</li> <li>As an Associate, I had the opportunity to engage with clients, gather requirements, and actively contribute to the development of key functionalities.</li> <li>My involvement spanned the entire Software Development Lifecycle (SDLC), providing exposure to Agile methodologies, specifically Scrum.</li><li>Gained hands-on experience with SQL Server, React, version control, and Node.js, contributing to a diverse skill set.</li>",
  },
  {
    title: "Software Engineer Intern",
    cardImage: "assets/images/experience-page/hexagon.png",
    place: "Hexagon",
    time: "(May, 2021 - Nov, 2021)",
    desp: "<li>Contributed to the development of Hexagon's legacy application using Xalt Mobility, an in-house tool, and Microsoft SQL.</li><li>Identified gaps in the Xalt Mobility web application development tool and actively contributed to product enhancements, particularly for the Black Pearl project.</li><li>Designed and created a robust, stable, and highly scalable application, delivering excellent performance.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Pat on the back team award",
    cardImage: "assets/images/experience-page/POB.png",
    description:
      "Part of a team recognized for outstanding collaboration and project success at Hexagon",
  },
  {
    title: "Individual Award",
    cardImage: "assets/images/experience-page/image.png",
    description:
      "Recognized for outstanding performance, and dedication to project success at Hexagon",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Smart India Hackathon 2020",
    subtitle: "Finalist",
    image: "assets/images/experience-page/SIH.png",
    desp: "SIH is a nationwide initiative to provide students with a platform to solve some of the pressing problems we face in our daily lives, and thus inculcate a culture of product innovation and a mindset of problem-solving.I participated and presented my project",
    href: "https://media.licdn.com/dms/document/media/v2/C561FAQHLIJuiumh4aQ/feedshare-document-pdf-analyzed/feedshare-document-pdf-analyzed/0/1621197822449?e=1746662400&v=beta&t=pkKV3AoPwOIcER8Ur9-Zby_ou1IoMLlNlOA5VWNi1fw",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);

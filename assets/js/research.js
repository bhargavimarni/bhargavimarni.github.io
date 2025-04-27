/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "A Unique Framework for Contactless Estimation of Body Vital Signs using Facial Recognition",
    authors:
      "M. Bhanu Sridhar, Bhargavi Marni, Sai Himaja Kinthada",
    conferences:
      "International Journal of Computer Science and Mobile Computing",
    researchYr: 2021,
    citebox: "ResearchGate",
    image: "assets/images/faceRecognition.png",
    citation: {
      vancouver:
        "M. Bhanu Sridhar, Bhargavi Marni, Sai Himaja Kinthada.A Unique Framework for Contactless Estimation of Body Vital Signs using Facial Recognition.",
    },
    abstract:
      "As one of the consequences of COVID-19 pandemic, a lot of new technologies are developing in fast-track pace in clinical practices. The main idea of our project is to design contactless technology for the support of patients who suffer from blood pressure disorders and coronary heart diseases using machine learning approach. This may intend people to monitor their heart rate, pulse rate, respiratory life and oxygen saturation levels at an ease. The orientation of this paper is to monitor the blood pressure considering the facial changes and movements in a video to get rid of cuff-based measurement of blood pressure. We analyzed whether blood pressure can be obtained in a contactless way utilizing a novel technologies like image processing and machine learning techniques. This innovation estimates vague facial blood stream changes from video recordings captured by camera with the help of machine learning and image processing techniques.",
    absbox: "absPopup1",
    pdfLink: "https://ijcsmc.com/docs/papers/December2021/V10I12202104.pdf"
  },
];

AOS.init();

const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
      pdfLink
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract cite-btn" type="button" data-pdf="${pdfLink}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
  
  // Add event listeners to all cite buttons
  document.querySelectorAll('.cite-btn').forEach(button => {
    button.addEventListener('click', function() {
      const pdfUrl = this.getAttribute('data-pdf');
      if (pdfUrl) {
        window.open(pdfUrl, '_blank');
      }
    });
  });
};

document.addEventListener("DOMContentLoaded", fillData);
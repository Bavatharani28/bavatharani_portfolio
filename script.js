// Typing Effect

const roles = [
    "Full Stack Developer",
    "Java Backend Developer",
    "UI/UX Designer",
    "Problem Solver"
];


let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;


function typeEffect(){


    const typingElement = document.getElementById("typing");

    const currentRole = roles[roleIndex];


    if(!isDeleting){


        typingElement.textContent =
        currentRole.substring(0,charIndex++);


        if(charIndex > currentRole.length){

            isDeleting = true;

            setTimeout(typeEffect,1500);

            return;

        }


    }

    else{


        typingElement.textContent =
        currentRole.substring(0,charIndex--);



        if(charIndex < 0){

            isDeleting=false;

            roleIndex++;

            if(roleIndex >= roles.length){

                roleIndex=0;

            }

        }


    }


    setTimeout(typeEffect,100);


}


typeEffect();




// Scroll Animation


let sections=document.querySelectorAll(".section");


window.addEventListener("scroll",()=>{


sections.forEach(section=>{


let position=section.getBoundingClientRect().top;


if(position < window.innerHeight-100){

section.classList.add("show");

}


});


});
const modal = document.getElementById("projectModal");
const closeBtn = document.querySelector(".close");

function openModal(project){

    const title = document.getElementById("modalTitle");
    const description = document.getElementById("modalDescription");
    const features = document.getElementById("modalFeatures");

    features.innerHTML = "";

    if(project==="snackspot"){

        title.innerHTML="🍔 SnackSpot";

        description.innerHTML=
        "A Full Stack Food Ordering Application built using React, Spring Boot and MySQL.";

        const list=[
            "User Authentication",
            "Food Search",
            "Shopping Cart",
            "Admin Dashboard"
        ];

        list.forEach(item=>{
            features.innerHTML += `<li>${item}</li>`;
        });

    }

    if(project==="agri"){

        title.innerHTML="🌱 AgriConnect";

        description.innerHTML=
        "Smart Agricultural Resource Management Platform.";

        const list=[
            "Farmer Module",
            "Worker Module",
            "Machine Booking",
            "Resource Discovery"
        ];

        list.forEach(item=>{
            features.innerHTML += `<li>${item}</li>`;
        });

    }

    if(project==="placement"){

        title.innerHTML="🎓 Placement Management System";

        description.innerHTML=
        "MERN based Placement Automation System.";

        const list=[
            "Student Portal",
            "Company Portal",
            "Admin Dashboard",
            "Placement Tracking"
        ];

        list.forEach(item=>{
            features.innerHTML += `<li>${item}</li>`;
        });

    }

    modal.style.display="block";

}

closeBtn.onclick=function(){

    modal.style.display="none";

}

window.onclick=function(event){

    if(event.target==modal){

        modal.style.display="none";

    }

}

function openModal(project){
    const modal=document.getElementById("modal");
    const title=document.getElementById("modal-title");
    const text=document.getElementById("modal-text");

    modal.style.display="block";

    if(project==="snackspot"){
        title.innerText="SnackSpot";
        text.innerText="SnackSpot is a full-stack food ordering web application developed using React, Spring Boot and MySQL. Users can browse foods, search, add items to cart and place orders. Admin can manage menu dynamically.";
    }

    if(project==="agri"){
        title.innerText="AgriConnect";
        text.innerText="AgriConnect connects farmers with workers, machine owners and service providers. It enables smart resource discovery and booking for agricultural needs.";
    }
}

function closeModal(){
    document.getElementById("modal").style.display="none";
}
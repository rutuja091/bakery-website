const eventDate = new Date('2024-06-15T00:00:00+05:30');
function updateCountdown() {
  const currentDate = new Date();
  const difference = eventDate - currentDate;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
updateCountdown();
setInterval(updateCountdown, 1000);



function description(name){
    let oneDescription=document.getElementById("package-card-description-Black-Cocoa-Cake");
    let twoDescription=document.getElementById("package-card-description-Bourbon-Bundt-Cake");
    let threeDescription=document.getElementById("package-card-description-Jeera-Biscuit")
    oneDescription.classList.remove("display-property");

    if(name==1){
      oneDescription.classList.remove("display-property");
      twoDescription.classList.add("display-property");
      threeDescription.classList.add("display-property");
    }
    else if(name==2){
      oneDescription.classList.add("display-property");
      twoDescription.classList.remove("display-property");
      threeDescription.classList.add("display-property");
    }
    else if(name==3){
      oneDescription.classList.add("display-property");
      twoDescription.classList.add("display-property");
      threeDescription.classList.remove("display-property");
    }
  }



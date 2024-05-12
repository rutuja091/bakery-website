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
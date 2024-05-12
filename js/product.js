
   
           function changeimage(b)
            {
                const flavour = document.getElementById('choco2');
                const price =  document.getElementById('price');
                let quantity = document.getElementById("order");
                let total = document.getElementById("total");
                if(b=='Warao Chocolate')
                {
                flavour.src = '.\..\images\product\product-1.jpg';
                price.innerText ='only at ₹120/-'

                }
                else if(b=='Choco berry')
                 {
                     flavour.src = '..\images\about\first-img.jpg';
                     price.innerText ='only at ₹170/-'
                     total.innerText=`at ₹${quantity * price}`;
                 }
                 else if(b=='Creamy Cream')
                 {
                     flavour.src = './../imgs/product-card/choco4.png';
                     price.innerText ='only at ₹265/-'
                     total.innerText=`at ₹${quantity * price}`;
                 }
                 else if(b=='Chocolate wafer')
                 {
                     flavour.src = './../imgs/product-card/chocolate wafer.png ';
                     price.innerText ='only at ₹250/-'
                     total.innerText=`at ₹${quantity * price}`;
                 }
                 else if(b=='Creamy Strawberry')
                 {
                     flavour.src = './../imgs/product-card/Creamy Strawberry.png';
                     price.innerText ='only at ₹160/-'
                     total.innerText=`at ₹${quantity * price}`;
                 }
                 else if(b=='Cookies-Dough')
                 {
                     flavour.src ="./../imgs/product-card/Cookies-Dough1.png";
                     price.innerText ='only at ₹145/-'
                     total.innerText=`at ₹${quantity * price}`;
                 }
                 else if(b=='Milk Shake')
                 {
                     flavour.src = './../imgs/product-card/Milk Shake.png';
                     price.innerText ='only at ₹160/-'
                     total.innerText=`at ₹${quantity * price}`;
                 }
                 else if(b=='Choco Cream2')
                 {
                     flavour.src = './../imgs/product-card/Choco-Cream2.png';
                     price.innerText ='only at ₹210/-'
                     total.innerText=`at ₹${quantity * price}`;
                 }
                 const choice=document.getElementById("name");
     
     choice.innerText=`\n ${b}`; 
         }
         function icecream(){
            alert("Thank you for visit our shop..! Price:₹40/-Creamy ice-cream");
         }
         function store(){
            alert("awesome")

         }
         function ice(state){
            const choose = document.getElementById("colors");
            choose.src=`/imgs/product-card/Ice-${state}.png`;
           
         }
         function Choco(state){
            const choose = document.getElementById("themes");
            choose.src=`./../imgs/product-card/Choco-Cream${state}.png`;
           
         }
         function Cookies(state){
            const choose = document.getElementById("dough");
            choose.src=`./../imgs/product-card/Cookies-Dough${state}.png`;
           
         }


        
         function inc(){
            let quantity = parseInt(one.innerText);
            if(quantity<10){
              one.innerText = ++quantity;
            }
            else{

                alert("Can't cart more than this")
            }
            settotalamout(quantity);
            totalamt(quantity*price);
        }
        function dec(){
            let quantity = parseInt(one.innerText);
            if(quantity>1){
                one.innerText = --quantity;
            }
            else{
                alert("Not less than one quantity!")
            }
            settotalamout(quantity);
        }
        function  settotalamout(quantity){
            order.innerText = `You order ${quantity} products`;
            total.innerText = `at ₹${quantity * 139} /-`;
           }

           var btnvar1 = document.getElementById("btnh1");
           function Toggle1(){
            if (btnvar1.style.color =="red"){
                btnvar1.style.color = "grey";
                alert("deleted from wishlist!");
              
            }
            else{
                alert("added in wishlist!");
                btnvar1.style.color = "red"
               
            }
           
            
           }

           

         
     
           
        
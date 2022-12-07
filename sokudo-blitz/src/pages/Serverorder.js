import React, { Component, useState, useEffect} from 'react';
import {ToggleButtonGroup} from 'react';
import Items from "./Items";
import "./ServerGUI.css";
const temp_data = [];



var order_summary = [];
var temp_array = [];
var obj;
var Display_Order = [];

export default function Serverorder() {

    let component
    const [items_data, setItems] = useState(false);
    useEffect(() => {
        getItems();
    }, []);
    function getItems() {
        fetch('http://localhost:3001/items')
          .then(response => {
            return response.text();
          })
          .then(data => {
            setItems(data);
          });
    }

    function updateInventory(curr_inv, item_id) {
      fetch('http://localhost:3001/inventory_update', {
        method: 'POST',
        headers: {  
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({curr_inv, item_id}),
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          alert(data);
        });
    }


    function getCurrInv(item_id) {
      console.log(item_id);
      fetch('http://localhost:3001/curr_inv',{
        method: 'GET',
        headers: {  
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({item_id}),
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          alert(data);
        });
    }
    
    const [toggle, setToggle] = useState(true)

    console.log(obj);

    obj = JSON.parse(items_data);

    switch (window.location.pathname) {

      
        default: 
          component = <Items/>
          //return <Login/>;
          break
      }


      var content=  document.getElementById("content");
      var Price = document.getElementById("price");

      var stringorder= order_summary.toString();
      var stringprice= 0;
      var stringdislayorder = Display_Order.toString();
      var stringpricee= "";
    const handleTaco = (e)=>{
        if (order_summary.length == 0){

        }else{
        }
        if (document.getElementById("Tacoo").style.backgroundColor!= "grey"){
          document.getElementById("Tacoo").style.backgroundColor="grey";
  
        }else {
          document.getElementById("Tacoo").style.backgroundColor="white";

        }


    }
    const handleBurrito = (e)=>{
    //   alert("Taco")
      if (order_summary.length == 0){
      }else{
      } 

      if (document.getElementById("Burrito").style.backgroundColor!= "grey"){
        document.getElementById("Burrito").style.backgroundColor="grey";

      }else {
        document.getElementById("Burrito").style.backgroundColor="white";

      }




    }
    const handleSalad = (e)=>{
      if (order_summary.length == 0){
      }else{
      }

  if (document.getElementById("Salad").style.backgroundColor!= "grey"){
          document.getElementById("Salad").style.backgroundColor="grey";
  
        }else {
          document.getElementById("Salad").style.backgroundColor="white";

        }
    }
    const handleBowl = (e)=>{
      if (order_summary.length == 0){
      }else{
      }
      if (document.getElementById("Bowl").style.backgroundColor!= "grey"){
        document.getElementById("Bowl").style.backgroundColor="grey";

      }else {
        document.getElementById("Bowl").style.backgroundColor="white";

      }
    }
    const handleDrink= (e)=>{
      if (order_summary.length == 0){


      }else{

      }
        if (document.getElementById("Drink").style.backgroundColor!= "grey"){
          document.getElementById("Drink").style.backgroundColor="grey";
  
        }else {
          document.getElementById("Drink").style.backgroundColor="white";

        }

    }
    const handleChips_and_Salsa= (e)=>{
      if (order_summary.length == 0){
      }else{



      }
      if (document.getElementById("Chips and Salsa").style.backgroundColor!= "grey"){
        document.getElementById("Chips and Salsa").style.backgroundColor="grey";

      }else {
        document.getElementById("Chips and Salsa").style.backgroundColor="white";

      }

    }
    const handleChips_and_Queso= (e)=>{
      if (order_summary.length == 0){

      }else{
     

      }

      if (document.getElementById("Chips and Queso").style.backgroundColor!= "grey"){
        document.getElementById("Chips and Queso").style.backgroundColor="grey";

      }else {
        document.getElementById("Chips and Queso").style.backgroundColor="white";

      }

    }
    const handleChips_and_Guac= (e)=>{
      if (order_summary.length == 0){

      }else{
      }

      if (document.getElementById("Chips and Guac").style.backgroundColor!= "grey"){
        document.getElementById("Chips and Guac").style.backgroundColor="grey";

      }else {
        document.getElementById("Chips and Guac").style.backgroundColor="white";

      }
      
      //  Display_Order.push("Chips & Guac");
    }




    const FinishOrder = (e)=>{




      //TODO add query to add thing in transaction history.

      for(var i = 0; i < order_summary.length; i++){
        if(order_summary[i] == ", Chips&Guac" || order_summary[i] == "Chips&Guac"){
          let inventory = getCurrInv(17);
          console.log(inventory);
          updateInventory(inventory-.5, 17);
        }
        if(order_summary[i] == ", Chips&Queso" || order_summary[i] == "Chips&Queso"){
          
        }
        if(order_summary[i] == ", Chips&Salsa" || order_summary[i] == "Chips&Salsa"){
          
        }
        if(order_summary[i] == ", Burrito" || order_summary[i] == "Burrito"){
          
        }
        if(order_summary[i] == ", Bowl" || order_summary[i] == "Bowl"){
          
        }
        if(order_summary[i] == ", Salad" || order_summary[i] == "Salad"){
          
        }
        if(order_summary[i] == ", Taco" || order_summary[i] == "Taco"){
          
        }
        if(order_summary[i] == "Beef"){
          
        }
        if(order_summary[i] == "Steak"){
          
        }
        if(order_summary[i] == "Medley"){
          
        }
        if(order_summary[i] == "Chicken"){
          
        }
        if(order_summary[i] == "Cheese"){
          
        }
        if(order_summary[i] == "Beans"){
          
        }
        if(order_summary[i] == "Rice"){
          
        }
        if(order_summary[i] == "Salsa"){
          
        }
        if(order_summary[i] == "SourCream"){
          
        }
        if(order_summary[i] == "Guac"){
          
        }
        if(order_summary[i] == "Queso"){
          
        }
        


      }


      document.getElementById("Tacoo").style.backgroundColor= "white";
      document.getElementById("Burrito").style.backgroundColor= "white";
      document.getElementById("Bowl").style.backgroundColor= "white";
      document.getElementById("Salad").style.backgroundColor= "white";

      document.getElementById("Drink").style.backgroundColor= "white";
      document.getElementById("Chips and Queso").style.backgroundColor= "white";
      document.getElementById("Chips and Salsa").style.backgroundColor= "white";
      document.getElementById("Chips and Guac").style.backgroundColor= "white";

      document.getElementById("BeefTaco").style.color= "black";
      document.getElementById("SteakTaco").style.color= "black";
      document.getElementById("MedleyTaco").style.color= "black";
      document.getElementById("ChickenTaco").style.color= "black";
      document.getElementById("CheeseTaco").style.color= "black";
      document.getElementById("BeansTaco").style.color= "black";
      document.getElementById("RiceTaco").style.color= "black";
      document.getElementById("SalsaTaco").style.color= "black";
      document.getElementById("SourCreamTaco").style.color= "black";
      document.getElementById("GuacTaco").style.color= "black";
      document.getElementById("QuesoTaco").style.color= "black";

      document.getElementById("BeefBurrito").style.color= "black";
      document.getElementById("SteakBurrito").style.color= "black";
      document.getElementById("MedleyBurrito").style.color= "black";
      document.getElementById("ChickenBurrito").style.color= "black";
      document.getElementById("CheeseBurrito").style.color= "black";
      document.getElementById("BeansBurrito").style.color= "black";
      document.getElementById("RiceBurrito").style.color= "black";
      document.getElementById("SalsaBurrito").style.color= "black";
      document.getElementById("SourCreamBurrito").style.color= "black";
      document.getElementById("GuacBurrito").style.color= "black";
      document.getElementById("QuesoBurrito").style.color= "black";
      
      document.getElementById("BeefBowl").style.color= "black";
      document.getElementById("SteakBowl").style.color= "black";
      document.getElementById("MedleyBowl").style.color= "black";
      document.getElementById("ChickenBowl").style.color= "black";
      document.getElementById("CheeseBowl").style.color= "black";
      document.getElementById("BeansBowl").style.color= "black";
      document.getElementById("RiceBowl").style.color= "black";
      document.getElementById("SalsaBowl").style.color= "black";
      document.getElementById("SourCreamBowl").style.color= "black";
      document.getElementById("GuacBowl").style.color= "black";
      document.getElementById("QuesoBowl").style.color= "black";

      document.getElementById("BeefSalad").style.color= "black";
      document.getElementById("SteakSalad").style.color= "black";
      document.getElementById("MedleySalad").style.color= "black";
      document.getElementById("ChickenSalad").style.color= "black";
      document.getElementById("CheeseSalad").style.color= "black";
      document.getElementById("BeansSalad").style.color= "black";
      document.getElementById("RiceSalad").style.color= "black";
      document.getElementById("SalsaSalad").style.color= "black";
      document.getElementById("SourCreamSalad").style.color= "black";
      document.getElementById("GuacSalad").style.color= "black";
      document.getElementById("QuesoSalad").style.color= "black";


      order_summary=[];
      Display_Order=[];

      stringorder= "Order Placed.";
      stringprice = "";  //resetting stringprice
      stringdislayorder= "";
      
      let Contents = stringorder;
      let Price= stringprice;
      let DisplayOrder= stringdislayorder;
      document.getElementById("Contents").innerHTML = stringorder; 
      document.getElementById("Price").innerHTML = Price; 
      document.getElementById("DisplayOrder").innerHTML = DisplayOrder; 
    }



    const handleOrder = (e)=>{


      // Loop and check button conditionals //
      // here
      if ( document.getElementById("Tacoo").style.backgroundColor== "grey"){

        if(  document.getElementById("BeefTaco").style.color== "red"){
            order_summary.push("Beef");
            Display_Order.push("Taco Seasoned Beef");

        }else if (  document.getElementById("MedleyTaco").style.color== "red"){
          order_summary.push("Medley");
          Display_Order.push("Taco Grilled Vegetable Medley");
      }else if (  document.getElementById("SteakTaco").style.color== "red"){
        order_summary.push("Steak");
        Display_Order.push("Taco Marinated Steak");
    }else if (  document.getElementById("ChickenTaco").style.color== "red"){
      order_summary.push("Chicken");
      Display_Order.push("Taco Chili Rubbed Chicken");

  }else{
    Display_Order.push("Taco");
  }
  order_summary.push("Taco");
  if (document.getElementById("CheeseTaco").style.color== "red")order_summary.push("Cheese");
  if (document.getElementById("BeansTaco").style.color== "red")order_summary.push("Beans");
  if (document.getElementById("QuesoTaco").style.color== "red")order_summary.push("Queso");
  if (document.getElementById("RiceTaco").style.color== "red")order_summary.push("Rice");
  if (document.getElementById("SalsaTaco").style.color== "red")order_summary.push("Salsa");
  if (document.getElementById("SourCreamTaco").style.color== "red")order_summary.push("SourCream");
  if (document.getElementById("GuacTaco").style.color== "red")order_summary.push("Guac");

 
      }

      if ( document.getElementById("Burrito").style.backgroundColor== "grey"){

        if(  document.getElementById("BeefBurrito").style.color== "red"){
            order_summary.push("Beef");
            Display_Order.push("Burrito Seasoned Beef");

        }else if (  document.getElementById("MedleyBurrito").style.color== "red"){
          order_summary.push("Medley");
          Display_Order.push("Burrito Grilled Vegetable Medley");
      }else if (  document.getElementById("SteakBurrito").style.color== "red"){
        order_summary.push("Steak");
        Display_Order.push("Burrito Marinated Steak");
    }else if (  document.getElementById("ChickenBurrito").style.color== "red"){
      order_summary.push("Chicken");
      Display_Order.push("Burrito Chili Rubbed Chicken");
  }else{
    Display_Order.push("Burrito");
  }

  order_summary.push("Burrito");
  if (document.getElementById("CheeseBurrito").style.color== "red")order_summary.push("Cheese");
  if (document.getElementById("BeansBurrito").style.color== "red")order_summary.push("Beans");
  if (document.getElementById("QuesoBurrito").style.color== "red")order_summary.push("Queso");
  if (document.getElementById("RiceBurrito").style.color== "red")order_summary.push("Rice");
  if (document.getElementById("SalsaBurrito").style.color== "red")order_summary.push("Salsa");
  if (document.getElementById("SourCreamBurrito").style.color== "red")order_summary.push("SourCream");
  if (document.getElementById("GuacBurrito").style.color== "red")order_summary.push("Guac");



      }
      if ( document.getElementById("Bowl").style.backgroundColor== "grey"){

        if(  document.getElementById("BeefBowl").style.color== "red"){
            order_summary.push("Beef");
            Display_Order.push("Bowl Seasoned Beef");

        }else if (  document.getElementById("MedleyBowl").style.color== "red"){
          order_summary.push("Medley");
          Display_Order.push("Bowl Grilled Vegetable Medley");
      }else if (  document.getElementById("SteakBowl").style.color== "red"){
        order_summary.push("Steak");
        Display_Order.push("Bowl Marinated Steak");
    }else if (  document.getElementById("ChickenBowl").style.color== "red"){
      order_summary.push("Chicken");
      Display_Order.push("Bowl Chili Rubbed Chicken");
  }else{
    Display_Order.push("Bowl");
  }
  
  order_summary.push("Bowl");
  if (document.getElementById("CheeseBowl").style.color== "red")order_summary.push("Cheese");
  if (document.getElementById("BeansBowl").style.color== "red")order_summary.push("Beans");
  if (document.getElementById("QuesoBowl").style.color== "red")order_summary.push("Queso");
  if (document.getElementById("RiceBowl").style.color== "red")order_summary.push("Rice");
  if (document.getElementById("SalsaBowl").style.color== "red")order_summary.push("Salsa");
  if (document.getElementById("SourCreamBowl").style.color== "red")order_summary.push("SourCream");
  if (document.getElementById("GuacBowl").style.color== "red")order_summary.push("Guac");


      }
      if ( document.getElementById("Salad").style.backgroundColor== "grey"){

        if(  document.getElementById("BeefSalad").style.color== "red"){
            order_summary.push("Beef");
            Display_Order.push("Salad Seasoned Beef");

        }else if (  document.getElementById("MedleySalad").style.color== "red"){
          order_summary.push("Medley");
          Display_Order.push("Salad Grilled Vegetable Medley");
      }else if (  document.getElementById("SteakSalad").style.color== "red"){
        order_summary.push("Steak");
        Display_Order.push("Salad Marinated Steak");
    }else if (  document.getElementById("ChickenSalad").style.color== "red"){
      order_summary.push("Chicken");
      Display_Order.push("Salad Chili Rubbed Chicken");
  }else{
    Display_Order.push("Salad");
  }
  order_summary.push("Salad");
  if (document.getElementById("CheeseSalad").style.color== "red")order_summary.push("Cheese");
  if (document.getElementById("BeansSalad").style.color== "red")order_summary.push("Beans");
  if (document.getElementById("QuesoSalad").style.color== "red")order_summary.push("Queso");
  if (document.getElementById("RiceSalad").style.color== "red")order_summary.push("Rice");
  if (document.getElementById("SalsaSalad").style.color== "red")order_summary.push("Salsa");
  if (document.getElementById("SourCreamSalad").style.color== "red")order_summary.push("SourCream");
  if (document.getElementById("GuacSalad").style.color== "red")order_summary.push("Guac");

  
  }
  if ( document.getElementById("Drink").style.backgroundColor== "grey"){
    Display_Order.push("Fountain Drinks");
    order_summary.push("Drink");
  }
  //Chips and Queso
  if ( document.getElementById("Chips and Queso").style.backgroundColor== "grey"){
    Display_Order.push("Chips & Queso");
    order_summary.push("Chips&Queso");
  }
  if ( document.getElementById("Chips and Salsa").style.backgroundColor== "grey"){
    Display_Order.push("Chips & Salsa");
    order_summary.push("Chips&Salsa");
  }
  if ( document.getElementById("Chips and Guac").style.backgroundColor== "grey"){
    Display_Order.push("Chips & Guac");
    order_summary.push("Chips&Guac");
  }





        stringorder= order_summary.join(", ");
      //stringprice= Display_Order.toString();
        stringdislayorder= Display_Order.join(", ");
        let Contents = stringorder;
        let DisplayOrder = stringdislayorder;
        document.getElementById("Contents").innerHTML = Contents;
        document.getElementById("DisplayOrder").innerHTML = "";


        if(document.getElementById("Chips and Guac").backgroundColor=="grey"){

        }

        
        stringprice=0;
      for(var i = 0; i < Display_Order.length; i++){
  //calculate for string price?
        stringprice += 5.01; //actually an integer
        
        //TODO query from database with Display_Order[i], these are from the items table in database/
        // also, Display_Order[i] has the exact name given from database, making querying easier
        // it would look something like GET PRICE FROM ITEMS WHERE name= display_order[i].


      }

      stringpricee= "Order Total: $" + parseFloat(stringprice).toFixed(2);

      let Price = stringpricee;

      document.getElementById("Price").innerHTML = Price;




      // reset highlights here TODO
      document.getElementById("Tacoo").style.backgroundColor= "white";
      document.getElementById("Burrito").style.backgroundColor= "white";
      document.getElementById("Bowl").style.backgroundColor= "white";
      document.getElementById("Salad").style.backgroundColor= "white";

      document.getElementById("Drink").style.backgroundColor= "white";
      document.getElementById("Chips and Queso").style.backgroundColor= "white";
      document.getElementById("Chips and Salsa").style.backgroundColor= "white";
      document.getElementById("Chips and Guac").style.backgroundColor= "white";

      document.getElementById("BeefTaco").style.color= "black";
      document.getElementById("SteakTaco").style.color= "black";
      document.getElementById("MedleyTaco").style.color= "black";
      document.getElementById("ChickenTaco").style.color= "black";
      document.getElementById("CheeseTaco").style.color= "black";
      document.getElementById("BeansTaco").style.color= "black";
      document.getElementById("RiceTaco").style.color= "black";
      document.getElementById("SalsaTaco").style.color= "black";
      document.getElementById("SourCreamTaco").style.color= "black";
      document.getElementById("GuacTaco").style.color= "black";
      document.getElementById("QuesoTaco").style.color= "black";

      document.getElementById("BeefBurrito").style.color= "black";
      document.getElementById("SteakBurrito").style.color= "black";
      document.getElementById("MedleyBurrito").style.color= "black";
      document.getElementById("ChickenBurrito").style.color= "black";
      document.getElementById("CheeseBurrito").style.color= "black";
      document.getElementById("BeansBurrito").style.color= "black";
      document.getElementById("RiceBurrito").style.color= "black";
      document.getElementById("SalsaBurrito").style.color= "black";
      document.getElementById("SourCreamBurrito").style.color= "black";
      document.getElementById("GuacBurrito").style.color= "black";
      document.getElementById("QuesoBurrito").style.color= "black";
      
      document.getElementById("BeefBowl").style.color= "black";
      document.getElementById("SteakBowl").style.color= "black";
      document.getElementById("MedleyBowl").style.color= "black";
      document.getElementById("ChickenBowl").style.color= "black";
      document.getElementById("CheeseBowl").style.color= "black";
      document.getElementById("BeansBowl").style.color= "black";
      document.getElementById("RiceBowl").style.color= "black";
      document.getElementById("SalsaBowl").style.color= "black";
      document.getElementById("SourCreamBowl").style.color= "black";
      document.getElementById("GuacBowl").style.color= "black";
      document.getElementById("QuesoBowl").style.color= "black";

      document.getElementById("BeefSalad").style.color= "black";
      document.getElementById("SteakSalad").style.color= "black";
      document.getElementById("MedleySalad").style.color= "black";
      document.getElementById("ChickenSalad").style.color= "black";
      document.getElementById("CheeseSalad").style.color= "black";
      document.getElementById("BeansSalad").style.color= "black";
      document.getElementById("RiceSalad").style.color= "black";
      document.getElementById("SalsaSalad").style.color= "black";
      document.getElementById("SourCreamSalad").style.color= "black";
      document.getElementById("GuacSalad").style.color= "black";
      document.getElementById("QuesoSalad").style.color= "black";
    }


    const DeleteOrder = (e)=>{
        order_summary=[];
        Display_Order=[];

        stringorder= order_summary.toString();
        stringprice = "";  //resetting stringprice
        stringdislayorder= Display_Order.toString();
        
        let Contents = stringorder;
        let Price= stringprice;
        let DisplayOrder= stringdislayorder;
        document.getElementById("Contents").innerHTML = ""; 
        document.getElementById("Price").innerHTML = Price; 
        document.getElementById("DisplayOrder").innerHTML = DisplayOrder; 

      //  alert("Deleted Contents")   
      document.getElementById("Tacoo").style.backgroundColor= "white";
      document.getElementById("Burrito").style.backgroundColor= "white";
      document.getElementById("Bowl").style.backgroundColor= "white";
      document.getElementById("Salad").style.backgroundColor= "white";

      document.getElementById("Drink").style.backgroundColor= "white";
      document.getElementById("Chips and Queso").style.backgroundColor= "white";
      document.getElementById("Chips and Salsa").style.backgroundColor= "white";
      document.getElementById("Chips and Guac").style.backgroundColor= "white";

      document.getElementById("BeefTaco").style.color= "black";
      document.getElementById("SteakTaco").style.color= "black";
      document.getElementById("MedleyTaco").style.color= "black";
      document.getElementById("ChickenTaco").style.color= "black";
      document.getElementById("CheeseTaco").style.color= "black";
      document.getElementById("BeansTaco").style.color= "black";
      document.getElementById("RiceTaco").style.color= "black";
      document.getElementById("SalsaTaco").style.color= "black";
      document.getElementById("SourCreamTaco").style.color= "black";
      document.getElementById("GuacTaco").style.color= "black";
      document.getElementById("QuesoTaco").style.color= "black";

      document.getElementById("BeefBurrito").style.color= "black";
      document.getElementById("SteakBurrito").style.color= "black";
      document.getElementById("MedleyBurrito").style.color= "black";
      document.getElementById("ChickenBurrito").style.color= "black";
      document.getElementById("CheeseBurrito").style.color= "black";
      document.getElementById("BeansBurrito").style.color= "black";
      document.getElementById("RiceBurrito").style.color= "black";
      document.getElementById("SalsaBurrito").style.color= "black";
      document.getElementById("SourCreamBurrito").style.color= "black";
      document.getElementById("GuacBurrito").style.color= "black";
      document.getElementById("QuesoBurrito").style.color= "black";
      
      document.getElementById("BeefBowl").style.color= "black";
      document.getElementById("SteakBowl").style.color= "black";
      document.getElementById("MedleyBowl").style.color= "black";
      document.getElementById("ChickenBowl").style.color= "black";
      document.getElementById("CheeseBowl").style.color= "black";
      document.getElementById("BeansBowl").style.color= "black";
      document.getElementById("RiceBowl").style.color= "black";
      document.getElementById("SalsaBowl").style.color= "black";
      document.getElementById("SourCreamBowl").style.color= "black";
      document.getElementById("GuacBowl").style.color= "black";
      document.getElementById("QuesoBowl").style.color= "black";

      document.getElementById("BeefSalad").style.color= "black";
      document.getElementById("SteakSalad").style.color= "black";
      document.getElementById("MedleySalad").style.color= "black";
      document.getElementById("ChickenSalad").style.color= "black";
      document.getElementById("CheeseSalad").style.color= "black";
      document.getElementById("BeansSalad").style.color= "black";
      document.getElementById("RiceSalad").style.color= "black";
      document.getElementById("SalsaSalad").style.color= "black";
      document.getElementById("SourCreamSalad").style.color= "black";
      document.getElementById("GuacSalad").style.color= "black";
      document.getElementById("QuesoSalad").style.color= "black";

    }

  
    const handleBeefTaco = (e)=>{
 
      if (document.getElementById("BeefTaco").style.color!= "red"){
        document.getElementById("SteakTaco").style.color="black";
        document.getElementById("MedleyTaco").style.color="black";
        document.getElementById("ChickenTaco").style.color="black";
        document.getElementById("BeefTaco").style.color="red";

      }else{
        document.getElementById("BeefTaco").style.color="black";

      }
      
   //   order_summary.push("Beef");

    }

    const handleSteakTaco = (e)=>{
 
      if (document.getElementById("SteakTaco").style.color!= "red"){
        document.getElementById("SteakTaco").style.color="red";
        document.getElementById("ChickenTaco").style.color="black";
        document.getElementById("BeefTaco").style.color="black";
        document.getElementById("MedleyTaco").style.color="black";


      }else{
        document.getElementById("SteakTaco").style.color="black";

      }
      
   //   order_summary.push("Beef");

    }
    const handleMedleyTaco = (e)=>{
 
      if (document.getElementById("MedleyTaco").style.color!= "red"){
        document.getElementById("MedleyTaco").style.color="red";
        document.getElementById("BeefTaco").style.color="black";
        document.getElementById("ChickenTaco").style.color="black";
        document.getElementById("SteakTaco").style.color="black";

      }else{
        document.getElementById("MedleyTaco").style.color="black";

      }
      
   //   order_summary.push("Beef");

    }
    const handleChickenTaco = (e)=>{
 
      if (document.getElementById("ChickenTaco").style.color!= "red"){
        document.getElementById("ChickenTaco").style.color="red";
        document.getElementById("BeefTaco").style.color="black";
        document.getElementById("MedleyTaco").style.color="black";
        document.getElementById("SteakTaco").style.color="black";
      }else{
        document.getElementById("ChickenTaco").style.color="black";

      }
      
     // order_summary.push("Beef");

    }


    const handleBeefBurrito = (e)=>{
 
      if (document.getElementById("BeefBurrito").style.color!= "red"){
        document.getElementById("SteakBurrito").style.color="black";
        document.getElementById("MedleyBurrito").style.color="black";
        document.getElementById("ChickenBurrito").style.color="black";
        document.getElementById("BeefBurrito").style.color="red";

      }else{
        document.getElementById("BeefBurrito").style.color="black";

      }
      
      //order_summary.push("Beef");

    }

    const handleSteakBurrito = (e)=>{
 
      if (document.getElementById("SteakBurrito").style.color!= "red"){
        document.getElementById("SteakBurrito").style.color="red";
        document.getElementById("MedleyBurrito").style.color="black";
        document.getElementById("ChickenBurrito").style.color="black";
        document.getElementById("BeefBurrito").style.color="black";

      }else{
        document.getElementById("SteakBurrito").style.color="black";

      }
      
     // order_summary.push("Beef");

    }
    const handleMedleyBurrito = (e)=>{
 
      if (document.getElementById("MedleyBurrito").style.color!= "red"){
        document.getElementById("MedleyBurrito").style.color="red";
        document.getElementById("SteakBurrito").style.color="black";
        document.getElementById("ChickenBurrito").style.color="black";
        document.getElementById("BeefBurrito").style.color="black";
      }else{
        document.getElementById("MedleyBurrito").style.color="black";

      }
      
     // order_summary.push("Beef");

    }
    const handleChickenBurrito = (e)=>{
 
      if (document.getElementById("ChickenBurrito").style.color!= "red"){
        document.getElementById("ChickenBurrito").style.color="red";
        document.getElementById("SteakBurrito").style.color="black";
        document.getElementById("MedleyBurrito").style.color="black";
        document.getElementById("BeefBurrito").style.color="black";
      }else{
        document.getElementById("ChickenBurrito").style.color="black";

      }
      
     // order_summary.push("Beef");

    }


    const handleBeefBowl = (e)=>{
 
      if (document.getElementById("BeefBowl").style.color!= "red"){
        document.getElementById("SteakBowl").style.color="black";
        document.getElementById("MedleyBowl").style.color="black";
        document.getElementById("ChickenBowl").style.color="black";
        document.getElementById("BeefBowl").style.color="red";

      }else{
        document.getElementById("BeefBowl").style.color="black";

      }
      
     // order_summary.push("Beef");

    }

    const handleSteakBowl = (e)=>{
 
      if (document.getElementById("SteakBowl").style.color!= "red"){
        document.getElementById("SteakBowl").style.color="red";
        document.getElementById("MedleyBowl").style.color="black";
        document.getElementById("ChickenBowl").style.color="black";
        document.getElementById("BeefBowl").style.color="black";

      }else{
        document.getElementById("SteakBowl").style.color="black";

      }
      
      //order_summary.push("Beef");

    }
    const handleMedleyBowl = (e)=>{
 
      if (document.getElementById("MedleyBowl").style.color!= "red"){
        document.getElementById("MedleyBowl").style.color="red";
        document.getElementById("SteakBowl").style.color="black";
        document.getElementById("ChickenBowl").style.color="black";
        document.getElementById("BeefBowl").style.color="black";
      }else{
        document.getElementById("MedleyBowl").style.color="black";

      }
      
    //  order_summary.push("Beef");

    }
    const handleChickenBowl = (e)=>{
 
      if (document.getElementById("ChickenBowl").style.color!= "red"){
        document.getElementById("ChickenBowl").style.color="red";
        document.getElementById("SteakBowl").style.color="black";
        document.getElementById("MedleyBowl").style.color="black";
        document.getElementById("BeefBowl").style.color="black";
      }else{
        document.getElementById("ChickenBowl").style.color="black";

      }
      
     // order_summary.push("Beef");

    }

    const handleBeefSalad = (e)=>{
 
      if (document.getElementById("BeefSalad").style.color!= "red"){
        document.getElementById("SteakSalad").style.color="black";
        document.getElementById("MedleySalad").style.color="black";
        document.getElementById("ChickenSalad").style.color="black";
        document.getElementById("BeefSalad").style.color="red";

      }else{
        document.getElementById("BeefSalad").style.color="black";

      }
      
    //  order_summary.push("Beef");

    }

    const handleSteakSalad = (e)=>{
 
      if (document.getElementById("SteakSalad").style.color!= "red"){
        document.getElementById("SteakSalad").style.color="red";
        document.getElementById("MedleySalad").style.color="black";
        document.getElementById("ChickenSalad").style.color="black";
        document.getElementById("BeefSalad").style.color="black";

      }else{
        document.getElementById("SteakSalad").style.color="black";

      }
      
    //  order_summary.push("Beef");

    }
    const handleMedleySalad = (e)=>{
 
      if (document.getElementById("MedleySalad").style.color!= "red"){
        document.getElementById("MedleySalad").style.color="red";
        document.getElementById("SteakSalad").style.color="black";
        document.getElementById("ChickenSalad").style.color="black";
        document.getElementById("BeefSalad").style.color="black";
      }else{
        document.getElementById("MedleySalad").style.color="black";

      }
      
    //  order_summary.push("Beef");

    }
    const handleChickenSalad = (e)=>{
 
      if (document.getElementById("ChickenSalad").style.color!= "red"){
        document.getElementById("ChickenSalad").style.color="red";
        document.getElementById("SteakSalad").style.color="black";
        document.getElementById("MedleySalad").style.color="black";
        document.getElementById("BeefSalad").style.color="black";
      }else{
        document.getElementById("ChickenSalad").style.color="black";

      }
      
    //  order_summary.push("Beef");

    }


    const handleCheeseTaco = (e)=>{
    //  order_summary.push("Cheese");
      if (document.getElementById("CheeseTaco").style.color!= "red"){
        document.getElementById("CheeseTaco").style.color= "red";
      }else{
        document.getElementById("CheeseTaco").style.color= "black";
      }
    }



    const handleBeansTaco = (e)=>{
     // order_summary.push("Beans");
      if (document.getElementById("BeansTaco").style.color!= "red"){
        document.getElementById("BeansTaco").style.color= "red";
      }else{
        document.getElementById("BeansTaco").style.color= "black";
      }
    }
    const handleRiceTaco = (e)=>{
    //  order_summary.push("Rice");
      if (document.getElementById("RiceTaco").style.color!= "red"){
        document.getElementById("RiceTaco").style.color= "red";
      }else{
        document.getElementById("RiceTaco").style.color= "black";
      }
    }
    const handleSalsaTaco = (e)=>{
    //  order_summary.push("Salsa");
      if (document.getElementById("SalsaTaco").style.color!= "red"){
        document.getElementById("SalsaTaco").style.color= "red";
      }else{
        document.getElementById("SalsaTaco").style.color= "black";
      }
    }
    const handleCreamTaco = (e)=>{
    //  order_summary.push("SourCream");
      if (document.getElementById("SourCreamTaco").style.color!= "red"){
        document.getElementById("SourCreamTaco").style.color= "red";
      }else{
        document.getElementById("SourCreamTaco").style.color= "black";
      }
    }
    const handleGuacTaco = (e)=>{
    //  order_summary.push("Guac");
      if (document.getElementById("GuacTaco").style.color!= "red"){
        document.getElementById("GuacTaco").style.color= "red";
      }else{
        document.getElementById("GuacTaco").style.color= "black";
      }
    }
    const handleQuesoTaco = (e)=>{
    //  order_summary.push("Queso");
      if (document.getElementById("QuesoTaco").style.color!= "red"){
        document.getElementById("QuesoTaco").style.color= "red";
      }else{
        document.getElementById("QuesoTaco").style.color= "black";
      }
    }

    
    const handleCheeseBowl = (e)=>{
    //  order_summary.push("Cheese");
      if (document.getElementById("CheeseBowl").style.color!= "red"){
        document.getElementById("CheeseBowl").style.color= "red";
      }else{
        document.getElementById("CheeseBowl").style.color= "black";
      }
    }



    const handleBeansBowl = (e)=>{
    //  order_summary.push("Beans");
      if (document.getElementById("BeansBowl").style.color!= "red"){
        document.getElementById("BeansBowl").style.color= "red";
      }else{
        document.getElementById("BeansBowl").style.color= "black";
      }
    }
    const handleRiceBowl = (e)=>{
    //  order_summary.push("Rice");
      if (document.getElementById("RiceBowl").style.color!= "red"){
        document.getElementById("RiceBowl").style.color= "red";
      }else{
        document.getElementById("RiceBowl").style.color= "black";
      }
    }
    const handleSalsaBowl = (e)=>{
   //   order_summary.push("Salsa");
      if (document.getElementById("SalsaBowl").style.color!= "red"){
        document.getElementById("SalsaBowl").style.color= "red";
      }else{
        document.getElementById("SalsaBowl").style.color= "black";
      }
    }
    const handleCreamBowl = (e)=>{
    //  order_summary.push("SourCream");
      if (document.getElementById("SourCreamBowl").style.color!= "red"){
        document.getElementById("SourCreamBowl").style.color= "red";
      }else{
        document.getElementById("SourCreamBowl").style.color= "black";
      }
    }
    const handleGuacBowl = (e)=>{
   //   order_summary.push("Guac");
      if (document.getElementById("GuacBowl").style.color!= "red"){
        document.getElementById("GuacBowl").style.color= "red";
      }else{
        document.getElementById("GuacBowl").style.color= "black";
      }
    }
    const handleQuesoBowl = (e)=>{
    //  order_summary.push("Queso");
      if (document.getElementById("QuesoBowl").style.color!= "red"){
        document.getElementById("QuesoBowl").style.color= "red";
      }else{
        document.getElementById("QuesoBowl").style.color= "black";
      }
    }

    const handleCheeseBurrito = (e)=>{
    //  order_summary.push("Cheese");
      if (document.getElementById("CheeseBurrito").style.color!= "red"){
        document.getElementById("CheeseBurrito").style.color= "red";
      }else{
        document.getElementById("CheeseBurrito").style.color= "black";
      }
    }



    const handleBeansBurrito = (e)=>{
     // order_summary.push("Beans");
      if (document.getElementById("BeansBurrito").style.color!= "red"){
        document.getElementById("BeansBurrito").style.color= "red";
      }else{
        document.getElementById("BeansBurrito").style.color= "black";
      }
    }
    const handleRiceBurrito = (e)=>{
    //  order_summary.push("Rice");
      if (document.getElementById("RiceBurrito").style.color!= "red"){
        document.getElementById("RiceBurrito").style.color= "red";
      }else{
        document.getElementById("RiceBurrito").style.color= "black";
      }
    }
    const handleSalsaBurrito = (e)=>{
    //  order_summary.push("Salsa");
      if (document.getElementById("SalsaBurrito").style.color!= "red"){
        document.getElementById("SalsaBurrito").style.color= "red";
      }else{
        document.getElementById("SalsaBurrito").style.color= "black";
      }
    }
    const handleCreamBurrito = (e)=>{
   //   order_summary.push("SourCream");
      if (document.getElementById("SourCreamBurrito").style.color!= "red"){
        document.getElementById("SourCreamBurrito").style.color= "red";
      }else{
        document.getElementById("SourCreamBurrito").style.color= "black";
      }
    }
    const handleGuacBurrito = (e)=>{
    //  order_summary.push("Guac");
      if (document.getElementById("GuacBurrito").style.color!= "red"){
        document.getElementById("GuacBurrito").style.color= "red";
      }else{
        document.getElementById("GuacBurrito").style.color= "black";
      }
    }
    const handleQuesoBurrito = (e)=>{
    //  order_summary.push("Queso");
      if (document.getElementById("QuesoBurrito").style.color!= "red"){
        document.getElementById("QuesoBurrito").style.color= "red";
      }else{
        document.getElementById("QuesoBurrito").style.color= "black";
      }
    }





    const handleCheeseSalad = (e)=>{
    //  order_summary.push("Cheese");
      if (document.getElementById("CheeseSalad").style.color!= "red"){
        document.getElementById("CheeseSalad").style.color= "red";
      }else{
        document.getElementById("CheeseSalad").style.color= "black";
      }
    }



    const handleBeansSalad = (e)=>{
     // order_summary.push("Beans");
      if (document.getElementById("BeansSalad").style.color!= "red"){
        document.getElementById("BeansSalad").style.color= "red";
      }else{
        document.getElementById("BeansSalad").style.color= "black";
      }
    }
    const handleRiceSalad = (e)=>{
   //   order_summary.push("Rice");
      if (document.getElementById("RiceSalad").style.color!= "red"){
        document.getElementById("RiceSalad").style.color= "red";
      }else{
        document.getElementById("RiceSalad").style.color= "black";
      }
    }
    const handleSalsaSalad = (e)=>{
    //  order_summary.push("Salsa");
      if (document.getElementById("SalsaSalad").style.color!= "red"){
        document.getElementById("SalsaSalad").style.color= "red";
      }else{
        document.getElementById("SalsaSalad").style.color= "black";
      }
    }
    const handleCreamSalad = (e)=>{
   //   order_summary.push("SourCream");
      if (document.getElementById("SourCreamSalad").style.color!= "red"){
        document.getElementById("SourCreamSalad").style.color= "red";
      }else{
        document.getElementById("SourCreamSalad").style.color= "black";
      }
    }
    const handleGuacSalad = (e)=>{
    //  order_summary.push("Guac");
      if (document.getElementById("GuacSalad").style.color!= "red"){
        document.getElementById("GuacSalad").style.color= "red";
      }else{
        document.getElementById("GuacSalad").style.color= "black";
      }
    }
    const handleQuesoSalad = (e)=>{
    //  order_summary.push("Queso");
      if (document.getElementById("QuesoSalad").style.color!= "red"){
        document.getElementById("QuesoSalad").style.color= "red";
      }else{
        document.getElementById("QuesoSalad").style.color= "black";
      }
    }

  
   

      return (
        /*need to add on click event to show a menu customization options such as meat option and topping
        Should make it to where the other items disappear so you can customize then add then unhide and hide the customizations*/
        // add an add to order button along with a for loop to display the order summary on click
        <>
        <body className="body">
          <div className = "rowCust">
            <div className = "columnCust">
              <div class="dropdown">
              <button class= "entree" id= "Tacoo" onClick = {handleTaco}>
                  <h55>Tacos</h55>
              </button>
               

                  <button id="BeefTaco" onClick={handleBeefTaco}><h5>Beef</h5></button>

                  <button id="SteakTaco" onClick={handleSteakTaco}><h5>Steak</h5></button>
                  <button id="MedleyTaco" onClick={handleMedleyTaco}><h5>Veggie Medley</h5></button>
                  <button id="ChickenTaco" onClick={handleChickenTaco}><h5>Chicken</h5></button>
                  <button id= "CheeseTaco" onClick={handleCheeseTaco}><h5>Cheese</h5></button>
                  <button id= "BeansTaco" onClick={handleBeansTaco}><h5>Beans</h5></button>
                  <button id= "RiceTaco" onClick={handleRiceTaco}><h5>Rice</h5></button>
                  <button id= "SalsaTaco" onClick={handleSalsaTaco}><h5>Salsa</h5></button>
                  <button id= "SourCreamTaco" onClick={handleCreamTaco}><h5>Sour Cream</h5></button>
                  <button id= "GuacTaco" onClick={handleGuacTaco}><h5>Guacamole</h5></button>
                  <button id= "QuesoTaco" onClick={handleQuesoTaco}><h5>Queso</h5></button>
                
              </div>
              <button class= "entree" id= "Drink" onClick = {handleDrink}>
                  <h5>Drink</h5>
              </button>
            </div>
            <div className = "columnCust">
            <div class="dropdown">
              <button class= "entree" id= "Burrito" onClick = {handleBurrito}>
                  <h55>Burrito</h55>
              </button> 
              
                  <button id= "BeefBurrito" onClick={handleBeefBurrito}><h5>Beef</h5></button>
                  <button id="SteakBurrito"onClick={handleSteakBurrito}><h5>Steak</h5></button>
                  <button id= "MedleyBurrito" onClick={handleMedleyBurrito}><h5>Veggie Medley</h5></button>
                  <button id= "ChickenBurrito" onClick={handleChickenBurrito}><h5>Chicken</h5></button>
                  <button id= "CheeseBurrito" onClick={handleCheeseBurrito}><h5>Cheese</h5></button>
                  <button id= "BeansBurrito" onClick={handleBeansBurrito}><h5>Beans</h5></button>
                  <button id= "RiceBurrito" onClick={handleRiceBurrito}><h5>Rice</h5></button>
                  <button id= "SalsaBurrito" onClick={handleSalsaBurrito}><h5>Salsa</h5></button>
                  <button id= "SourCreamBurrito" onClick={handleCreamBurrito}><h5>Sour Cream</h5></button>
                  <button id= "GuacBurrito" onClick={handleGuacBurrito}><h5>Guacamole</h5></button>
                  <button id= "QuesoBurrito" onClick={handleQuesoBurrito}><h5>Queso</h5></button>
                
                </div>
              <button class= "entree" id= "Chips and Queso" onClick = {handleChips_and_Queso}>
                  <h5>Chips and Queso</h5>
              </button>
            </div>
            <div className = "columnCust">
              <div class="dropdown">
              <button class= "entree" id= "Bowl" onClick = {handleBowl}>
                  <h55>Bowl</h55>
              </button>
               
                  <button id= "BeefBowl" onClick={handleBeefBowl}><h5>Beef</h5></button>
                  <button id= "SteakBowl" onClick={handleSteakBowl}><h5>Steak</h5></button>
                  <button id= "MedleyBowl" onClick={handleMedleyBowl}><h5>Veggie Medley</h5></button>
                  <button id= "ChickenBowl" onClick={handleChickenBowl}><h5>Chicken</h5></button>

                  <button id= "CheeseBowl" onClick={handleCheeseBowl}><h5>Cheese</h5></button>
                  <button id= "BeansBowl" onClick={handleBeansBowl}><h5>Beans</h5></button>
                  <button id= "RiceBowl" onClick={handleRiceBowl}><h5>Rice</h5></button>
                  <button id= "SalsaBowl" onClick={handleSalsaBowl}><h5>Salsa</h5></button>
                  <button id= "SourCreamBowl" onClick={handleCreamBowl}><h5>Sour Cream</h5></button>
                  <button id= "GuacBowl" onClick={handleGuacBowl}><h5>Guacamole</h5></button>
                  <button id= "QuesoBowl" onClick={handleQuesoBowl}><h5>Queso</h5></button>
                
              </div>
              <button class= "entree" id= "Chips and Salsa" onClick = {handleChips_and_Salsa}>
                  <h5>Chips and Salsa</h5>
              </button>
            </div>
            <div className = "columnCust">
              <div class="dropdown">
                <button class= "entree"id= "Salad" onClick = {handleSalad}>
                  <h55>Salad</h55>
              </button>
              
                  <button id= "BeefSalad" onClick={handleBeefSalad}><h5>Beef</h5></button>
                  <button id= "SteakSalad" onClick={handleSteakSalad}><h5>Steak</h5></button>
                  <button id= "MedleySalad" onClick={handleMedleySalad}><h5>Veggie Medley</h5></button>
                  <button id= "ChickenSalad" onClick={handleChickenSalad}><h5>Chicken</h5></button>
                  <button id= "CheeseSalad" onClick={handleCheeseSalad}><h5>Cheese</h5></button>
                  <button id= "BeansSalad" onClick={handleBeansSalad}><h5>Beans</h5></button>
                  <button id= "RiceSalad" onClick={handleRiceSalad}><h5>Rice</h5></button>
                  <button id= "SalsaSalad" onClick={handleSalsaSalad}><h5>Salsa</h5></button>
                  <button id= "SourCreamSalad" onClick={handleCreamSalad}><h5>Sour Cream</h5></button>
                  <button id= "GuacSalad" onClick={handleGuacSalad}><h5>Guacamole</h5></button>
                  <button id= "QuesoSalad" onClick={handleQuesoSalad}><h5>Queso</h5></button>
              
                </div>
                
              <button class= "entree"id= "Chips and Guac" onClick = {handleChips_and_Guac}>
                  <h5>Chips and Guacamole</h5>
              </button>
            </div>
          </div>


        {
          <table class="contentt">

<div className = "orderButtonn" onClick = {handleOrder}>
                <p>ADD TO ORDER</p>
                {/* <button onClick = {handleOrder}>
                    
                </button> */
                //displayOrder()
                }
            </div>

            <div className = "orderButtonn" onClick = {FinishOrder}>
                <p>Finish Order</p>
                {/* <button onClick = {handleOrder}>
                    
                </button> */}
            </div>
            <div className = "orderButtonn" onClick = {DeleteOrder}>
                <p>Delete Contents</p>

                {/* <button onClick = {handleOrder}>
                    
                </button> */}
            </div>

  
          </table>
      }
            
           

            <table class = "ordertext">
            <p id="Contents">Contents</p>
                <p id="DisplayOrder"></p>
                <p 
                    id="Price">Price </p>
                    </table>


            {/* Contents changes to whatever is in the order_summary string when add to order is pressed */}
        </body>






        </>

        )
            


}   
import About from "./About"
import Transaction from "./tranHistory";
import Employees from "./Employees";
import Items from "./Items";
import Reports from "./Reports";
import Inventory from "./Inventory";

import NavBarManager from "./NavBarManager";
import Login from "./LoginManager";
//import Transaction from "./tranHistory";
//import Employees from "./Employees";
//import Items from "./Items";
//import Reports from "./Reports";
//import Inventory from "./Inventory";
//import "./navMstyle.css"

/**
 * Displays Manager GUI page
 */
 function ManagerGUI() {
    let component
    switch (window.location.pathname) {
        case "/about":
          component = <About/>
          break;
        case "/tranHistory":
          component = <Transaction/>
          break;
        case "/employees":
          component = <Employees/>
          break;
        case "/items":
          component = <Items/>
          break;
        case "/reports":
          component = <Reports/>
          break;
        case "/Inventory":
          component = <Inventory/>
          break;

        default: 
          component = <Login/>
          return <Login/>;
          
      }
      return (
        <>
          <NavBarManager/>
          {component}
        </>
      )
    

}   
export default ManagerGUI;
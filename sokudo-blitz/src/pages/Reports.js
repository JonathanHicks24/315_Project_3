<<<<<<< HEAD
const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male"},
  ]
=======
import React, { Component }  from 'react';
>>>>>>> e10eb8b80bf1ad5a34644313d26f31adb517768b

export default function Reports() {
    return(
        <>
    
    <div class="column left">
        
        <div class="dropdown">
        <button class="dropbtn">Select Item</button>
            <div id ="myDropdown"  class="dropdown-content">
                <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 1</a>
                <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 2</a>
                <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 3</a>
                <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 4</a>
            </div>
        </div>
        

        <form>Order Amount: <input type="text"></input></form>

        <button class="order_inv">Order Inventory</button>

    </div>
    
    <div class="column right">
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
            </tr>
            {data.map((val, key) => {
            return (
                <tr key={key}>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.gender}</td>
                </tr>
            )
            })}
        </table>
    </div>
    </>
        );
}
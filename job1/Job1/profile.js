// Determine user role and adjust profile accordingly
window.onload = () => {
    const role = localStorage.getItem("role");

    if (role === "employee") {
        document.getElementById("profile-header").innerText = "Employee Profile";
    } else {
        document.getElementById("profile-header").innerText = "User Profile";
    }
};






// document.getElementById("loadDataButton").addEventListener("click", function () {
//   const url = "http://127.0.0.1:8000/employee/list/";
//   const employeeDataContainer = document.getElementById("employeeData");

  
//   employeeDataContainer.innerHTML = "<p>Loading data...</p>";


//   fetch(url)
//       .then(response => {
//           if (!response.ok) {
//               throw new Error("Network response was not ok");
//           }
//           return response.json();
//       })
//       .then(data => {
//           employeeDataContainer.innerHTML = ""; 

//           if (!Array.isArray(data) || data.length === 0) {
//               employeeDataContainer.innerHTML = "<p>No employee data available.</p>";
//           } else {
             
//               const employeeList = data.map(employee => `
//                   <div class="employee-card">
//                       <img src="${employee.image}" alt="Employee Image" class="employee-image">
//                       <h2>${employee.user.first_name} ${employee.user.last_name}</h2>
//                       <p><strong>Username:</strong> ${employee.user.username}</p>
//                       <p><strong>Email:</strong> ${employee.user.email}</p>
//                       <p><strong>Mobile:</strong> ${employee.mobile_no}</p>
//                   </div>
//               `).join("");

//               employeeDataContainer.innerHTML = employeeList; 
//           }
//       })
//       .catch(error => {
//           employeeDataContainer.innerHTML = `<p>Error loading data: ${error.message}</p>`;
//       });
// });
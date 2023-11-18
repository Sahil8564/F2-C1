    
    const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    console.log(data);
  }
  printDeveloper();
  
  // 2. Add Data
  function addData() {
    //Collect data from user through prompt
    const name = prompt("Enter the name");
    const age = parseInt(prompt("Enter the age"));
    const profession = prompt("Enter the profession");
    // Now we will check whether user provided valid input or not
    if(name && !isNaN(age) && profession){
      //Create a new data object object with the collected data
      const newData={name,age,profession};
      //Add the new data object to the data Array
      data.push(newData);
      //Log a message to confirm addition
      console.log("Data added",newData);
  
    }
    else{
      console.log("Invalid Input.Data not added.")
    }
  } 

  // 3. Remove Admins
  function removeAdmin() {
    // Create a new array with non-admin objects using filter
    const filteredData = data.filter(person => person.profession !== "admin");
  
    // Log a message to confirm the removal
    console.log("Admins removed:", filteredData);
  }
  removeAdmin();
  
  
  // 4. Concatenate Array
  function concatenateArray() {
    let arr = [
      { id: 1, name: 'john', age: 18, profession: 'developer', salary: 1000 },
      { id: 2, name: 'jack', age: 20, profession: 'developer', salary: 1100 },
      { id: 3, name: 'karen', age: 19, profession: 'admin', salary: 900 },
     ];
      const combinedArray = data.concat(arr);
      console.log("Concatenated array:", combinedArray);
  }
  concatenateArray();
  
  // 5. Average Age
  function averageAge() {
    let totalAge =0;
    for(let i =0;i<data.length;i++){
      totalAge+=data[i].age;
  
    }
    const averageAge = totalAge/data.length;
    console.log("Average age",averageAge);
  }
  averageAge();
  
  // 6. Age Check
  function checkAgeAbove25() {
    const isAbove25 = data.some(person =>person.age>25);
    if(isAbove25){
      console.log("At least one person is above age of 25.");
    }
    else{
      console.log("No person is above the age of 25");
    }
  }
  checkAgeAbove25();
  
  // 7. Unique Professions
  function uniqueProfessions() {
    //create an empty object to store unique profession
    const uniqueProfessions ={}
    for(let i =0;i<data.length;i++){
  const profession = data[i].profession;
  uniqueProfessions[profession] = true;
    }
    const uniqueProfessionsArray=Object.keys(uniqueProfessions);
    console.log("Unique Profession",uniqueProfessionsArray);
  }
  uniqueProfessions();
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b) =>a.age - b.age);
    console.log("Sorted by Age Ascending",data);
  }
  sortByAge();
  
  // 9. Update Profession
  function updateJohnsProfession() {
    //Loop through the data array to find John profession and update his profession
    const john = data.find((person) => person.name === "john");
    if (john) {
      john.profession = "manager";
      console.log("Updated John's profession:", john);
    } else {
      console.log("John not found in the array.");
    }
  }
  updateJohnsProfession();
  
  // 10. Profession Count
  function getTotalProfessions() {
    //getTotalProfessions
    let developerCount =0;
    let adminCount =0;
    for(let i =0;i<data.length;i++){
      const profession = data[i].profession;
      if(profession ==="developer"){
        developerCount++;
      }
      else if(profession ==="admin"){
        adminCount++;
      }
    }
    
    const totalProfessions = developerCount + adminCount;

    console.log("Total Developers",developerCount);
    console.log("Total Admins",adminCount);
    console.log("Total Professions:", totalProfessions);
  }
  getTotalProfessions();

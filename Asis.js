
const sectionA = ["Anna", "Brian", "Charlie"]; 
const sectionB = ["Diana", "Ethan"];


const allStudents = [...sectionA, ...sectionB, "Faith"];
console.log("All Students:", allStudents);

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  owner: {
    name: "Alex",
    age: 30,
  },
};

const { brand, model, year } = car;
const { owner: { name, age } } = car;

console.log("Car Info:", brand, model, year); 
console.log("Owner:", name, "age:", age); 


const grades = [75, 80, 90];


const updatedGrades = grades.map(grade => grade + 5);
console.log("Updated Grades:", updatedGrades);

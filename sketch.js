var student = {
  name:"Ethan",
  class:7,
  roll_Number:10,
  favourite_subject:"Math",
  marks:[30,35,40,50]
}

function setup() {
  createCanvas(400, 400);
  console.log(student.name);
  console.log(student.class);
  console.log(student.favourite_subject);
  console.log(student.roll_Number);
  student.roll_Number = 15;
  console.log(student.roll_Number);
}

function draw() {
  background(220);
}
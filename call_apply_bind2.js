function teacher(Teaching_subject, school) {
  this.Teaching_subject = Teaching_subject;
  this.school = school;
}
function person(name, subject, Teaching_subject, school) {
  this.name = name;
  this.subject = subject;
  this.callTeacher = teacher.bind(this);
  this.callTeacher(Teaching_subject, school);
}

var person1 = new person("Muskan", "Maths", "Maths", "ABC");
var person2 = new person("Muskan2", "English", "English", "DEF");
var person3 = new person("Muskan3", "Science", "Science", "GHI");

console.log(person1);
console.log(person2);
console.log(person3);

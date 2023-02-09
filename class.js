class Student{
    constructor(sID,sName){
        this.id = sID;
        this.name = sName;
        this.stat = "Lover"
    }
}

const Student1 = new Student(12,"Ahnik");
const Student2 = new Student(13,"Asif");

console.log(Student1,Student2);
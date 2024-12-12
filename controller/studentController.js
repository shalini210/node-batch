let students = [
{name:"John",age:12},
{name:"ron",age:18},
{name:"na man",age:19},
{name:"dev",age:21}
]

exports.getall = ()=>
{
return students;
}
exports.insertStudent = (s)=>
{
    students.push(s)
}
exports.updateStudent=(s)=>
{
    let index = students.findIndex((st)=>st.name==s.name)
    students[index].age = s.age
}
exports.deleteStudent=(s)=>
{
    let index = students.findIndex((st)=>st.name==s.name)
    console.log(index);
    if(index>0)
    {
    students.splice(index,1);    
    }
}
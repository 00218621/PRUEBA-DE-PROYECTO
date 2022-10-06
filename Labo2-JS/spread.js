const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@test.com",
      age: 60,
      salary: 1099,
    },
    {
      id: 2,
      name: "Robert Singer",
      email: "bobby@test.com",
      age: 62,
      salary: 999,
    },
    {
      id: 3,
      name: "Misha Collins",
      email: "castiel@test.com",
      age: 35,
      salary: 899,
    },
    {
      id: 4,
      name: "Dean Winchester",
      email: "dean@test.com",
      age: 41,
      salary: 799,
    },
    {
      id: 5,
      name: "Sam Winchester",
      email: "sam@test.com",
      age: 36,
      salary: 699,
    },
  ];

/* const showUsers = (list, callBack)=>{
    if(!list)
        callBack(`Lista sin datos!`);
    else 
        callBack(null, list);
} */
/* showUsers(users, (err, data) => {
    if(err)
        console.log(`Warning ${err}`);
    else    
        console.log(data);
}); */
const updateUser = (id, newName, newSalary) =>{
    const newUser = {
        id: id,
        name: newName,
        salary: newSalary,
        age: 0,
    }
    let index = 0;
    users.map((user) => {
        let {id: userId} = user;
        if(userId === id){
            newUser.age = user.age;
            index = users.indexOf(user);
        }
    });
    users.splice(index, 1);
    users.splice(index, 0, newUser);
    console.log(users);
}
updateUser(1, "John Winchester", 1500);


const userWithoutId = ()=>{
    let index = 0;
    let userWithoutIdList = [];
    users.map((user)=>{
        const {id, ...aUserNotId} = user;    
        userWithoutIdList.splice(index, 0, aUserNotId);
        index++;
    });
    console.log(userWithoutIdList);
}
userWithoutId();
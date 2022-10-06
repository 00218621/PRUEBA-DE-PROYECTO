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
  const AuxUser=users;
  console.log(AuxUser);


  const UpdateUser=(Newid,NewName,NewSalary)=>{

    const search=AuxUser.filter((item)=>{
        return item.id===Newid;
        });
    const champ = search.find((champ) => champ.id === Newid);

    if(champ){
        const upUser=search.map(p=>
            p.id===Newid ? {...p,name:NewName,salary: NewSalary}:p
        );
        const idRest=Newid-1;
        AuxUser.splice(idRest,1,upUser);
        console.log(AuxUser);
    }
    else {
        console.log("ID ERRÓNEO");
    }
  }

  console.log("\n\n-------------\n\n");
  UpdateUser(1,"José Barahona",2000);
  console.log("\n\n\nMostrar los datos excluyendo el id");
  
  const Aux=[{},{},{},{},{}];
  const SubmitID=AuxUser.map((item)=>{
    return  item.name + item.salary + item.email
  });
  
  console.log(SubmitID);
  









const desserts = [
    {
      name: "Chocolate Cake",
      calories: 400,
      createdAt: "2022-09-01",
    },
    {
      name: "Ice Cream",
      calories: 200,
      createdAt: "2022-01-02",
    },
    {
      name: "Tiramisu",
      calories: 300,
      createdAt: "2021-10-03",
    },
    {
      name: "Cheesecake",
      calories: 600,
      createdAt: "2022-01-04",
    },
  ];

  const newd = desserts.filter(cal => {return(cal.calories < 500)})
  console.log(newd)
  
  const sortarr = newd.sort((a,b)=>{
    return (a.calories - b.calories)
  })
  console.log(sortarr)
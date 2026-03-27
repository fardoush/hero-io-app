const getStoredApp = () => {
  const storedAppSTR = localStorage.getItem("readList");

  if(storedAppSTR){
    const storedAppData = JSON.parse(storedAppSTR);
    return storedAppData;
  }
  else{
    return [];
  }
}

const addToStoredDB = (id) => {

  const storedAppData = getStoredApp();
  if(storedAppData.includes(id)){
alert("already exsist")
  }
  else{
    storedAppData.push(id);
    console.log("stored app data", storedAppData)
    const data = JSON.stringify(storedAppData);
    localStorage.setItem("readList", data)

  }
}
export  {addToStoredDB, getStoredApp}
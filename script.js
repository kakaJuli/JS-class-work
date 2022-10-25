let arr = [
    "250px",
    250,
    "250.25",
    "15f",
    true,
    false,
  
  ];
  
  
  const stringToNumber = function (value) {
    let result = value;
  
    if (result > 0) {
      result = Number(value);
      console.log(value);
      return result;
    } else {
      result = parseInt(value);
      console.log(result);
      return result;
    }
  };
  
  
  
  
  let show = stringToNumber(arr);
  
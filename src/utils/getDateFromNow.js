const getDateFromNow = (givenDate) => {
  console.log(givenDate);
  let msg;

  let difference = new Date().getTime() - new Date(givenDate).getTime();
  difference = difference / 1000;
  console.log("initial difference", difference);

  let dateDiference = Math.floor(difference / 86400);
  console.log("dateDiference", dateDiference);

  if (dateDiference > 0) {
    return (msg = `${dateDiference} days`);

    // difference = difference - dateDiference * 86400;
    // console.log("afterdate", difference);
  }
  let hourDifference = Math.floor(difference / 3600);
  if (hourDifference > 0) {
    msg = msg ? `${msg} day ${hourDifference}` : `${hourDifference}`;
    difference = difference - hourDifference * 3600;
    console.log(`difference after hour ${difference}}`);
  }
  let minuteDifference = Math.floor(difference / 60);
  if (minuteDifference > 0) {
    msg = msg ? `${msg} hour ${minuteDifference}` : `${minuteDifference}`;
    difference = difference - minuteDifference * 60;
    console.log(`difference after minute ${difference}}`);
  }
  let secondsDifference = Math.floor(difference);
  msg = msg
    ? `${msg} minutes ${secondsDifference} seconds`
    : `${secondsDifference} seconds`;
  return msg;
};

export default getDateFromNow;

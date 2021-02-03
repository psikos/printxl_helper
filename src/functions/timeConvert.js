const timeConvert = (num) => {
  const minutes = Math.floor(num / 60);
  let seconds = num % 60;

  seconds < 10 ? (seconds = "0" + (seconds % 60)) : (seconds = seconds % 60);

  return minutes + ":" + seconds;
};

export default timeConvert;

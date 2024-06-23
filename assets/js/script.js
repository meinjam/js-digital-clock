const convertSingleToDouble = (number) => {
  if (number < 10) {
    return `0${number}`;
  }

  return number;
};

const convert24To12 = (hour) => {
  return hour % 12 || 12;
};

const getAmPm = (hour) => {
  const h = hour % 24;
  return h < 12 ? 'AM' : 'PM';
};

window.onload = function () {
  const hourOutput = document.querySelector('#hour');
  const minuteOutput = document.querySelector('#minute');
  const secondOutput = document.querySelector('#second');
  const amPmOutput = document.querySelector('#amPm');

  setInterval(() => {
    const now = new Date();

    const h = convert24To12(now.getHours());
    const m = now.getMinutes();
    const s = now.getSeconds();

    hourOutput.innerHTML = convertSingleToDouble(h);
    minuteOutput.innerHTML = convertSingleToDouble(m);
    secondOutput.innerHTML = convertSingleToDouble(s);
    amPmOutput.innerHTML = getAmPm(now.getHours());
  }, 1000);
};

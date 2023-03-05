// get data
const getData = async (city_name) => {
  const API_KEY = "f7203828348ffb8b4ccecb1d6d0b5a7c";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}&units=metric`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayData(data);
  } catch (e) {
    alert(e);
  }
};

// display data
const displayData = (data) => {
  const {
    main: { temp },
    name,
    weather: [{ main }],
  } = data;
  document.getElementById("city").innerText = name;
  document.getElementById("temperature").innerText = Math.round(temp);
  document.getElementById("lead").innerText = main;
};

// search button
document.getElementById("btn-search").addEventListener("click", function () {
  const searchTextValue = document.getElementById("text-search").value;
  getData(searchTextValue);
});

// run
getData("dhaka");

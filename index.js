async function checkdata() {
  try {
    let cn = document.getElementById("name").value;
    let res = await fetch(`https://api.covid19api.com/country/${cn}`);
    let res1 = await res.json();
    var data = "";
    res1.forEach((i) => {
      data += `Country:${i.Country} on ${i.Date} Active ${i.Active}  Deaths: ${i.Deaths}, Recovered: ${i.Recovered}<br> `;
      console.log(
        `Country:${i.Country} on ${i.Date} Active ${i.Active}  Deaths: ${i.Deaths}, Recovered: ${i.Recovered}`
      );
    });

    document.getElementById("mydata").innerHTML = data;
  } catch (error) {
    console.log("err", error);
  }
}

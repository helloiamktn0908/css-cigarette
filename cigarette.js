const ash = () => {
  let html = "";
  for (let i = 0; i < 250; i++) {
    html += `<div class="ash ash${i}"></div>`;
    console.log("hogehoge");
  }
  $(".fire").append(html);
};

ash();

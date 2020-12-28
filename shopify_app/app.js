$(document).ready(function (event) {
  var apikey = "3edea3a7";

  var result = "";

  $("#movieForm").submit(function (event) {
    event.preventDefault();

    var movie = $("#movie").val();
    console.log(movie);

    var url = "https://www.omdbapi.com/?apikey=" + apikey;

    $.ajax({
      method: "GET",
      data: { key: "value" },
      url: url + "&t=" + "moon",
      sucess: function (data) {
        console.log(data);
        result = `<h2>${data.title}</h2>`;
        $("#result").html(result);
      }
    });
  });
});

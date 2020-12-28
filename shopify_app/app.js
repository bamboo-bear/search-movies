$(document).ready(function (event) {
  var apikey = "3edea3a7";

  var result = "";

  $("movieForm").submit(function (event) {
    event.preventDefault();
  });

  var movie = $("#movie").val();

  var url = "http://www.omdbapi.com/?apikey=" + apikey;

  $.ajax({
    method: "GET",
    url: url + "&t=" + movie,
    sucess: function (data) {
      console.log(data);
    },
  });
});

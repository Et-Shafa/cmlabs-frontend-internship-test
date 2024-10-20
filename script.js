$(function() {
    $("section").load("Home.html");
    $("header").load("Header.html");

    $("div #pasta").click(function() {
        $("section").load("CategoryDetail.html");
    });
  });


$(document).ready(function() {

  // comments
  $(".comment-form a").on("click", function(e) {
    e.preventDefault();

    $.ajax({
      url: $(e.target).attr("href"),
      method: "get"
    })
      .done(function(msg) {
        $(e.target).addClass("hidden");
        $(e.target).parent().append(msg);
      });
  });

});

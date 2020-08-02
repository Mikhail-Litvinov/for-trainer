$('#subscribe').submit(function(e){
    e.preventDefault();
    $.ajax({
      url: "subscribe.php",
      type: "POST",
      data: $('#subscribe').serialize(),
      success: function(response) {
        openModalSub()
      },
      error: function(response) {
        openModalError()
     }
    });
});

$('#subscribe-footer').submit(function(e){
    e.preventDefault();
    $.ajax({
      url: "subscribe.php",
      type: "POST",
      data: $('#subscribe-footer').serialize(),
      success: function(response) {
        openModalSub()
      },
      error: function(response) {
        openModalError()
     }
    });
});
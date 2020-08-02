$('#contactForm').submit(function(e){
    e.preventDefault();
    $.ajax({
      url: "contact.php",
      type: "POST",
      data: $('#contactForm').serialize(),
      success: function(response) {
        openModalCont()
      },
      error: function(response) {
        openModalError()
     }
    });
});


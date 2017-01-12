$(document).ready(function() {
  $("#buy-a-gnome").submit(function(event) {
    var gnome = $("input:radio[name=gnome]:checked").val();
    var name = $("input#name").val();
    var addressLine1 = $("input#address-line1").val();
    var addressLine2 = $("input#address-line2").val();
    var addressCity = $("input#address-city").val();
    var addressState = $("input#address-state").val();
    var addressZip = $("input#address-zip").val();

    $(".receipt-name").text(name);
    $(".receipt-address-line1").text(addressLine1);
    $(".receipt-address-line2").text(addressLine2);
    $(".receipt-address-city-state-zip").text(addressCity + ", " + addressState + " " + addressZip);
    $(".receipt-gnome").text(gnome);

    $("#receipt").show();

    event.preventDefault();
  });
});

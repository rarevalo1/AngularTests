console.log("got here");
var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
    console.log(msg);
};


page.open("https://photorank.me/admin/login", function(status) {
    if ( status === "success" ) {
        page.evaluate(function() {
              document.querySelector("input[name='email']").value = "ron@olapic.com";
              document.querySelector("input[name='pass']").value = "dfkdjfdk";
              document.querySelector("#dologin").submit();

              console.log("Login submitted!");
        });
        window.setTimeout(function () {
          page.render('colorwheel.png');
          phantom.exit();
        }, 5000);
   }
});
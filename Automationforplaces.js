//Add places script

var s = ['https://www.facebook.com/101hotelreykjavik/?fref=ts',
'https://www.facebook.com/abbeyglencastlehotel/',]
var i = 0;

(function loop() {
  $('input#new-hash').val(s[i]);
 $('a.#new-collection').click();
    if (++i < s.length) {
        setTimeout(loop, 300);  // call myself in 3 seconds time if required
    }
})();

//add places script

var s = [
]
var i = 0;

(function loop() {
  $('input#new-hash').val(s[i]);
 $('a.#new-collection').click();
    if (++i < s.length) {
        setTimeout(loop, 200);  // call myself in 2 seconds time if required
    }
})();


//whitelist script

var s = ["exp1","exp2"]
var i = 0;

(function loop() {
  $('input[name="username"]').val(s[i]);
  $('input#user-submit').click();

    if (++i < s.length) {
        setTimeout(loop, 200);  // call myself in 3 seconds time if required
    }
})();

$('a.delete-collection').click(data('rel', '5342'))
$('.ui-button-text').click()

for (var i = 0; i < $('tr').length; i++) {
	$('.on_off').click();

	if(i++ <$('tr').length){
		setTimout(loop, 200)
	}
}



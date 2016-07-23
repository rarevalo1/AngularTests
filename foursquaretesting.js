var client_secret = 'HXPPPMBTMZM2PDLIRWVHQ2VJHAIAHIXWK04ESZICOSHP2UMM';
var client_id = '0TA1OMMCO5X0XS3IGPZEALZE1BQKIYMNWRW2XV2OPEWIZPDY';
// var city 
var url = "https://api.foursquare.com/v2/venues/search" + "?client_id=" + client_id +"&client_secret=" + client_secret + '&v=20160101' + "&near=" 
console.log(url)

function find(city, query) {
	var city = city
	var result = url + city + '&query='+ query ;
	console.log(result)
}



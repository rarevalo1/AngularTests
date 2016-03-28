var called = 0;
var OlapicCallback = OlapicCallback || {};
OlapicCallback.olapicWallItemsInjected = fucntion(w) {
    var filters = {
        dearanthro: 51319, //data-id's for all filters present 
        clothing: 40307,
        shoesandaccessories: 53160,
        houseandhome: 18963,
        beauty: 664014
    };

    if (called == 0) {
        if (getParamaterByName("olapicFilter") != "") {
            window.setTimeout(function() {
                oQuery('#olapic-filters ul li [data-id="' + filters[getParamaterByName("olapicFilter")] + '"]').click();
            }, 300);
            called++;
        }
    }

    function getParamaterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
        var results = regex.exec(window.location.search)
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ").toLowerCase());
    }
}

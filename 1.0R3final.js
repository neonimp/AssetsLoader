//assets loader plugin copyright Ajxlabs©2013 proprietary do not redistribute to redistribute drop us a e-mail
//ready to minify version
;
var aslObj;
var ajxObj;

function $$imports(url, datatype, callback, options) {
    var str;
    if (datatype === "" || datatype == 'undefined' || typeof (datatype) == 'undefined') {
        console.log('Exeption: datatype undefined');
        this.ext = function (url) {
            str = String(url);
            str.nam = url.substring(url.lastIndexOf('/') + 1);
            str.extension = str.substring(url.lastIndexOf('.') + 1);
            aslObj.aname = str.nam;
            aslObj.aext = str.extension;
            if (aslObj.aext == 'js') {
                aslObj.datatype = "script";
            } else {
                aslObj.datatype = "generic";
            }
        };
    }
    if (typeof ajxObj.call !== undefined) {
        ajxObj.call = new XMLHttpRequest();
    }
    ajxObj.open('get', url + "?" + options, true);
    ajxObj.send(null);
    ajxObj.onreadyStatechange = function  () {
        if(ajxObj.readyState == 4 && ajxObj.status == 200){
            callback(ajxObj.resposeText);
        }
    };
}
;

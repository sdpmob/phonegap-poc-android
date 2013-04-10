$(document).ready(function (){
	var myArray = new Array();
	myArray["name"] = "raul";
	myArray["email"] = "rramirez@verizon.com";
	myArray["regId"] = "e.regid";
    console.log('before post');
	post_to_url("http://10.50.26.200:8888/register.php",myArray,'POST');
    console.log('after post');
});


function post_to_url(path, params, method) {
    method = method || "post"; // Set method to post by default, if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
         }
    }

    document.body.appendChild(form);
    form.submit();
}
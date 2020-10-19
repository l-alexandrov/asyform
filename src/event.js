import serialize from "./serialize";

export default function AEvent(form){
    let method = form.method;
    let url = (method !== 'GET') ? form.action : form.action+"?"+serialize(form);
    let data = new FormData(form);
    let xhr = new XMLHttpRequest();

    // Create and send a GET request
    // The first argument is the post type (GET, POST, PUT, DELETE, etc.)
    // The second argument is the endpoint URL
    xhr.open(method.toUpperCase(), url);
    if(method !== 'GET'){
        let header = (typeof form.enctype !== "undefined") ? form.enctype : "application/x-www-form-urlencoded";
        xhr.setRequestHeader("Content-Type", header);
    }
    // Setup our listener to process completed requests
    xhr.onload = function () {
        // Process our return data
        if (xhr.status >= 200 && xhr.status < 300) {
            // Runs when the request is successful
            console.log(xhr.responseText);
        } else {
            // Runs when it's not
            console.log(xhr.responseText);
        }
    };
    xhr.send(data);
}
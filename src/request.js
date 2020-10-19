export default function Request(method, data, url){
    let xhr = new XMLHttpRequest();

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
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

    // Create and send a GET request
    // The first argument is the post type (GET, POST, PUT, DELETE, etc.)
    // The second argument is the endpoint URL
    xhr.open(method.toUpperCase(), url);
    xhr.send();

}
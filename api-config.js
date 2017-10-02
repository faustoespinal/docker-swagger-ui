$(function() {
    // Grab the template script
    var theTemplateScript = $("#hb-api-template").html();

    // Compile the template
    var theTemplate = Handlebars.compile(theTemplateScript);

    // This is the default context, which is passed to the template
    var context = {
        api: [
            { name: 'Simple', url: "http://localhost:8080/?url=http://localhost:8080/api/simple-api.yaml" },
            { name: 'Pets-1', url: "http://localhost:8080/?url=http://localhost:8080/api/pets-1.yaml" },
            { name: 'Pets-2', url: "http://localhost:8080/?url=http://localhost:8080/api/pets-2.yaml" },
            { name: 'IoT', url: "http://localhost:8080/?url=http://localhost:8080/api/iot.yaml" },
            { name: 'Oauth sample', url: "http://localhost:8080/?url=http://localhost:8080/api/oauth-api.yaml" },
            { name: 'Pets-3', url: "http://localhost:8080/?url=http://localhost:8080/api/pets-1.yaml" },
        ]
    };

    // Pass our data to the template
    var theCompiledHtml = theTemplate(context);

    // Add the compiled html to the page
    $('.hb-api-content').append(theCompiledHtml);
});
/*function onSignIn(googleUser) {
      // Useful data for your client-side scripts:
      var profile = googleUser.getBasicProfile();
      console.log("ID: " + profile.getId()); // Don't send this directly to your server!
      console.log('Full Name: ' + profile.getName());
      console.log('Given Name: ' + profile.getGivenName());
      console.log('Family Name: ' + profile.getFamilyName());
      console.log("Image URL: " + profile.getImageUrl());
      console.log("Email: " + profile.getEmail());

      // The ID token you need to pass to your backend:
      var id_token = googleUser.getAuthResponse().id_token;
      console.log("ID Token: " + id_token);
      document.getElementById("info-name").innerHTML = profile.getGivenName();
      document.getElementById("info-detail").innerHTML = profile.getEmail() + "\n" + profile.getName();
    }*/

    $(document).ready(function()
    {
        // -- define your function
        $.onSignIn = function(googleUser)
        {
          //your code here
          var profile = googleUser.getBasicProfile();
          console.log("ID: " + profile.getId()); // Don't send this directly to your server!
          console.log('Full Name: ' + profile.getName());
          console.log('Given Name: ' + profile.getGivenName());
          console.log('Family Name: ' + profile.getFamilyName());
          console.log("Image URL: " + profile.getImageUrl());
          console.log("Email: " + profile.getEmail());
    
          // The ID token you need to pass to your backend:
          var id_token = googleUser.getAuthResponse().id_token;
          console.log("ID Token: " + id_token);
          document.getElementById("info-name").innerHTML = profile.getGivenName();
          document.getElementById("info-detail").innerHTML = profile.getEmail() + "\n" + profile.getName();
        }

        // -- manually call the function once
    $.myFunctionName(); 

    // -- add a callback to blur on an input
    $("#general").hide();
    $("#info").show();

    
});
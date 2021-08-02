function onSignIn(googleUser) {
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
      document.getElementById("owner").innerHTML =  profile.getGivenName() ;
      document.getElementById("disply-name").innerHTML = profile.getName();
      document.getElementById("signout").innerHTML = "<a href=\"#\" onclick=\"signOut();\">Sign out</a>";
      document.getElementById("email").innerHTML = "Signed In as "+ profile.getEmail();
    }

const initApple = () => {
  window.AppleID.auth.init({
    clientId: "com.example.app.signin.dunkin", // This is the service ID we created.
    scope: "name email", // To tell apple we want the user name and emails fields in the response it sends us.
    redirectURI: "https://01pragya.github.io", // As registered along with our service ID
    state: "origin:web", // Any string of your choice that you may use for some logic. It's optional and you may omit it.
    usePopup: true, // Important if we want to capture the data apple sends on the client side.
  });
};

const singInApple = async () => {
   try {
     const data = await AppleID.auth.signIn();
     return data;
      }
   catch ( error ) {
     //handle error.
         console.log("error is there");
      }

};



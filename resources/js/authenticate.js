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


const signInApple = () => { 
      alert("Hello");
           window.AppleID.auth.init({
                clientId : 'com.example.app.signin.dunkin',
                scope : 'name email',
                redirectURI : 'https://01pragya.github.io',
               // state : 'openssl_random_pseudo_bytes',               
                usePopup : true //or false defaults to false
            });
         
         const response = async () => {      
            try {
                 const data = await AppleID.auth.signIn();
                  if(Object.keys(data)==1){
                        console.log(data);
                       // console.log(data.user);
                  }
                  else{
                        console.log("user already exist");
                        console.log(data.authorization);
                  }
            } catch ( error ) {
                 //handle error.
                  console.log("failure");
            }
               
         }
         response();
      
      
}



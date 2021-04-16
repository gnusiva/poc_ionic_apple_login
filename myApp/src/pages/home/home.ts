import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { SignInWithApple, AppleSignInResponse, AppleSignInErrorResponse, ASAuthorizationAppleIDRequest } from '@ionic-native/sign-in-with-apple/ngx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
    // private signInWithApple: SignInWithApple
    ) {

  }

  signinApple(): void {
    // this.signInWithApple.signin({
    //   requestedScopes: [
    //     ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName,
    //     ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail
    //   ]
    // })
    // .then((res: AppleSignInResponse) => {
    //   // https://developer.apple.com/documentation/signinwithapplerestapi/verifying_a_user
    //   alert('Send token to apple for verification: ' + res.identityToken);
    //   console.log(res);
    // })
    // .catch((error: AppleSignInErrorResponse) => {
    //   alert(error.code + ' ' + error.localizedDescription);
    //   console.error(error);
    // });

    window.cordova.plugins['SignInWithApple'].signin(
      { requestedScopes: [0, 1] },
      function(succ){
        console.log(succ)
        alert(JSON.stringify(succ))
      },
      function(err){
        console.error(err)
        console.log(JSON.stringify(err))
      }
    )
    
  }

}

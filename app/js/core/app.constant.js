(function() {
  'use strict';

  angular
    .module('app')
    .constant('server', {
      host: 'http://localhost',
      port:'2403',
      dashboard:"/dashboard-details"

    })

    .constant('langMessage',{
      EnterFirstName:"Enter First Name",
      EnterLastName:"Enter Last Name",
      EnterMobileNo:"Enter Mobile No",
      EnterEmailId:"Enter Email Id",
      EnterAddress:"Enter Address",
      EnterPassword:"Enter Password",
      EnterConfirmPassword:"Enter Confirm Password",
      PasswordMismatch:"Password Mismatch",
      UserAlreadyExist:"User Already Exist",
      EnterStartTime:"Enter Start Time",
      EnterEndTime:"Enter End Time",
      SignInSuccessfully:"SignIn Successfully",
      EnterOldPassword:"Enter Old Password",
      EnterNewPassword:"Enter New Password",
      ReEnterNewPassword:"Re-enter New Password",
      PasswordChangedSuccessfully:"Password Changed Successfully"
    });
})();

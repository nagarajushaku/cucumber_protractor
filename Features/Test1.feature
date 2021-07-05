Feature: Test login application

    Scenario:Test login page 
        Given TC_L001 Navigate to the login page "https://staging.tryoncourse.com/sign-in"
        When TC_L002 Click on Sign-In without entering the username and password
        When TC_L003 Start to type your When step here Enter in-correct password "mamatha@zibtek.in" and "12345678"
        When TC_L004 Enter in-correct username "bcde@gmail.com" and "123456"
        When TC_L005 Enter in-correct username and capture error message "abcdgmail.com"
        When TC_L006 Enter 4 digit password and capture the error "1234"
        When Tc_L007 & Tc_L008 User should navigate to the forgot password screen by clicking on the Forgot Password link
        When Tc_L009 To capture the error without entering the email
        When Tc_L010 User enters invalid email and click on forgot password "abcdgmail.com"
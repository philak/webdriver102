const commonFunc = require('../callerFunc/commonFunction');


class SignInPage {


    get signInbutton(){ return $('.signin-form__submit');}  
    inputUsersame = '#username';
    inputPassword = '#password';
    vblankUserHelperText = '#username-helper-text';
    vblankPwdHelperText = '#password-helper-text';
    vincorrectPwdAndUserHelperText = '//*[text() = "Please enter a valid username/password"]';
    signInHeader = '#root h1';



   async openUrl(){
        await browser.url('/');
        await browser.maximizeWindow();     
    }
//Creation Date: 09 02 2022    
//Created By: Phil 
//Last Updated Date:
//Last Updated By: 
//Function Description:   /**calling function to enter username */
//Parameters/Arguments:Parameter1: N/A  
    async enterUsername(username){
           await commonFunc.util.textBox(this.inputUsersame,username);  
    }
    
//Creation Date: 09 02 2022     
//Created By: Phil 
//Last Updated Date:
//Last Updated By: 
//Function Description:   /**calling function to enter password*/
//Parameters/Arguments:Parameter1: N/A  
    async enterPassword(password){
           await commonFunc.util.textBox(this.inputPassword,password);  

    }
//Creation Date: 09 02 2022     
//Created By: Phil 
//Last Updated Date:
//Last Updated By: 
//Function Description:   /**calling function for click Sign in */
//Parameters/Arguments:Parameter1: N/A   
    async clkSingIn(){
        await this.signInbutton.waitForDisplayed();
        await this.signInbutton.click();
    }

 
//Creation Date: 09 02 2022     
//Created By: Phil 
//Last Updated Date:
//Last Updated By: 
//Function Description:  /**Function to login */  
//Parameters/Arguments:Parameter1: {username} = String(username),{password} = string(password)
    async performLogin(username,password){
        await this.enterUsername(username);
        await this.enterPassword(password)
        await this.clkSingIn();
    }

    
//Creation Date: 09 02 2022     
//Created By: Phil 
//Last Updated Date:
//Last Updated By: 
//Function Description: /**verify notification for invalid login details and also Sign In header */
//Parameters/Arguments:Parameter1: {notification} = String(text verifications),{typeNotication} = switch-case values e.g string(IncorrectPassword)


async loginMsgNoticationOrHeader(notification,typeNotication){
    switch(typeNotication) {
        case "IncorrectPassword":
            await expect(notification).toEqual(await commonFunc.util.getTextValue(this.vincorrectPwdAndUserHelperText));
          break;
        case "IncorrectUsername":
            await expect(notification).toEqual(await commonFunc.util.getTextValue(this.vincorrectPwdAndUserHelperText));
          break;
        case "BlankUsername":
            await expect(notification).toEqual(await commonFunc.util.getTextValue(this.vblankUserHelperText));
          break;
        case "BlankPassword":
            await expect(notification).toEqual(await commonFunc.util.getTextValue(this.vblankPwdHelperText));
            break;
        case "SignInHeader":
            await expect(notification).toEqual(await commonFunc.util.getTextValue(this.signInHeader));
          break;
        default:
          throw new Error('Incorrect syntax: '+ typeNotication)
         }
    }


}
module.exports =  new SignInPage(); 
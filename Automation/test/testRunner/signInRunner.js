
import Page from '../callerFunc/pageCaller';
import Data from '../callerFunc/dataCaller';

const commonFunc = require('../callerFunc/commonFunction');
/**Run beforeEach on every test - open url */

beforeEach( function(){
    Page.signInPage.openUrl();
})

describe('Login activities', ()=> {

      it('Sign in with incorrect password and verify the unsuccesful notification', async () => {
          await Page.signInPage.performLogin(Data.singInData.validLoginUserAndPswd[0], Data.singInData.validLoginUserAndPswd[1] +"wrong");
          await Page.signInPage.loginMsgNoticationOrHeader(Data.singInData.incorrectPasswordTxt,"IncorrectPassword");
         
      
      });

      it('Sign in with incorrect username and verify the unsuccesful notification', async () => {
          await Page.signInPage.performLogin(Data.singInData.validLoginUserAndPswd[0] +"wrong", Data.singInData.validLoginUserAndPswd[1]);
          await Page.signInPage.loginMsgNoticationOrHeader(Data.singInData.incorrectUsernameTxt,"IncorrectUsername");
          
      
      });
      it('Sign in with blank username and verify the unsuccesful notification', async () => {
          await Page.signInPage.performLogin("<empty>", Data.singInData.validLoginUserAndPswd[1]);
          await Page.signInPage.loginMsgNoticationOrHeader(Data.singInData.blankUsernameTxt,"BlankUsername");

      
      });
      
      it('Sign in with blank password and verify the unsuccesful notification', async () => {
          await Page.signInPage.performLogin(Data.singInData.validLoginUserAndPswd[0], "<empty>");
          await Page.signInPage.loginMsgNoticationOrHeader(Data.singInData.blankPasswordTxt,"BlankPassword");
      
      });

      it('Sign in with valid details succesfully and verify Sign page and feedback input page', async () => {
        await Page.signInPage.loginMsgNoticationOrHeader(Data.singInData.signInHeaderTxt,"SignInHeader");
        await Page.signInPage.performLogin(Data.singInData.validLoginUserAndPswd[0], Data.singInData.validLoginUserAndPswd[1]);
        await expect("Feedback Form").toEqual(await commonFunc.util.getTextValue(Page.feedbackFormPage.feedbackHeader));
   
   });


});


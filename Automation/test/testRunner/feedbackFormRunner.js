import Page from '../callerFunc/pageCaller';
import Data from '../callerFunc/dataCaller';

/** Run before once - open url and login*/
before( async function(){
  await Page.signInPage.openUrl();
  await Page.signInPage.performLogin(Data.singInData.validLoginUserAndPswd[0], Data.singInData.validLoginUserAndPswd[1]);
});

describe('Feedback page - verify default values - fill the mandatory fields and send message - check behaviour when a required field is not entered', ()=> {

  it('Verify feedback form default input values', async () => {
    await Page.feedbackFormPage.verifyfeedbackDefaultInputValues(Data.feedbackData.deafultValues);
    await Page.feedbackFormPage.verifyfeedbackDefaultMsgArea('Dear Sir/Madam...');
    await Page.feedbackFormPage.verifyfeedbackHeaderAndSubtitle();
    

});

   it('Verify feedback form input labels and Priority options', async () => {
    await Page.feedbackFormPage.verifyfeedbackPriorityLabels(Data.feedbackData.priorityItems);
    await Page.feedbackFormPage.verifyfeedbackLabels(Data.feedbackData.pageLabels);
   

});

it('Enter input values without a mandatory field then Send feedback button is disabled', async () => {
  await Page.feedbackFormPage.enterFeedbackItems(Data.feedbackData.inputDataWithEmptyFirstname);
  await Page.feedbackFormPage.checkIfSendfeedbackEnableOrNot('disabled');

});
it('Enter/select into the Feedback form and send message - verify Send feedback button is enabled and succesful message', async () => {
  await Page.feedbackFormPage.enterFeedbackItems(Data.feedbackData.inputData);
  await Page.feedbackFormPage.checkIfSendfeedbackEnableOrNot('enabled');
  await Page.feedbackFormPage.clkOnSendFeedback()
  await Page.feedbackFormPage.verifyfeedbackMsg();

});

});

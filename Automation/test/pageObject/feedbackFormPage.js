const commonFunc = require('../callerFunc/commonFunction');


class feedbackFormPage {
    /**********
     * Controls for Feedback pages
     * 
     */

    /**Feedback form web elements */
    feedbackHeader = '#root h1';
    feedbackSubHeader = '#root paragraph';
    firstname = '#firstname';
    lastname = '#lastname';
    email = '#email';
    phone = '#phone';
    company = '#company';
    postcode = '#postcode';
    priorityDropItem = '//*[@id="postcode"]//select';
    feedback= '#feedback';
    sendFeedback ='//*[text() = "Send Feedback"]';
    feedbackSubmitMsg = '#root h2';
    feedbackFormLabels ='#root label';
    priorityDropItem2 = '//*[@id="postcode"]//select/option';
    sendFeedButton='//form//button';
    inputListValues ='//form//input'


    /**Feedback form functions */

    enterFirstname(vFirstname){
        commonFunc.util.textBox(this.firstname,vFirstname);    
    }
    enterLastname (vLastname){
        commonFunc.util.textBox(this.lastname,vLastname);   
    }
    enterEmail(vEmail){
        commonFunc.util.textBox(this.email,vEmail);     
    }
    enterPhone(vPhone){
        commonFunc.util.textBox(this.phone,vPhone);     
    }
    enterCompany(vCompany){
        commonFunc.util.textBox(this.company,vCompany);    
    }
    enterPostcode(vPostcode){
        commonFunc.util.textBox(this.postcode,vPostcode);  
    }
    
 

//Creation Date: 30 01 2022   
//Created By: Phil 
//Last Updated Date:
//Last Updated By: 
//Function Description:  /**Function for textBox for a text to be separated with new -- separated with "%" */
//Parameters/Arguments:Parameter1: {myText) = String -- separated with "%" e.g Dear Sir, %hHope you are well. ) 
   async enterMsgFeedback(myText){
        const  vText = myText.replace(/%/g, "\r\n");
        await commonFunc.util.textBox(this.feedback,vText);  
    } 

//Creation Date: 30 01 2022   
//Created By: Phil 
//Last Updated Date:
//Last Updated By: 
//Function Description:  /**Fill all the required fields in Feedback page to send message  */
//Parameters/Arguments:Parameter1: {inputData = String in array format) 
         
    async enterFeedbackItems(inputData){ 
         await this.enterFirstname(inputData[0]);     
         await this.enterLastname (inputData[1]);  
         await this.enterEmail(inputData[2]); 
         await this.enterPhone(inputData[3]); 
         await this.enterCompany(inputData[4]); 
         await this.enterPostcode(inputData[5]);   
         await this.selectPriority(inputData[6]);  
         await this.enterMsgFeedback(inputData[7]); 
        }
     
//Creation Date: 30 01 2022   
//Created By: Phil 
//Last Updated Date:
//Last Updated By: 
//Function Description:  /**Function to click on Send feedback botton  */
//Parameters/Arguments:Parameter1: {inputData = String in array format)    

        async clkOnSendFeedback(){
            await $(this.sendFeedback).click(); 
        }

//Creation Date: 30 01 2022   
//Created By: Phil 
//Last Updated Date:
//Last Updated By: 
//Function Description:  /**Function to select a drop down  */
//Parameters/Arguments:Parameter1: {inputData = String in array format)   

        async selectPriority(vPriority){
           // await $(this.priorityDropItem).selectByVisibleText(vPriority); 
            await commonFunc.util.selectDropItem(this.priorityDropItem,vPriority,'Text')    
            }  

//Creation Date: 30 01 2022   
//Created By: Phil 
//Last Updated Date:
//Last Updated By: 
//Function Description:  /**Function for Send feedback button status  */
//Parameters/Arguments:Parameter1: {status = String e.g 'disabled' or 'enabled)  

        async checkIfSendfeedbackEnableOrNot(status){
           const getAttr =await commonFunc.util.returnAttributevalue(this.sendFeedButton,'class');
           var valeuBool = 'notStatus'
            if(await getAttr.indexOf('disabled') !==-1){
              valeuBool = 'disabled'
           }else{
              valeuBool = 'enabled'
           }
           await expect(valeuBool).toEqual(status);
        }
    
/**
 * Controls verification in feedback
 */
    async verifyfeedbackMsg(){
        await expect("Thank you for your feedback").toEqual(await commonFunc.util.getTextValue(this.feedbackSubmitMsg));
    }
    async verifyfeedbackHeaderAndSubtitle(){
        await expect("Feedback Form").toEqual(await commonFunc.util.getTextValue(this.feedbackHeader));
        await expect("Fields marked as * are required.").toEqual(await commonFunc.util.getTextValue(this.feedbackSubHeader));
    }
    async verifyfeedbackLabels(valuesItems){
        await commonFunc.util.verifyListValues(valuesItems,this.feedbackFormLabels);
    }
    async verifyfeedbackDefaultInputValues(valuesItems){
        await commonFunc.util.verifyListValues(valuesItems,this.inputListValues);
    }
    async verifyfeedbackDefaultPriority(valuesItem){
        const inputUser = await $(this.priorityDropItem).getValue();
        await expect(valuesItem).toEqual(inputUser);
    }
    async verifyfeedbackDefaultMsgArea(valuesItem){
        await expect(valuesItem).toEqual(await commonFunc.util.getTextValue(this.feedback));
    }
    async verifyfeedbackPriorityLabels(valuesItems){
        await commonFunc.util.verifyListValues(valuesItems,this.priorityDropItem2);   
    }
    
}
module.exports =  new feedbackFormPage(); 
module.exports = {
     /** Login Detail Username and password  ---Sign In Page*/
     validLoginUserAndPswd: ['l.jenkins','hunter2'],
    
     /**Feedback form input labels*/
     pageLabels: ['First name *','Last name *','Email Address *','Phone Number *','Company','Postcode *','Priority','Your Feedback *'],

      /**Feedback form's priority options */
     priorityItems: ['Normal','High','Urgent'],

     deafultValues: ['<empty>','<empty>','<empty>','<empty>','<empty>','<empty>'],

     /**Feedback form input data as per above [feedbackFormPageLabels:] order*/ 
     inputData:["Tom","sfgsh","sdagfs@sggs.com","06868777777","gsfgsfgfs ltd", "XD45 6gg", "High","Hi Tester,%Hope you are enjoying testing. %Send the report to me later today.%%Regards,%Junior Tester"],
      /**Feedback form input data as per above [feedbackFormPageLabels:] order*/ 
     inputDataWithEmptyFirstname:["","sfgsh","sdagfs@sggs.com","06868777777","gsfgsfgfs ltd", "XD45 6gg", "High","Hi Tester,%Hope you are enjoying testing. %Send the report to me later today.%%Regards,%Junior Tester"]

 }
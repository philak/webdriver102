const jsonAssertion = require("soft-assert");
class util {

//Creation Date: 09 02 2022   
//Created By: Phil 
//Last Updated Date:
//Last Updated By: 
//Function Description:  /**Common function to get and return text*/  
//Parameters/Arguments:Parameter1: {element} = web element locator
    async getTextValue(element){
        let getText =  await $(element).getText();
        if(getText == null || getText == ""){
          getText = "<empty>"
        }
        return getText;
    }

//Creation Date: 09 02 2022     
//Created By: Phil 
//Last Updated Date:
//Last Updated By: 
//Function Description:  /**Common function to verify list of get text in array format*/  
//Parameters/Arguments:Parameter1: {valueItems} = expected values in Array format,{elements} = web element locators
    async verifyListValues(valueItems,elements){
        const webElements =  await $$(elements);
        const actualvalueItems =[];
        for(const link of webElements){     
          let valueNew = await link.getText(); 
            if(valueNew == null || valueNew == ""){
              valueNew = "<empty>"
            } 
            actualvalueItems.push(valueNew.trim());
        }
      await expect(valueItems).toEqual(actualvalueItems);       
    }

//Creation Date: 09 02 2022     
//Created By: Phil 
//Last Updated Date:
//Last Updated By: 
//Function Description:  /**Common function to return value of attribute*/  
//Parameters/Arguments:Parameter1: {initialElement} = element in the same tag as per the second param,{attrToRetrievevalue) = string(e.g 'class')
    async returnAttributevalue(initialElement,attrToRetrievevalue){
      const attrValue = await $(initialElement).getAttribute(attrToRetrievevalue);
      return attrValue;
  }

//Creation Date: 09 02 2022    
//Created By: Phil 
//Last Updated Date:
//Last Updated By: 
//Function Description:  /**Common function to return value of attribute*/  
//Parameters/Arguments:Parameter1: {initialElement} = element in the same tag as per the second param,{attrToRetrievevalue) = string(e.g 'class')
selectDropItem(element,selectValue,typeControl){
  switch(typeControl) {
    case "Text":
      $(element).selectByVisibleText(selectValue); 
      break;
    case "Index":
      $(element).selectByIndex(selectValue);
      break;
    case "Attribute":
     $(element).selectByAttribute(selectValue[0],selectValue[1]);
      break;
    default:
      throw new Error('Incorrect syntax: '+ typeControl)
     }
 
}
//Creation Date: 09 02 2022  
//Created By: Phil 
//Last Updated Date:
//Last Updated By: 
//Function Description:  /**Common function to clear input field and enter text*/  
//Parameters/Arguments:Parameter1: {element} = web element locator , {value} = value to be entered - pass "<empty>" for null or ""
    async textBox(element,value){
     if(value != "<empty>"){
        await $(element).clearValue();
        await $(element).addValue(value); 
     }else{
        await $(element).addValue(""); 
      }
  }


}
    module.exports =  new util();
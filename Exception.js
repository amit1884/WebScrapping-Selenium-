var webdriver = require ('selenium-webdriver') , // including webdriver
 By = webdriver.By; //obj have properties -> id xpath className name
 /* if you are using the chrome driver via npm install chromedriver@2.43 
 uncomment below line, otherwise dont have to include it
 /*var chrome = require('chromedriver'); // requiring chrome driver installed via npm command
 */
var driver = new webdriver.Builder() //driver provide interaction with hardware
 .forBrowser('chrome') //mentioning the browser
 .build();// Opening our browser

  driver.get('file://' + __dirname + '/Exception.html'); //getting the URL

  /**
   * Calls the method after 2 seconds of delay.
   */
Pause(2,ScrapeExample);
/**
 * Scrapping the page for the demonstration of various selenium elements and methods
 */
function ScrapeExample(){
//statement
console.log("Start Scraping the page...");
             driver.findElement(By.id('name')).sendKeys("Jazeb Akram Instructor");
             driver.findElement(By.xpath('//input[[@value="female"]')).click();
             driver.findElement(By.name('vehicle3')).click();



Pause(3,QuitDriver);
}
/**
adding seleinum wait
 * Delay in seconds
 * @param int time
 * @param function func
 */
function Pause(Time,FuncName){
  setTimeout(FuncName,Time*1000);
}

/**
* Closing and then quiting the driver after scrapping has been done
*/
function QuitDriver(){
  driver.close();
  driver.quit();
}

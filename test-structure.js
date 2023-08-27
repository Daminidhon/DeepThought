import { Selector, fixture, test } from "testcafe"; // first imported testcafe selectors

fixture `Login Page` // declare the fixture
.page `https://dev.deepthought.education/login`; // specify the start page of the given website

//then created a test and placed code within it
test('Test successful login with vaild creedetials.', async t => {

    await t 
    .typeText(Selector('#username'), 'daminidhondge')
    .typeText(Selector('#password'), 'Deep@123')
    .click(Selector('.btn'))
   
    // Used the assertion to check if actual header text equals expected text

})

test('test with Invalid credentials.', async t => {

    await t 
    .typeText(Selector('#username'), 'daminidhondge')
    .typeText(Selector('#password'), 'Deep@2023')
    .click(Selector('.btn'))
    
})

test('Validate that appropriate error messages are displayed for invalid login attempts.', async t => {

    await t 
    .typeText(Selector('#username'), 'daminidhondge')
    .typeText(Selector('#password'), 'Deep@2023')
    .click(Selector('.btn'))
    .expect(Selector('p').withExactText('Invalid login credentials').exists).ok(); 
     
})

test('On successful login, validate that the user is redirected to the dashboard screen.', async t => {

    await t 
    .typeText(Selector('#username'), 'daminidhondge')
    .typeText(Selector('#password'), 'Deep@123')
    .click(Selector('.btn'))
    .expect(Selector('h5').withExactText('Welcome to DeepThought').exists).ok();    
    
})

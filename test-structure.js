import { Selector, fixture, test } from "testcafe"; // first imported testcafe selectors

fixture `LoginPage` // declare the fixture
.page `https://dev.deepthought.education/login`; // specify the start page of the given website

//then created a test and placed code within it

test('test with valid credentials', async t => {

    await t 
    .typeText(Selector('#username'), 'daminidhondge')
    .typeText(Selector('#password'), 'Deep@123')
    .click(Selector('.btn'))
    .expect(Selector('h5').withExactText('Welcome to DeepThought').exists).ok(); 
    // Used the assertion to check if actual header text equals expected text

})

test('test with Invalid credentials', async t => {

    await t 
    .typeText(Selector('#username'), 'daminidhondge')
    .typeText(Selector('#password'), 'Deep@2023')
    .click(Selector('.btn'))
    .expect(Selector('#login-error-notify').innerText).eql('Login Unsuccessful');
})

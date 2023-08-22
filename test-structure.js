import { Selector, fixture, test } from "testcafe";

fixture `LoginPage`
.page `https://dev.deepthought.education/login`;

test('test with valid credentials', async t => {

    await t 
    .typeText(Selector('#username'), 'daminidhondge')
    .typeText(Selector('#password'), 'Deep@123')
    .click(Selector('.btn'))
    .expect(Selector('h5').withExactText('Welcome to DeepThought').exists).ok();
   
})

test('test with invalid credentials', async t => {

    await t 
    .typeText(Selector('#username'), 'daminidhondge')
    .typeText(Selector('#password'), 'Deep@2023')
    .click(Selector('.btn'))
    .wait(60000) 
})
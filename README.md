# type-tank
## Autocomplete for Arras!?!?!
- Makes it easier for you to make tanks with autocomplete for all properties! Don't have to constantly go back and forth to see what properties you need!

## Requirements:
- A **Code Editor** that **supports JSDoc and has Autocomplete** *(sorry glitch users)*
- APS Template (look at the bottom of this readme)

## How to use:
- You can put the `type-tank.js` in `server/lib` then add
```js
/**
* @typedef {import('./type-tank.js').Tank} Tank
*/
```
ontop of your `definitions.js` file
*(You can also include the `enum Color` that comes with the file!)*

Sometimes that method doesn't work so you can just paste the entire file ontop of the `definitions.js` file like I did.

**Now to use it:**
- Just add
```js
/**
* @type {Tank}
*/
```
On top of a tank.

It should look like this
```js
/**
* @type {Tank}
*/

exports.basic = {
  ...
}
```

## What it should look like if you followed this tutorial correctly:

![image](https://github.com/Trioplane/type-tank/assets/87922281/99984ccb-c7cc-4f6f-a200-e0646e6f7ae7)
Or if you did the alternative one
![image](https://github.com/Trioplane/type-tank/assets/87922281/2ab30766-897f-4934-b4ba-41fccf95efe1)
...uhh yeah

Autocomplete
![image](https://github.com/Trioplane/type-tank/assets/87922281/dc841cbd-d002-4e59-ae6b-c5ffb203bc7c)
VSCode recognizing that `SIZE` is a number.
![image](https://github.com/Trioplane/type-tank/assets/87922281/d94921a7-5afe-40ef-b809-5a117c4cb312)
With an extra `Color` object/enum so you don't need to look at the color table.
![image](https://github.com/Trioplane/type-tank/assets/87922281/29e2cd9e-6c00-4e96-88d6-cd0c49cfdb81)

*(psst! this thing is for aps template, you can use it for other templates too but some colors and properties might not be supported)*

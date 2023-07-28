# type-tank
## Autocomplete for Arras!?!?!
- Makes it easier for you to make tanks with autocomplete for all properties! Don't have to constantly go back and forth to see what properties you need!

## Requirements:
- A **Code Editor** that **supports JSDoc and has Autocomplete** *(sorry glitch users)*
- APS Template (look at the bottom of this message)

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

*(psst! this thing is for aps template, you can use it for other templates too but some colors and properties might not be supported)*

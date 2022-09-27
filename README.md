# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @fatslabb/lotide`

**Require it:**

`const _ = require('@fatslabb/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

---
```javascript
_.assertArraysEqual(actual, expected)
```
* Tests if two object arrays are equal and logs true or false.
<br>
<br />

```javascript
_.assertEqual(actual, expected)
```
* Tests if two values are equal and logs true or false.
<br>
<br />

```javascript
_.assertObjectsEqual(actual, expected)
```
* Compares the value of two objects and logs true or false.
<br>
<br />

```javascript
_.countLetters(string)
```
* Takes a `string` and returns the number of ocurrences of each character.
<br>
<br />

```javascript
_.countOnly(allItems, itemsToCount)
```
* `allItems` takes an array of strings and returns an object with a count for each true value in `itemsToCount`.
<br>
<br />
```javascript
_.eqArrays(array1, array2)
```
* compares if two arrays are indentical and returns true or false.
<br>
<br />

```javascript
._findKey(object, (item) => {})
._findKey(object, callbackFn)
._findKey(object, function(item){})
```
* searches an `object` using a `callbackFn` and returns the first key once `callbackFn` returns a truthy value.
<br>
<br />

```javascript
_.findKeyByValue(object, value)
```
* searches an `object` and returns first key which contains the given `value`
<br>
<br />

```javascript
_.flatten(array)
```
* takes in an `array` of arrays and returns a new one-dimensional array.
<br>
<br />

```javascript
._head(array)
```
* takes an `array` and returns the element from the first index
<br>
<br />

```javascript
._letterPositions(string)
```
* takes a `string` and returns an object of characters with values set to their indices of occurance(s) in the `string`.
<br>
<br />

```javascript
._map(array, (item) => {})
._map(array, callbackFn)
._map(array, function(item){})
```
* takes in an `array` and return new array with each element modified by the `callbackFn`. 
<br>
<br />

```javascript
._middle(array)
```
* changes the contents of the `array` and returns only the element(s) its center. 
<br>
<br />

```javascript
._tail(array)
```
* removes the first element of the `array` and return a shallow copy.
<br>
<br />

```javascript
.takeUntil(array, (item) => {})
.takeUntil(array, callbackFn)
.takeUntil(array, function(item){})
```
* return a slice of the beginning of an `array` and stops once the `callbackFn` returns a truthy value.
<br>
<br />

```javascript
._without(array, itemRemoved)
```
* return a shallow copy of the `array` with the array item from the `itemRemoved` filtered out. 
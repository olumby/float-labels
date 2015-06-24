## Float Labels

This is a very light weight version of Float Labels. There are no dependencies, even the JavaScript is not required.

### Examples

#### CSS & JS Float Label

Using JavaScript the label remains floated when the input box looses focus.

![js](https://cloud.githubusercontent.com/assets/5549119/8319654/7b4a55fa-1a11-11e5-962f-ec84782bb651.gif)

``` html
<div class="form-item float-label">
    <input type="text" name="name" placeholder="John Doe">
    <label for="name">Name</label>
</div>
```

``` js
floatLabels.init({
    selector: '.float-label'
});
```

#### CSS Only Float Label

The css version reverts back to hide the label when the input box looses focus.

![css](https://cloud.githubusercontent.com/assets/5549119/8319651/790af72c-1a11-11e5-9209-88a1150ecb98.gif)

``` html
<div class="form-item float-label">
    <input type="text" name="name" placeholder="John Doe">
    <label for="name">Name</label>
</div>
```

### Options

You can pass options to Float Labels through the `init()` function.

``` js
floatLabels.init({
    selector: '.float-label', // Selector used to source elements
    jsClass: 'float-label-js', // Extra class added for css changes, must be same in css file
    contentAttr: 'data-content' // data attribute used
});
```

### Todo

* Tests
* Label source for JS version
* Float behavior for JS version

### License

Float Labels is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)

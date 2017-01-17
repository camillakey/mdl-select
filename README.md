# mdl-select
mdl-select is for Material Design life (https://getmdl.io/index.html, https://github.com/google/material-design-lite).  
This provides &lt;select&gt; material design.

# Usage
First, loads mdl and mdl-select.
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.blue_grey-blue.min.css" />
<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>

<script src="mdl-select.js"></script>
```

Then, you can use select element like this!
```html
<form action="#">
    <div class="mdl-select">
        <select id="select-sample1" name="select-sample1" class="mdl-select__select">
            <option class="mdl-select__item" value="value1">value1</option>
            <option class="mdl-select__item" value="value2">value2</option>
            <option class="mdl-select__item" value="value3">value3</option>
        </select>
        <label for="select-sample1">Please Select...</label>
    </div>
</form>
```

# License
MIT License.

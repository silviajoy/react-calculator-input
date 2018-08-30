
# React Calculator Input

A simple React component that renders a numeric input field with a calculator that pops up on focus.

## Set Up
Install the package

    npm install react-calculator-input
and import the css in your application

    import '[path_to_node_modules_folder]/react-calculator-input/lib/index.scss'
or copy it in your own css, you can find the [scss there](https://github.com/silviajoy/numeric-input-component/blob/master/lib/index.scss).

## Usage

Import the component 

    import NumericInput from 'react-calculator-input'
To use it, you need to set the `id` prop, which will be the `id` attribute of the `input`tag in the `html` (and the `for` attribute of the `label` tag, if any).

Other props you can play with:

| Prop | Prop Type | Required | Default |
| ------ | ------ |------ | ----- |
| `id` | String | Required | 
| `name` | String |  |
| `className` | String |  |
| `label` | String |  | 
| `labelPosition` | ["bottom", "top"] |  | "top"
| `labelClassName` | String |  |
| `calculatorBackground` | String |  | "#666"
| `calculatorKeyColor` | String |  | "#ccc"
| `format` | ["float", "integer"] |  | "float"

\
**id** \
The value of this prop will be the `id` attribute of the `input` tag and of the `for` attribute of the `label` tag, if any.

**name**
The value of this prop will be the `name` attribute of the `input` tag.

**className**
The value of this prop will be the `class` attribute of the `input` tag.

**label**
The value of this prop will be the content of the `label` tag. 
If you want an empty label, just type in the empty string `""` .

**labelPosition**
Define the position of the `label` tag in the html order. It can be either `"top"` or `"bottom"`. The default value is `"top"`. If you set `labelPosition="bottom"` the `html` will look something like this:

    <input id="myinput" type="number">
    <label for="myinput"> Age </label>

**labelClassName**
The value of this prop will be the `class` attribute of the `label` tag.

**calculatorBackground**
You should pass a `css` color property to this prop and you can set the background color of the calculator that pops up on `input` focus. Default color is `#666`

**calculatorKeyColor**
You should pass a `css` color property to this prop either. In this case you decide the color of the keypad keys. Default color is `#ccc`.

**format**
With this prop you decide if the input value will accept `"float"`ing point numbers or `"integer"`s only. Default value is `"float"`.


### Example

    <NumericInput id="myinput" label="Age" name="age"/>
will result in the following html:

    <div class="numericinput">
        <label for="myinput">Age</label>
        <input id="myinput" type="number" name="age" value="0">
        <!-- calculator stuff -->
    </div>


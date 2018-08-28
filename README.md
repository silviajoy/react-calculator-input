# React Calculator Input

A simple React component that renders a numeric input field with a calculator that pops up on focus.

## Set Up
Install the package

    npm install react-calculator-input
and import the css in your application

    import '[path_to_node_modules_folder]/react-calculator-input/lib/NumericInputStyles.css'
or copy it in your own css, you can find it [there](https://github.com/silviajoy/numeric-input-component/blob/master/lib/NumericInputStyles.css).

## Usage

Import the component 

    import NumericInput from 'react-calculator-input'
To use it, you should set the following attributes:

 - `id` will be the id of html input tag 
 - `name` will be the name attribute of html input tag
 - `label`will be the content of the input related label
 
### Example

    <NumericInput id="myinput" label="Age" name="age"/>
will result in the following html:

    <div class="numericinput">
	    <input id="myinput" type="number" name="age" value="0">
	    <label for="myinput">Age</label>
	    <!-- calculator stuff -->
	</div>
	


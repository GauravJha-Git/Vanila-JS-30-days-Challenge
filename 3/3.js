const inputs = document.querySelectorAll('.controls input'); //document.querySelectorAll('.controls input') selects all <input> elements inside an element with the class .controls

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    } //This function is executed when an input value changes.
    // this.dataset.sizing || '':
    // this refers to the input element that triggered the event.
    // this.dataset.sizing accesses the data-sizing attribute (if it exists) on the input element.
    // If the data-sizing attribute is not present, it defaults to an empty string ('').
    // document.documentElement.style.setProperty(...):
    // Updates a CSS variable (--variable-name) dynamically.
    // this.name: Gets the name attribute of the input, which corresponds to a CSS variable name.
    // this.value + suffix: Sets the new value for the CSS variable, appending a unit (like px or %) if needed.

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

    // First line: Adds an event listener for the "change" event.
    // This triggers handleUpdate when the input value is changed (e.g., after releasing a slider).
    // Second line: Adds an event listener for the "mousemove" event.
    // This ensures live updates as the user moves the slider (for smooth changes).
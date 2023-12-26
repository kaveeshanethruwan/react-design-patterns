# React design patterns

1. Layout components

   Component shouldn't know where they're being displayed.

   Better to pass as children not as props.

   1. Split screens
   2. lists and list items

2. Container components

   Components that take care of loading and managing data for their child components.

3. Controlled and uncontrolled components

   Uncontrolled components: Uncontrolled components, on the other hand, allow the DOM to maintain the state of the form elements. The values are not controlled by React's state but rather directly by the DOM, using refs to access their values when needed.

   Controlled components: In controlled components, form elements such as input, textarea, and select are controlled by React state. The component's state is the single source of truth for the input value, and the value is managed by the component through its state.

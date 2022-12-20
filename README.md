# component-example
Example of a react component library


Install Packages
```npm i```

Build
```npm run build```

Deploy
```npm deploy```

Use In Browser
```
<script src="https://unpkg.com/react@16.1.1/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.1.1/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/michael-test-components@1.0.4/lib/index.umd.js"></script>

<script>
  const Button = window.foobar.Button
  const MyButton = Button({primary: true, size: "large", backgroundColor: "red", label: "Test Button"})
  const parentElementId = 'root'
  ReactDOM.render(
    MyButton,
    document.getElementById(parentElementId)
  );
</script>
```

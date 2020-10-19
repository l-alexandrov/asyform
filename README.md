# 🛰️ asyform
Asyform makes your forms asynchronous. Forget about 👨‍💻 writing 😑 annoying similar handlers to make your form asyncy 👻!

1. Write your form html as it will be submitted synchronously and add `async` class to `<form>` tag
2. Include **asyform** `<script src="asyform.min.js"></script>`
3. Initialize **asyform**  
```js
<script>
    $.asyform('form.async');
</script>
```
_You can initialize **asyform** with different selector if you used different class name._
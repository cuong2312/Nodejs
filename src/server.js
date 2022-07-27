const express=reqaire('express');
const app=express();
const port=3000;
//router
app.get('/', (req, res, next) =>{
    console.log('/ trang home');
    res.send('<p>Đây là trang home</p>');
});

app.get('/product', (req, res, next) => {
    console.log('product');
    res.send('<p>Đây là trang product</p>');
});

app.get('/product/:id',(req ,res , next) => {
    console.log('product detail');
    res.send(`<p>Đây là trang product detail id: ${req.params.id}</p>`);
});

app.listen(port,()=>{
    console.log(``);
})
import express from 'express';
import cors from 'cors';
import productRouter from './src/features/Products/product.routes.js';

const app = express();


//connect with angular..
app.use(
    cors({
      allowedHeaders: ['Authorization', 'Content-Type']
    })
  );
  
app.get('/', (req, res) => {
  res.send('<h1>Hi, I am an E-Commerce app!!</h1>');
});

// All routes import here
app.use('/api/product', productRouter);

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port number ${port}`);
});

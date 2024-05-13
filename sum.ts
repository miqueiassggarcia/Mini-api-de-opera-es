import express, { Request, Response } from 'express';

const app = express();

app.get('/sum/:num1/:num2', (req: Request, res: Response): void => {
  const num1_str = req.query.num1 as string;
  const num2_str = req.query.num2 as string;

  if(num1_str === undefined || num2_str === undefined) {
    res.status(400).json({ error: 'Please provide both num1 and num2 parameters' });
    return;
  }

  const num1 = parseFloat(num1_str);
  const num2 = parseFloat(num2_str);

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).json({ error: 'Please provide both num1 and num2 parameters as numbers' });
    return;
  }
  
  const sum = num1 + num2;
  res.json({ "result": sum });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
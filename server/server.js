const express = require('express');
const cors = require('cors');

const app = express();
const  port = 5000;

app.use(cors());
app.use(express.json());

let items = [];

app.get('/api/items', (req, res) => {
  res.json(items);
});

app.post('/api/items', (req, res) => {
  const newItem = {
    id: items.length ? items[items.length - 1].id + 1 : 1,
    items: req.body.items,
    checked: false
  }
  items.push(newItem);
  res.json(newItem);
});

app.delete('/api/items/:id', (req, res) => {
  const {id} = req.params;
  items = items.filter(item => item.id !== parseInt(id))
  res.json({message: 'item deleted'})
});

app.put('/api/items/:id', (req, res) => {
  const { id } = req.params;
  const { checked } = req.body;

  const item = items.find(item => item.id === parseInt(id));
  if (item) {
    item.checked = checked;
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`)
})
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_SCHEMA, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const itemSchema = new mongoose.Schema({
  name: String,
});

const Item = mongoose.model('Item', itemSchema);

app.post('/api/items', (req, res) => {
  const itemName = req.body.name;
  const item = new Item({ name: itemName });
  item.save((err) => {
    if (err) {
      res.status(500).json({ error: 'Error creating item' });
    } else {
      res.status(201).json({ message: 'Item created successfully' });
    }
  });
});

app.get('/api/items', (req, res) => {
  Item.find({}, (err, foundItems) => {
    if (err) {
      res.status(500).json({ error: 'Error reading items' });
    } else {
      res.status(200).json(foundItems);
    }
  });
});

app.put('/api/items/:itemId', (req, res) => {
  const itemId = req.params.itemId;
  const updatedName = req.body.name;
  Item.findByIdAndUpdate(
    itemId,
    { name: updatedName },
    (err, updatedItem) => {
      if (err) {
        res.status(500).json({ error: 'Error updating item' });
      } else {
        res.status(200).json({ message: 'Item updated successfully' });
      }
    }
  );
});

app.delete('/api/items/:itemId', (req, res) => {
  const itemId = req.params.itemId;
  Item.findByIdAndRemove(itemId, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error deleting item' });
    } else {
      res.status(200).json({ message: 'Item deleted successfully' });
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

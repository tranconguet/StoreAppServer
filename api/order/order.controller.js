const e = require("express");
const Order = require("./order.model");
const mongoose = require("mongoose");


exports.index = async (req, res) => {
  await Order.find({})
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getById = async (req, res) => {
  await Order.find({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.create = async (req, res) => {
  var data = req.body;
  data.shippingAddress = JSON.parse(req.body.shippingAddress);
  data.items = JSON.parse(data.items);
  console.log(data);
  await Order.create(data)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteById = async (req, res) => {
  var orderId = mongoose.Types.ObjectId(req.body.id);
  console.log(orderId)
  await Order.deleteOne({ _id: orderId }, () => {
    res.send("ok!");
  });
};

exports.updateOrderById = async (req, res) => {
  var orderId = mongoose.Types.ObjectId(req.body.id);
  const data = {
    title: req.body.title,
    images: JSON.parse(req.body.images),
    description: req.body.description,
    price: req.body.price,
    type: req.body.type,
    rating: Number(req.body.rating),
    love: req.body.love === "true",
  };
  console.log(req.body);
  await Order.updateOne({ _id: orderId }, { $set: data }, () => {
    res.send("ok!");
  });
};

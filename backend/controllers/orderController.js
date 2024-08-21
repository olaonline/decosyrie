const asyncHandler = require('express-async-handler');
const Order = require('../models/order');

// @desc    Create a new order
const addOrderItems = asyncHandler(async (req, res) => {
    const { orderItems, shippingAddress, paymentMethod, Price } = req.body;
  
    // Validate request payload
    if (!orderItems || orderItems.length === 0) {
      res.status(400);
      throw new Error('No order items');
    }
    if (!shippingAddress || !paymentMethod || !Price) {
      res.status(400);
      throw new Error('Missing required fields');
    }
  
    // Validate each order item
    for (const item of orderItems) {
      if (!item.product) {
        res.status(400);
        throw new Error('Order item is missing product ID');
      }
      if (!item.name || !item.qty || !item.image || !item.price) {
        res.status(400);
        throw new Error('Order item is missing required fields');
      }
    }
  
    // Create the order
    const order = new Order({
      user: req.user._id, // Assuming req.user is set by authentication middleware
      orderItems,
      shippingAddress,
      paymentMethod,
      Price,
    });
  
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  });

// @desc    Get order by ID
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate('user', 'name email');

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc    Update order to paid
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address,
    };

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc    Get logged in user orders
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});

// @desc    Get all orders (Admin only)
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate('user', 'id name');
  res.json(orders);
});

module.exports = {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
};
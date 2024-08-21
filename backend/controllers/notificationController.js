const Notification = require('../models/Notification');

exports.createNotification = async (req, res) => {
  const { title, description, startDate, endDate } = req.body;

  try {
    const newNotification = new Notification({ title, description, startDate, endDate });
    await newNotification.save();
    res.status(201).json(newNotification);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.getNotifications = async (req, res) => {
  try {
    const currentDate = new Date();
    const notifications = await Notification.find({ endDate: { $gte: currentDate } }).sort({ startDate: -1 });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

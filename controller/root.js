const index = (req, res) => {
  res.json({
    message: 'welcome'
  });
};

const create = (req, res) => {
  res.json(req.body);
};

module.exports = {
  index,
  create,
};
const notFound = (req, res) => res.status(404).send('router does not exist')

module.exports = notFound
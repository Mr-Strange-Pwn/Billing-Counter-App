let inventory = []

exports.get = (req, res) => {
    res.send(inventory)
}

exports.add = (req, res) => {
    const { id, name, price, description, total_quentity } = req.body
    let product = { id, name, price, description, total_quentity, incart: false, count: 0 }
    inventory.push(product)
    res.send(`${product.name} is added to the cart`)
}

exports.remove = (req, res) => {
    const { id } = req.body
}


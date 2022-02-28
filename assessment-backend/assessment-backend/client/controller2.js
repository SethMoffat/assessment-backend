const wishlist = []
let globalID = 1

module.exports = {
    addItem: (req , res) => {
        const {name, priority} = req.body

        let newItem = {
            name,
            priority,
            id: globalID
        }


    wishlist.push(newItem)

    res.status(200).send(wishlist)
    globalID++
},
deleteItem: (req, res) => {
    const {id} = req.params
    const index = wishlist.findIndex(e => +e.id === +id)

    wishlist.splice(index,1)
}
}

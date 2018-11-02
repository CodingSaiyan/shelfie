module.exports = {
    getProducts: (req, res) => {
        let db = req.app.get('db');
        db.get_inventory().then(response => {
            console.log(res);
            res.status(200).send(response);
        })
    },

    addProduct: (req, res) => {
        let db = req.app.get('db');
        let {name, price, img} = req.body;
        console.log("Added a product to inventory!!");
        db.add_product([name, price, img]).then(response => {
            res.status(200).send(response);
        }).catch(() => {console.log('You did not add to DB')})
    },

    updateProduct: (req, res) => {
        let db = req.app.get('db');
        let { id } = req.params;
        let {name, price, img} = req.body;

        db.getProducts({id}).then(response => {
            let productToEdit = response[0];

            name = name || productToEdit.name;
            price = price || productToEdit.price;
            img = img || productToEdit.img;

            db.update_product({name, price, img}).then(response2 => {
                res.status(200).send(response2)
            })
        }).catch(err, () => {console.log("Did not update", err)})
    },

    deleteProduct: (req, res) => {
        let db = req.app.get('db');
        let { id } = req.params;

        console.log("Deleted a Product!")
        db.delete_product(id).then(response => {
            res.status(200).send(response);
        }).catch(err => {console.log('You did not delete anything from db!', err)})
    }
}
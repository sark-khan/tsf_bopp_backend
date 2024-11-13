const BoppForm = require("../../Models/BoppForm")

module.exports.addForData= async (req) => {
    await BoppForm.create(req.body)


}


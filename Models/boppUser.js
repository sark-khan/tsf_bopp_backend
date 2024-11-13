const mongoose = require("mongoose");
const { ROLES } = require("../globalCOnstants");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    role: { type: String, required: true, enum: ROLES },
    username: { type: String, required: true },
    password: { type: String, required: true }
}, { timestamps: true });

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
});

module.exports = mongoose.model("BoppUser", userSchema);

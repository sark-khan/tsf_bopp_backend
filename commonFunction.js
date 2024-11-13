const comparePassword = async (inputPassword, storedPassword) => {
    return bcrypt.compare(inputPassword, storedPassword);
};


const hashPassword = (password) => {
    return bcrypt.hashSync(password, 8);
};



module.exports = { hashPassword, comparePassword }
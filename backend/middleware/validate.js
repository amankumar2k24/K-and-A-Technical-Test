module.exports = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    // console.log("error coming from validate middleware==>", error);
    if (error) {
        return res.status(400).json({ messsage: "Error from validation", status: false, response: error.details[0].message });
    }
    next();
}
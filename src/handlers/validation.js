exports.validateRequest = (req, res, next)=>{
    const {} = req.body;

    const {serverType, virtualMachine} = req.body;

    if (typeof(serverType) !== "object") {
        return res.status(400).send({message: "Bad Request", errProperty: "serverType", expected: "Expected an Object" })
    }

    if (!Array.isArray(virtualMachine)) {
        return res.status(400).send({message: "Bad Request", errProperty: "virtualMachine", expected: "Expected an Array of Objects" })
    }

    next();
}

const test = (req, res)=>{
    return res.status(200).send({status: true, message: "it works!"})
};

module.exports = {test}
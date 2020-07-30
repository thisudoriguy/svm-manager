const calculateServerHardware = (req, res)=>{
    const {serverType, virtualMachine} = req.body;
    try {
        const result = calculate(serverType, virtualMachine);
        const response = {status: true, message: "successful", noOfServers: result};

        return res.status(200).send(response)

    } catch (error) {
        console.log(error)
        throw new Error("whoops!, An Error Occured")
    }
};


const calculate = (serverType, virtualMachine)=> {

    const ans = [];

    virtualMachine.forEach(element => {
        const arr = [];

        Object.keys(element).map(key=>{
           const foo =  serverType[key] / element[key];
           arr.push(foo);
        });

        let check = true;

        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
        
            if (element <= 1) {
                check = false;
            }
            
        }

        if (check) {
            ans.push(true);
        }

    });

    return ans.length;
}

module.exports = {calculateServerHardware, calculate}
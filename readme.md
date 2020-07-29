## Woven Test - Server Planner Service
This is a solution to the interview for woven finance. see questions and requirements below 

### Task
**SERVER PLANNER SERVICE**                                                      

Write an API that calculates the server hardware for a data center (to host virtual machines).

Your API should return the number of servers that are required to host a non-empty collection of virtual machines.

This means you should implement the following operation (in UML definition): 

 +calculate(serverType: Server, virtualMachines: VirtualMachine[1..*]): int

All servers are from the same type. This type defines the hardware resources each server provides: CPU, RAM, HDD.

Each virtual machine is defined by the virtual hardware resources it needs (on a server): CPU, RAM, HDD.

The algorithm for the virtual machine distribution should implement a 'first fit' strategy. 

This means there is no resource optimization or 'look back': Virtual machines are always allocated on the current or the next server (in case of limited resources). 

If a virtual machine is too 'big' for a new server, skip it.

------------------------------------------------------------------------------

Example:

    - Server type = {CPU: 2, RAM: 32, HDD: 100}

    - Virtual Machines = [{CPU: 1, RAM: 16, HDD: 10}, {CPU: 1, RAM: 16, HDD: 10}, {CPU: 2, RAM: 32, HDD: 100}]

    - Result = 2
-------------------------------------------------------------------------------


- Create a rest API service, in any language of your choice

- Ensure the service runs in  Docker

- The code should contain readme on how to run the service

- Your submission should compile and run successfully  

- Free choice of dependencies, but keep it simple

- Your code should be fully (unit) tested! 

- Endeavor to write clean, maintainable code.

- These requirements are just the bare minimum, add more functionality


### Run Docker

- To run on docker, use the following command **docker-compose -f "docker-compose.yml" up -d --build** 

- Navigate to http://localhost:7000/api/woven-test/v1

### Run Locally

- Clone repo
- Install all dependencies **yarn install**
- Start the service **yarn run start**


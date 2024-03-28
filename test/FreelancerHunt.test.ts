const { expect } = require('chai')

describe("Contracts", ()=> {
    let contract : any,
        result : any,
        owner : any,
        freelancer1 : any,
        freelancer2 : any

    const description = "I am a skilled fullstack developer let's connect and bring our ideas to life"
    const skillSet = "NextJS, ReactJS, NodeJS, Python, GraphQl, Zustand, Docker"



    beforeEach(async()=> {
        
        contract = await ethers.deployContract("FreelancerHunt");
        [owner, freelancer1, freelancer2] = await ethers.getSigners()
        await contract.waitForDeployment()
        

    })

    describe("Freelancer", ()=> {
        beforeEach(async()=> {
            await contract.connect(freelancer1).createFreelancer(description, skillSet)
        })

        it("should confirm freelancer profile setup", async()=> {
            result = await contract.connect(freelancer1).getFreelancer(0)
            expect(result.freelancer).to.be.equal(freelancer1)
        })
    })
})
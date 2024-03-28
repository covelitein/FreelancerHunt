const { expect } = require("chai");

describe("Contracts", () => {
  let contract: any,
    result: any,
    owner: string,
    freelancer1: string,
    freelancer2: string;

    const id = 0

  const description =
    "I am a skilled fullstack developer let's connect and bring our ideas to life";
  const skillSet = "NextJS, ReactJS, NodeJS, Python, GraphQl, Zustand, Docker";

  const updatedDescription =
    "I am a skilled fullstack developer let's connect and bring our ideas to life";
  const updatedSkillSet = "NextJS, ReactJS, NodeJS, Python, GraphQl, Zustand, Docker";

  beforeEach(async () => {
    contract = await ethers.deployContract("FreelancerHunt");
    [owner, freelancer1, freelancer2] = await ethers.getSigners();
    await contract.waitForDeployment();
  });

  describe("Freelancer", () => {
    beforeEach(async () => {
      await contract
        .connect(freelancer1)
        .createFreelancer(description, skillSet);
    });

    it("should confirm freelancer profile setup", async () => {
      result = await contract.getFreelancer(id);
      expect(result.freelancer).to.be.equal(freelancer1);
    });

    it("should confirm updating freelancer record", async()=> {
        await contract.connect(freelancer1).updateFreelancerDetails(id, updatedDescription, updatedSkillSet)
        result = await contract.getFreelancer(id)
        expect(result.description).to.be.equal(updatedDescription)
    })

    it("should confirm deleting a record", async() => {
        await contract.connect(freelancer1).deleteFreelancer(id)
        result = await contract.isFreelancerDeleted(id)
        expect(result).to.be.equal(true)
    })
  });
});

// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0  < 0.9.0;


contract FreelancerHunt {
   address public owner;

    struct FreelancerStruct {
        uint id;
        address freelancer;
        string description;
        string skillSet;
    }

    struct contractStruct {
        uint id;
        string duration;
        uint startDate;
        uint endDate;
        address owner;
        address freelancer;
        uint payment;
    }

    mapping(uint => bool) isDeleted;
    mapping(address => bool) freelancerExist;

    FreelancerStruct[] public freelancers;


    function createFreelancer(
        string memory description,
        string memory skillSet
    ) public {
        require(freelancerExist[msg.sender] == false, "freelancer already exists");
        require(bytes(description).length > 0, "description is compulsory");
        require(bytes(skillSet).length > 0, "skill set is compulsory");

        FreelancerStruct memory freelancer;
        freelancer.description = description;
        freelancer.skillSet = skillSet;
        freelancer.freelancer = msg.sender;
        freelancer.id = freelancers.length;
        freelancerExist[msg.sender] = true;

        freelancers.push(freelancer);
    }

    function updateFreelancerDetails(
        uint id,
        string memory description,
        string memory skillSet
    ) public view {
        require(freelancers[id].freelancer == msg.sender, "Unauthorized action");
        require(isDeleted[id] == false, "freelancer record no more available!");
        require(bytes(description).length > 0, "description is compulsory");
        require(bytes(skillSet).length > 0, "skill set is compulsory");

        FreelancerStruct memory freelancer = freelancers[id];

        freelancer.description = description;
        freelancer.skillSet = skillSet;
    }

    function deleteFreelancer(
        uint id
    ) public {
        require(freelancers[id].freelancer == msg.sender, "Unauthorized action");
        require(isDeleted[id] == false, "freelancer record already deleted!");

        isDeleted[id] = true;
    }

    function isFreelancerDeleted(uint id) public view returns (bool) {
        return isDeleted[id];
    }

    function getFreelancers() public view returns(FreelancerStruct[] memory) {
        return freelancers;
    }

    function getFreelancer(uint id) public view returns(FreelancerStruct memory) {
        return freelancers[id];
    }
}
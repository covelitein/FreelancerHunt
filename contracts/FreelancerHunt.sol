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
        isDeleted[freelancers.length] = true;

        freelancers.push(freelancer);
    }

    function getFreelancers() public view returns(FreelancerStruct[] memory) {
        return freelancers;
    }

    function getFreelancer(uint id) public view returns(FreelancerStruct memory) {
        return freelancers[id];
    }
}
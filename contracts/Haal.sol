// SPDX-License-Identifier: MIT

pragma solidity >=0.4.25;
pragma experimental ABIEncoderV2;

contract Verify { 
    function verifyProof( uint[2] calldata, uint[2] calldata, uint[2][2] calldata, uint[2] calldata, uint[2] calldata, uint[2] calldata, uint[2] calldata, uint[2] calldata, uint[7] calldata) external pure returns (bool){} 
}

contract Haal {

    // struct EphemeralVoter {
    //     address ephemeralAddress;
    //     bytes pubKeyToRecover;
    //     bytes32 opMarker;
    //     bool canVote;
    //     bool voted;
    // }

     struct Voter{
        bytes pubKeyToRecover;
        bytes32 opMarker;
        uint weight;
        bool canVote;
        address ephemeralAddress;
        mapping(bytes32 => bytes32) votedChoice;  // index of the voted proposal choice
        mapping(bytes32 => bool) votedIndex;  // index of the voted proposal
    }

    struct Proposals{
        address creator;
        
        bytes32[] postText_voteCount;
        uint256[] postIndex_voteCount;

        bytes32 post_id;
        bytes32[] post_propIds;
    }

    
    struct RealVoter {
        address realVoterAddress;
        uint[2] a;
        uint[2] a_p;
        uint[2][2] b;
        uint[2] b_p;
        uint[2] c;
        uint[2] c_p;
        uint[2] h;
        uint[2] k;
        uint[7] input;
        bool voted;
    }
    
    struct Result {
        uint[] president;
        uint[] senator;
        uint[] stateGovernor;
        bytes32[] encryptedResult;
        bytes32[] proof;
    }
    
    //EphemeralVoter[] public ephemeralVoterArray;
    // Votes[] voteArray;
    RealVoter[] realVoterArray;
    
    mapping(address => uint) public votersIndex;
    mapping(address => Voter) public votersMap;
    Voter[] public voters;
    Proposals[] internal proposals;
    uint public auctionEnd;
    
    // Struct indexes
    // mapping(address => uint) public ephemeralVoters;
    mapping(address => uint) public votes;
    mapping(address => uint) public realVoters;

    mapping(bytes32 => uint) public indexProposal;

    address public owner; // there's no access control implemented on this demo
    address public zkVerifier;
    bytes32 public ballotIdentifier;
    bytes public encryptionPublicKey; // better if converted to hex
    uint public votersCount;
    uint public votesCount;
    uint public voteProofs;
    
    constructor(
        bytes32 _ballotIdentifier, 
        bytes memory _encryptionPublicKey, 
        address _zkVerifier
        ) public {
        owner = msg.sender;
        ballotIdentifier = _ballotIdentifier;
        encryptionPublicKey = _encryptionPublicKey;
        zkVerifier = _zkVerifier;
    }

    function canVote(address _address) view public returns(uint) {
        return voters[votersIndex[_address]].weight;
    }
    
    function addEphemeralVoter(
        address _address, 
        bytes memory _pubKeyToRecover, 
        bytes32 _opMarker
        ) public returns(bool){
        
        // the sender is the owner
        if(msg.sender != owner) return(false);
        if(votersMap[_address].weight != 0) return(false);

        votersMap[_address].weight = 1;

        voters.length++;
        
        voters[voters.length - 1].ephemeralAddress = _address;
        voters[voters.length - 1].pubKeyToRecover = _pubKeyToRecover;
        voters[voters.length - 1].opMarker = _opMarker;
        voters[voters.length - 1].weight = 1;

        votersIndex[_address] = voters.length - 1;
        
        votersCount+=1;
        return(true);
    }

    function getproposals() view external returns(Proposals[] memory){
        return proposals;
    }

     function addProposals(bytes32 post_id ,bytes32[] memory porpositions) public {
        uint256[] memory porpositions_IndexvoteCount = new uint256[](porpositions.length);

        for (uint i = 0; i < porpositions.length; i++) {
            porpositions_IndexvoteCount[i] = 0;
        }

        proposals.length++;
        proposals[proposals.length - 1] = Proposals({
            creator: msg.sender,
            postIndex_voteCount: porpositions_IndexvoteCount,
            postText_voteCount: porpositions,
            post_propIds: porpositions,
            post_id: post_id
        });

        // proposals.push();

        indexProposal[post_id] = proposals.length - 1;
    }

    function getBalance(address sender) public view returns(uint accountBalance){
        accountBalance = sender.balance;
    }

    event Voted(address voter,bool voted);

    function addVote(bytes32 post_id,bytes32 choiceIndex) public returns(bool)  {
        // the duration of vote has't already pass
        //require(block.timestamp < auctionEnd);
        // the sender has't voted before
        if(voters[votersIndex[msg.sender]].votedIndex[post_id])  return(false);
        // the sender is voitng
        voters[votersIndex[msg.sender]].votedIndex[post_id] = true;
        // the sender choice from a proposal
        voters[votersIndex[msg.sender]].votedChoice[post_id] = choiceIndex;
        // increment proposal choice!
        Proposals storage p = proposals[indexProposal[post_id]];
        // .postIndex_voteCount[choiceIndex] += voters[votersIndex[msg.sender]].weight;

        // votesCount += voters[votersIndex[msg.sender]].weight;

        for(uint i= 0; i<p.postIndex_voteCount.length;i++ ) {
            if(p.postText_voteCount[i] == choiceIndex ) {
                p.postIndex_voteCount[i] += voters[votersIndex[msg.sender]].weight;
                votesCount += voters[votersIndex[msg.sender]].weight;
                emit Voted(msg.sender,true);
                return(true);
            }
        }
        return(false);
        
        
    }

    
    // function addVote(
    //     bytes32[] memory porpositions, 
    //     bytes[] memory _senator, 
    //     bytes[] memory _stateGovernor,
    //     bytes32 _c
    //     ) public returns(bool) {
        
    //     //EphemeralVoter storage sender = ephemeralVoters[msg.sender];
    //     EphemeralVoter storage sender = ephemeralVoterArray[ephemeralVoters[msg.sender]];
    //     if (sender.voted || !sender.canVote) return(false);
        
    //     voteArray.length++;
    //     voteArray[voteArray.length-1].president = _president;
    //     voteArray[voteArray.length-1].senator = _senator;
    //     voteArray[voteArray.length-1].stateGovernor = _stateGovernor;
    //     voteArray[voteArray.length-1].c = _c;
        
    //     votes[msg.sender] = voteArray.length-1;
        
    //     votesCount+=1;
        
    //     sender.voted = true;
    //     sender.canVote = false;
    //     return(true);
    // }
    
    function registerVoteProof(
        uint[2] memory _a,
        uint[2] memory _a_p,
        uint[2][2] memory _b,
        uint[2] memory _b_p,
        uint[2] memory _c,
        uint[2] memory _c_p,
        uint[2] memory _h,
        uint[2] memory _k,
        uint[7] memory _input
        ) public returns (bool) {
        
        RealVoter storage sender = realVoterArray[realVoters[msg.sender]];
        if (sender.voted) return(false);
        
        Verify verifier = Verify(zkVerifier);
        if (!verifier.verifyProof(_a, _a_p, _b, _b_p, _c, _c_p, _h, _k, _input)) return (false);
        
        realVoterArray.length++;
        
        realVoterArray[realVoterArray.length-1].realVoterAddress = msg.sender;
        realVoterArray[realVoterArray.length-1].a = _a;
        realVoterArray[realVoterArray.length-1].a_p = _a_p;
        realVoterArray[realVoterArray.length-1].b = _b;
        realVoterArray[realVoterArray.length-1].b_p = _b_p;
        realVoterArray[realVoterArray.length-1].c = _c;
        realVoterArray[realVoterArray.length-1].c_p = _c_p;
        realVoterArray[realVoterArray.length-1].h = _h;
        realVoterArray[realVoterArray.length-1].k = _k;
        realVoterArray[realVoterArray.length-1].input = _input;
        realVoterArray[realVoterArray.length-1].voted = true;
        
        realVoters[msg.sender] = realVoterArray.length-1;
        
        voteProofs+=1;
        return(true);
    }
        
    function getEphemeralWallets(uint _index) view public returns(address, bytes memory, bytes32){
        return(
            voters[_index].ephemeralAddress, 
            voters[_index].pubKeyToRecover, 
            voters[_index].opMarker
            );
    }
    
    // function getVotes(uint _index) view public returns(bytes[] memory, bytes[] memory, bytes[] memory){
    //     return(
    //         voteArray[_index].president, 
    //         voteArray[_index].senator, 
    //         voteArray[_index].stateGovernor
    //         );
    // }
    
}
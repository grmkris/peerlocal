pragma solidity 0.8.10;

contract HelloWorld {
    string public message;

    constructor(string memory initialMessage) public {
        message = initialMessage;
    }

    function update(string memory newMessage) public {
        message = newMessage;
    }
}

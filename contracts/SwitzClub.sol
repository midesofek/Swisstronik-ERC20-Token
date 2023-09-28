// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SwitzClub is ERC20 {
    constructor() ERC20("SwitzClub", "STZ") {
        _mint(msg.sender, 20 * 10 ** decimals());
    }

    function mint(uint256 _amount) public {
        _mint(msg.sender, _amount * 10 ** decimals());
    }
}

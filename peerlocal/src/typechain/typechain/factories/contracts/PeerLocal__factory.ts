/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { PeerLocal, PeerLocalInterface } from "../../contracts/PeerLocal";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_reputationTokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "communityId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "ipfsMetadata",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "stakingToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stakingRequirement",
        type: "uint256",
      },
    ],
    name: "CommunityCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "communityId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "member",
        type: "address",
      },
    ],
    name: "MemberJoinedCommunity",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "communityId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "member",
        type: "address",
      },
    ],
    name: "OfferAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "communityId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "member",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "result",
        type: "bool",
      },
    ],
    name: "OfferClosed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "communityId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "communityId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "metadata",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "reputationRequirement",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stakingRequirement",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "offerStatus",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct PeerLocal.Offer",
        name: "newOffer",
        type: "tuple",
      },
    ],
    name: "OfferCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "erc20",
        type: "address",
      },
    ],
    name: "PeerLocalInitalized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "burnAmount",
        type: "uint256",
      },
    ],
    name: "ReputationTokenBurn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "member",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "mintAmount",
        type: "uint256",
      },
    ],
    name: "ReputationTokenMint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "member",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stakingRequirementReturned",
        type: "uint256",
      },
    ],
    name: "collateralTokenReturned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "member",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stakingRequirementStaked",
        type: "uint256",
      },
    ],
    name: "collateralTokenStaked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "member",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reputationRequirementReturned",
        type: "uint256",
      },
    ],
    name: "reputationTokenReturned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "member",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reputationRequirementStaked",
        type: "uint256",
      },
    ],
    name: "reputationTokenStaked",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_communityId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_offerId",
        type: "uint256",
      },
    ],
    name: "acceptOffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "communities",
    outputs: [
      {
        internalType: "string",
        name: "ipfsMetadata",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "stakingRequirement",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "stakingToken",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "communityMembers",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_ipfsMetadata",
        type: "string",
      },
      {
        internalType: "contract IERC20",
        name: "_stakingToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_stakingRequirement",
        type: "uint256",
      },
    ],
    name: "createCommunity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_communityId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_metadata",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_reputationRequirement",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_stakingRequirement",
        type: "uint256",
      },
    ],
    name: "createOffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_communityId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_offerId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_finalResult",
        type: "bool",
      },
    ],
    name: "endOffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_communityId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "joinCommunity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "offers",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "communityId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "metadata",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "reputationRequirement",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stakingRequirement",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "offerStatus",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reputationToken",
    outputs: [
      {
        internalType: "contract ReputationToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040527f4920616d20746865206f776e6572206f66207468697320636f6d6d756e697479600155600060035560006004553480156200003f57600080fd5b5060405162001eed38038062001eed83398101604081905262000062916200010b565b6200006d33620000bb565b600280546001600160a01b0319166001600160a01b0383169081179091556040517fcb880ce60e28c1cc24531731b8cd4417425fb64a20c0a4a43496376f1b7c606c90600090a2506200013d565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156200011e57600080fd5b81516001600160a01b03811681146200013657600080fd5b9392505050565b611da0806200014d6000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80637ee9800911610081578063e590b56a1161005b578063e590b56a146101a8578063f1d434f3146101cb578063f2fde38b146101de57600080fd5b80637ee980091461017157806381257bd5146101845780638da5cb5b1461019757600080fd5b806361c6a009116100b257806361c6a00914610141578063715018a61461015657806379e5692d1461015e57600080fd5b8063275bbe9b146100d95780634d03a9a51461010957806354d00c041461012e575b600080fd5b6002546100ec906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61011c610117366004611887565b6101f1565b604051610100969594939291906118f6565b6100ec61013c366004611887565b6102c8565b61015461014f3660046119cb565b610300565b005b6101546105a9565b61015461016c366004611a34565b6105bd565b61015461017f366004611a94565b610a03565b610154610192366004611887565b610b2d565b6000546001600160a01b03166100ec565b6101bb6101b6366004611aeb565b61102a565b6040516101009493929190611b04565b6101546101d9366004611b52565b6110e7565b6101546101ec366004611bac565b61122d565b60066020908152600092835260408084209091529082529020805460018201546002830180546001600160a01b0390931693919261022e90611bc9565b80601f016020809104026020016040519081016040528092919081815260200182805461025a90611bc9565b80156102a75780601f1061027c576101008083540402835291602001916102a7565b820191906000526020600020905b81548152906001019060200180831161028a57829003601f168201915b50505050600383015460048401546005909401549293909290915060ff1686565b600760205281600052604060002081815481106102e457600080fd5b6000918252602090912001546001600160a01b03169150829050565b6000828152600560205260409020600201546001600160a01b0316610324826112bd565b6001600160a01b03161461037f5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e617475726500000000000000000000000000000060448201526064015b60405180910390fd5b60008281526005602052604090819020600181015460039091015491517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015290916001600160a01b0316906370a0823190602401602060405180830381865afa1580156103f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061041b9190611c04565b101561048f5760405162461bcd60e51b815260206004820152602660248201527f496e73756666696369656e742062616c616e636520746f206a6f696e20636f6d60448201527f6d756e69747900000000000000000000000000000000000000000000000000006064820152608401610376565b600082815260056020526040902060010154156105395760008281526005602052604090819020600381015460019091015491516323b872dd60e01b815233600482015230602482015260448101929092526001600160a01b0316906323b872dd906064016020604051808303816000875af1158015610513573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105379190611c1d565b505b60008281526007602090815260408083208054600181018255908452918320909101805473ffffffffffffffffffffffffffffffffffffffff1916339081179091559051909184917f17671f80466a04ae9525dbdb041b26d88ef566a69866f8bd126b07df7c23ffb29190a35050565b6105b1611327565b6105bb6000611381565b565b600083815260066020908152604080832085845290915290206005015460ff166002146105e957600080fd5b600181151514156108b85760008381526006602090815260408083208584529091529020600401541561070c57600083815260056020908152604080832060030154600683528184208685529092529182902060049081015492516323b872dd60e01b8152309181019190915233602482015260448101929092526001600160a01b0316906323b872dd906064016020604051808303816000875af1158015610696573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ba9190611c1d565b50600083815260066020908152604080832085845282529182902060040154915191825233917f366864c39bf476e82e1ef8d71d42583011c00f95bf165671915a3e6958e7da54910160405180910390a25b60008381526006602090815260408083208584529091529020600301541561081a576002546000848152600660209081526040808320868452909152908190206003015490516323b872dd60e01b815230600482015233602482015260448101919091526001600160a01b03909116906323b872dd906064016020604051808303816000875af11580156107a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c89190611c1d565b50600083815260066020908152604080832085845282529182902060030154915191825233917f2224ca924709a35e1b561c0026b4ce0717ca182a9f0e17cd84cb66c2ef1151a3910160405180910390a25b6108253360016113de565b6000838152600660209081526040808320858452909152902054610853906001600160a01b031660016113de565b6000838152600660209081526040808320858452825291829020600501805460ff191660031790559051600181523391849186917f9ea156d53fad9c27622ffd56aa9bc696ec34df009847b7ea0053e876493d392391015b60405180910390a4505050565b6000838152600560209081526040808320600301546006835281842086855290925291829020805460049182015493516323b872dd60e01b815230928101929092526001600160a01b03908116602483015260448201939093529116906323b872dd906064016020604051808303816000875af115801561093d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109619190611c1d565b506000838152600660209081526040808320858452909152902060030154156109aa5760008381526006602090815260408083208584529091529020600301546109aa906114a4565b60008381526006602090815260408083208584528252808320600501805460ff19166003179055519182523391849186917f9ea156d53fad9c27622ffd56aa9bc696ec34df009847b7ea0053e876493d392391016108ab565b600160046000828254610a169190611c50565b90915550506040805160c08101825233815260208082018781528284018781526060840187905260808401869052600160a0850181905260008a81526006855286812060045482528552959095208451815473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0390911617815591519482019490945592518051929384939092610ab19260028501929101906117ee565b50606082015181600301556080820151816004015560a08201518160050160006101000a81548160ff021916908360ff160217905550905050847f55efeccbeabb2045864982a38e914330c836b620cf549bb24186b38075dc157e60045483604051610b1e929190611c68565b60405180910390a25050505050565b600082815260066020908152604080832084845282528083206004908101548685526005909352928190206003015490517f70a08231000000000000000000000000000000000000000000000000000000008152339381019390935290916001600160a01b03909116906370a0823190602401602060405180830381865afa158015610bbd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be19190611c04565b1015610c545760405162461bcd60e51b8152602060048201526024808201527f496e73756666696369656e742062616c616e636520746f20616363657074206f60448201527f66666572000000000000000000000000000000000000000000000000000000006064820152608401610376565b600082815260066020908152604080832084845282528083206004908101548685526005909352928190206003015490517fdd62ed3e000000000000000000000000000000000000000000000000000000008152339381019390935230602484015290916001600160a01b039091169063dd62ed3e90604401602060405180830381865afa158015610cea573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0e9190611c04565b1015610d825760405162461bcd60e51b815260206004820152602660248201527f496e73756666696369656e7420616c6c6f77616e636520746f2061636365707460448201527f206f6666657200000000000000000000000000000000000000000000000000006064820152608401610376565b600082815260066020908152604080832084845290915290206005015460ff16600114610dae57600080fd5b600082815260066020908152604080832084845290915290206004015415610ec657600082815260056020908152604080832060030154600683528184208585529092529182902060049081015492516323b872dd60e01b8152339181019190915230602482015260448101929092526001600160a01b0316906323b872dd906064016020604051808303816000875af1158015610e50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e749190611c1d565b50600082815260066020908152604080832084845282529182902060040154915191825233917fd47d6e34c57586c24fe7588e65d959fc25fa177da5bba5ec15f2fdb1e11d7133910160405180910390a25b600082815260066020908152604080832084845290915290206003015415610fd4576002546000838152600660209081526040808320858452909152908190206003015490516323b872dd60e01b815233600482015230602482015260448101919091526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610f5e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f829190611c1d565b50600082815260066020908152604080832084845282529182902060030154915191825233917f4ab53c4c4f84e270095737ab2a3ba2eb02e6d8667c7331472c51ea74bd4bee19910160405180910390a25b6000828152600660209081526040808320848452909152808220600501805460ff19166002179055513391839185917fcb229072cbcd1d5410a56504f86a872c0eac1578c7eb4463ec190b52d3b669e291a45050565b60056020526000908152604090208054819061104590611bc9565b80601f016020809104026020016040519081016040528092919081815260200182805461107190611bc9565b80156110be5780601f10611093576101008083540402835291602001916110be565b820191906000526020600020905b8154815290600101906020018083116110a157829003601f168201915b5050505060018301546002840154600390940154929390926001600160a01b0391821692501684565b60408051608081018252848152602080820184905233828401526001600160a01b038516606083015260035460009081526005825292909220815180519293919261113592849201906117ee565b5060208201516001820155604082015160028201805473ffffffffffffffffffffffffffffffffffffffff199081166001600160a01b039384161790915560609093015160039283018054909416911617909155805490600061119783611cd6565b909155505060038054600090815260076020908152604082208054600181810183559184529190922001805473ffffffffffffffffffffffffffffffffffffffff19163390811790915591546111ed9190611d0f565b7f2b54949ce1a6f18197972a885c752f7a56329bb5a402b642121821a6a162640585858560405161122093929190611d26565b60405180910390a3505050565b611235611327565b6001600160a01b0381166112b15760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610376565b6112ba81611381565b50565b600061132161131b6001546040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b83611557565b92915050565b6000546001600160a01b031633146105bb5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610376565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6002546040517f40c10f190000000000000000000000000000000000000000000000000000000081526001600160a01b03848116600483015260248201849052909116906340c10f1990604401600060405180830381600087803b15801561144557600080fd5b505af1158015611459573d6000803e3d6000fd5b50505050816001600160a01b03167f26564d184c5c1098164105a3b602b4a6f84f577ba7915d22da982427e4625c768260405161149891815260200190565b60405180910390a25050565b6002546040517f42966c68000000000000000000000000000000000000000000000000000000008152600481018390526001600160a01b03909116906342966c6890602401600060405180830381600087803b15801561150357600080fd5b505af1158015611517573d6000803e3d6000fd5b505050507f0c25d24798935c2d6ae2c2f59cf1631100478443c0a0f74abce4677bfab758e88160405161154c91815260200190565b60405180910390a150565b6000806000611566858561157b565b91509150611573816115c1565b509392505050565b6000808251604114156115b25760208301516040840151606085015160001a6115a68782858561172a565b945094505050506115ba565b506000905060025b9250929050565b60008160048111156115d5576115d5611d54565b14156115de5750565b60018160048111156115f2576115f2611d54565b14156116405760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610376565b600281600481111561165457611654611d54565b14156116a25760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610376565b60038160048111156116b6576116b6611d54565b14156112ba5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608401610376565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561176157506000905060036117e5565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156117b5573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166117de576000600192509250506117e5565b9150600090505b94509492505050565b8280546117fa90611bc9565b90600052602060002090601f01602090048101928261181c5760008555611862565b82601f1061183557805160ff1916838001178555611862565b82800160010185558215611862579182015b82811115611862578251825591602001919060010190611847565b5061186e929150611872565b5090565b5b8082111561186e5760008155600101611873565b6000806040838503121561189a57600080fd5b50508035926020909101359150565b6000815180845260005b818110156118cf576020818501810151868301820152016118b3565b818111156118e1576000602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b038716815285602082015260c06040820152600061191e60c08301876118a9565b606083019590955250608081019290925260ff1660a0909101529392505050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff808411156119705761197061193f565b604051601f8501601f19908116603f011681019082821181831017156119985761199861193f565b816040528093508581528686860111156119b157600080fd5b858560208301376000602087830101525050509392505050565b600080604083850312156119de57600080fd5b82359150602083013567ffffffffffffffff8111156119fc57600080fd5b8301601f81018513611a0d57600080fd5b611a1c85823560208401611955565b9150509250929050565b80151581146112ba57600080fd5b600080600060608486031215611a4957600080fd5b83359250602084013591506040840135611a6281611a26565b809150509250925092565b600082601f830112611a7e57600080fd5b611a8d83833560208501611955565b9392505050565b60008060008060808587031215611aaa57600080fd5b84359350602085013567ffffffffffffffff811115611ac857600080fd5b611ad487828801611a6d565b949794965050505060408301359260600135919050565b600060208284031215611afd57600080fd5b5035919050565b608081526000611b1760808301876118a9565b6020830195909552506001600160a01b0392831660408201529116606090910152919050565b6001600160a01b03811681146112ba57600080fd5b600080600060608486031215611b6757600080fd5b833567ffffffffffffffff811115611b7e57600080fd5b611b8a86828701611a6d565b9350506020840135611b9b81611b3d565b929592945050506040919091013590565b600060208284031215611bbe57600080fd5b8135611a8d81611b3d565b600181811c90821680611bdd57607f821691505b60208210811415611bfe57634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215611c1657600080fd5b5051919050565b600060208284031215611c2f57600080fd5b8151611a8d81611a26565b634e487b7160e01b600052601160045260246000fd5b60008219821115611c6357611c63611c3a565b500190565b828152604060208201526001600160a01b038251166040820152602082015160608201526000604083015160c06080840152611ca86101008401826118a9565b9050606084015160a0840152608084015160c084015260ff60a08501511660e0840152809150509392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611d0857611d08611c3a565b5060010190565b600082821015611d2157611d21611c3a565b500390565b606081526000611d3960608301866118a9565b6001600160a01b039490941660208301525060400152919050565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220b750470a54d2575ff9b9ce78486bbee0b8d037df07a1a8b593d5fec4d66d282764736f6c634300080b0033";

type PeerLocalConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PeerLocalConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PeerLocal__factory extends ContractFactory {
  constructor(...args: PeerLocalConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _reputationTokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PeerLocal> {
    return super.deploy(
      _reputationTokenAddress,
      overrides || {}
    ) as Promise<PeerLocal>;
  }
  override getDeployTransaction(
    _reputationTokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_reputationTokenAddress, overrides || {});
  }
  override attach(address: string): PeerLocal {
    return super.attach(address) as PeerLocal;
  }
  override connect(signer: Signer): PeerLocal__factory {
    return super.connect(signer) as PeerLocal__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PeerLocalInterface {
    return new utils.Interface(_abi) as PeerLocalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PeerLocal {
    return new Contract(address, _abi, signerOrProvider) as PeerLocal;
  }
}

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
  "0x60806040527f4920616d20746865206f776e6572206f66207468697320636f6d6d756e697479600155600060035560006004553480156200003f57600080fd5b5060405162001e5738038062001e5783398101604081905262000062916200010b565b6200006d33620000bb565b600280546001600160a01b0319166001600160a01b0383169081179091556040517fcb880ce60e28c1cc24531731b8cd4417425fb64a20c0a4a43496376f1b7c606c90600090a2506200013d565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156200011e57600080fd5b81516001600160a01b03811681146200013657600080fd5b9392505050565b611d0a806200014d6000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80637ee9800911610081578063e590b56a1161005b578063e590b56a146101a8578063f1d434f3146101cb578063f2fde38b146101de57600080fd5b80637ee980091461017157806381257bd5146101845780638da5cb5b1461019757600080fd5b806361c6a009116100b257806361c6a00914610141578063715018a61461015657806379e5692d1461015e57600080fd5b8063275bbe9b146100d95780634d03a9a51461010957806354d00c041461012e575b600080fd5b6002546100ec906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61011c6101173660046117f4565b6101f1565b60405161010096959493929190611863565b6100ec61013c3660046117f4565b6102c8565b61015461014f366004611938565b610300565b005b610154610591565b61015461016c3660046119a1565b6105a5565b61015461017f366004611a01565b610980565b6101546101923660046117f4565b610aaa565b6000546001600160a01b03166100ec565b6101bb6101b6366004611a58565b610fa3565b6040516101009493929190611a71565b6101546101d9366004611abf565b611060565b6101546101ec366004611b19565b6111a4565b60066020908152600092835260408084209091529082529020805460018201546002830180546001600160a01b0390931693919261022e90611b36565b80601f016020809104026020016040519081016040528092919081815260200182805461025a90611b36565b80156102a75780601f1061027c576101008083540402835291602001916102a7565b820191906000526020600020905b81548152906001019060200180831161028a57829003601f168201915b50505050600383015460048401546005909401549293909290915060ff1686565b600760205281600052604060002081815481106102e457600080fd5b6000918252602090912001546001600160a01b03169150829050565b6000828152600560205260409020600201546001600160a01b031661032482611234565b6001600160a01b03161461037f5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e617475726500000000000000000000000000000060448201526064015b60405180910390fd5b60008281526005602052604090819020600181015460039091015491517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015290916001600160a01b0316906370a0823190602401602060405180830381865afa1580156103f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061041b9190611b71565b101561048f5760405162461bcd60e51b815260206004820152602660248201527f496e73756666696369656e742062616c616e636520746f206a6f696e20636f6d60448201527f6d756e69747900000000000000000000000000000000000000000000000000006064820152608401610376565b60008281526005602052604090819020600381015460019091015491516323b872dd60e01b815233600482015230602482015260448101929092526001600160a01b0316906323b872dd906064016020604051808303816000875af11580156104fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105209190611b8a565b5060008281526007602090815260408083208054600181018255908452918320909101805473ffffffffffffffffffffffffffffffffffffffff1916339081179091559051909184917f17671f80466a04ae9525dbdb041b26d88ef566a69866f8bd126b07df7c23ffb29190a35050565b61059961129e565b6105a360006112f8565b565b600083815260066020908152604080832085845290915290206005015460ff166002146105d157600080fd5b6001811515141561088e576000838152600660209081526040808320858452909152902060040154156106f257600083815260056020908152604080832060030154600683528184208685529092529182902060049081015492516323b872dd60e01b8152309181019190915233602482015260448101929092526001600160a01b0316906323b872dd906064016020604051808303816000875af115801561067e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a29190611b8a565b5060008381526006602090815260408083208584528252918290206004015491519182527f5e6eb5f7467398af516c045689b6b035886229fb5a6ff3b80b6f7594eaca4927910160405180910390a15b6000838152600660209081526040808320858452909152902060030154156107fe576002546000848152600660209081526040808320868452909152908190206003015490516323b872dd60e01b815230600482015233602482015260448101919091526001600160a01b03909116906323b872dd906064016020604051808303816000875af115801561078a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ae9190611b8a565b5060008381526006602090815260408083208584528252918290206003015491519182527f0586e9898d78bd1759d2bc354390a5f7ed97137e42411d38873ccde94209bec3910160405180910390a15b610809336001611355565b6000838152600660209081526040808320858452909152902054610837906001600160a01b03166001611355565b6000838152600660209081526040808320858452909152808220600501805460ff19166003179055513391849186917f100d5ee299beaf44baf147b574a403d7754e7fcd2a2b658d7a3e8e2dd786d4ea91a4505050565b6000838152600560209081526040808320600301546006835281842086855290925291829020805460049182015493516323b872dd60e01b815230928101929092526001600160a01b03908116602483015260448201939093529116906323b872dd906064016020604051808303816000875af1158015610913573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109379190611b8a565b5060008381526006602090815260408083208584529091529020600301541561083757600083815260066020908152604080832085845290915290206003015461083790611411565b6001600460008282546109939190611bbd565b90915550506040805160c08101825233815260208082018781528284018781526060840187905260808401869052600160a0850181905260008a81526006855286812060045482528552959095208451815473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0390911617815591519482019490945592518051929384939092610a2e92600285019291019061175b565b50606082015181600301556080820151816004015560a08201518160050160006101000a81548160ff021916908360ff160217905550905050847f55efeccbeabb2045864982a38e914330c836b620cf549bb24186b38075dc157e60045483604051610a9b929190611bd5565b60405180910390a25050505050565b600082815260066020908152604080832084845282528083206004908101548685526005909352928190206003015490517f70a08231000000000000000000000000000000000000000000000000000000008152339381019390935290916001600160a01b03909116906370a0823190602401602060405180830381865afa158015610b3a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b5e9190611b71565b1015610bd15760405162461bcd60e51b8152602060048201526024808201527f496e73756666696369656e742062616c616e636520746f20616363657074206f60448201527f66666572000000000000000000000000000000000000000000000000000000006064820152608401610376565b600082815260066020908152604080832084845282528083206004908101548685526005909352928190206003015490517fdd62ed3e000000000000000000000000000000000000000000000000000000008152339381019390935230602484015290916001600160a01b039091169063dd62ed3e90604401602060405180830381865afa158015610c67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8b9190611b71565b1015610cff5760405162461bcd60e51b815260206004820152602660248201527f496e73756666696369656e7420616c6c6f77616e636520746f2061636365707460448201527f206f6666657200000000000000000000000000000000000000000000000000006064820152608401610376565b600082815260066020908152604080832084845290915290206005015460ff16600114610d2b57600080fd5b600082815260066020908152604080832084845290915290206004015415610e4157600082815260056020908152604080832060030154600683528184208585529092529182902060049081015492516323b872dd60e01b8152339181019190915230602482015260448101929092526001600160a01b0316906323b872dd906064016020604051808303816000875af1158015610dcd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df19190611b8a565b5060008281526006602090815260408083208484528252918290206004015491519182527f1e3de43cf90f63862dabec8a594fc4a3112b492bffd33c4ae84f6f3fbc658fac910160405180910390a15b600082815260066020908152604080832084845290915290206003015415610f4d576002546000838152600660209081526040808320858452909152908190206003015490516323b872dd60e01b815233600482015230602482015260448101919091526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610ed9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610efd9190611b8a565b5060008281526006602090815260408083208484528252918290206003015491519182527fe7f96fd8e157f784816431d3e30dc98a0de49a86f481d3da12c640771136eb21910160405180910390a15b6000828152600660209081526040808320848452909152808220600501805460ff19166002179055513391839185917fcb229072cbcd1d5410a56504f86a872c0eac1578c7eb4463ec190b52d3b669e291a45050565b600560205260009081526040902080548190610fbe90611b36565b80601f0160208091040260200160405190810160405280929190818152602001828054610fea90611b36565b80156110375780601f1061100c57610100808354040283529160200191611037565b820191906000526020600020905b81548152906001019060200180831161101a57829003601f168201915b5050505060018301546002840154600390940154929390926001600160a01b0391821692501684565b60408051608081018252848152602080820184905233828401526001600160a01b03851660608301526003546000908152600582529290922081518051929391926110ae928492019061175b565b5060208201516001820155604082015160028201805473ffffffffffffffffffffffffffffffffffffffff199081166001600160a01b039384161790915560609093015160039283018054909416911617909155805490600061111083611c43565b909155505060038054600090815260076020908152604082208054600181810183559184529190922001805473ffffffffffffffffffffffffffffffffffffffff19163390811790915591546111669190611c7c565b7fa20a75ad62b179882a2c41bc419d197eeff967e87aee4b374dcd79bc091554458585604051611197929190611c93565b60405180910390a3505050565b6111ac61129e565b6001600160a01b0381166112285760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610376565b611231816112f8565b50565b60006112986112926001546040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b836114c4565b92915050565b6000546001600160a01b031633146105a35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610376565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6002546040517f40c10f190000000000000000000000000000000000000000000000000000000081526001600160a01b03848116600483015260248201849052909116906340c10f1990604401600060405180830381600087803b1580156113bc57600080fd5b505af11580156113d0573d6000803e3d6000fd5b505050507f8b3e040ec34af8a2e647dbd709b7379394e769cb8341782a7f2c64c27472e8af8160405161140591815260200190565b60405180910390a15050565b6002546040517f42966c68000000000000000000000000000000000000000000000000000000008152600481018390526001600160a01b03909116906342966c6890602401600060405180830381600087803b15801561147057600080fd5b505af1158015611484573d6000803e3d6000fd5b505050507f0c25d24798935c2d6ae2c2f59cf1631100478443c0a0f74abce4677bfab758e8816040516114b991815260200190565b60405180910390a150565b60008060006114d385856114e8565b915091506114e08161152e565b509392505050565b60008082516041141561151f5760208301516040840151606085015160001a61151387828585611697565b94509450505050611527565b506000905060025b9250929050565b600081600481111561154257611542611cbe565b141561154b5750565b600181600481111561155f5761155f611cbe565b14156115ad5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610376565b60028160048111156115c1576115c1611cbe565b141561160f5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610376565b600381600481111561162357611623611cbe565b14156112315760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608401610376565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156116ce5750600090506003611752565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611722573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661174b57600060019250925050611752565b9150600090505b94509492505050565b82805461176790611b36565b90600052602060002090601f01602090048101928261178957600085556117cf565b82601f106117a257805160ff19168380011785556117cf565b828001600101855582156117cf579182015b828111156117cf5782518255916020019190600101906117b4565b506117db9291506117df565b5090565b5b808211156117db57600081556001016117e0565b6000806040838503121561180757600080fd5b50508035926020909101359150565b6000815180845260005b8181101561183c57602081850181015186830182015201611820565b8181111561184e576000602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b038716815285602082015260c06040820152600061188b60c0830187611816565b606083019590955250608081019290925260ff1660a0909101529392505050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff808411156118dd576118dd6118ac565b604051601f8501601f19908116603f01168101908282118183101715611905576119056118ac565b8160405280935085815286868601111561191e57600080fd5b858560208301376000602087830101525050509392505050565b6000806040838503121561194b57600080fd5b82359150602083013567ffffffffffffffff81111561196957600080fd5b8301601f8101851361197a57600080fd5b611989858235602084016118c2565b9150509250929050565b801515811461123157600080fd5b6000806000606084860312156119b657600080fd5b833592506020840135915060408401356119cf81611993565b809150509250925092565b600082601f8301126119eb57600080fd5b6119fa838335602085016118c2565b9392505050565b60008060008060808587031215611a1757600080fd5b84359350602085013567ffffffffffffffff811115611a3557600080fd5b611a41878288016119da565b949794965050505060408301359260600135919050565b600060208284031215611a6a57600080fd5b5035919050565b608081526000611a846080830187611816565b6020830195909552506001600160a01b0392831660408201529116606090910152919050565b6001600160a01b038116811461123157600080fd5b600080600060608486031215611ad457600080fd5b833567ffffffffffffffff811115611aeb57600080fd5b611af7868287016119da565b9350506020840135611b0881611aaa565b929592945050506040919091013590565b600060208284031215611b2b57600080fd5b81356119fa81611aaa565b600181811c90821680611b4a57607f821691505b60208210811415611b6b57634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215611b8357600080fd5b5051919050565b600060208284031215611b9c57600080fd5b81516119fa81611993565b634e487b7160e01b600052601160045260246000fd5b60008219821115611bd057611bd0611ba7565b500190565b828152604060208201526001600160a01b038251166040820152602082015160608201526000604083015160c06080840152611c15610100840182611816565b9050606084015160a0840152608084015160c084015260ff60a08501511660e0840152809150509392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611c7557611c75611ba7565b5060010190565b600082821015611c8e57611c8e611ba7565b500390565b604081526000611ca66040830185611816565b90506001600160a01b03831660208301529392505050565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220482c5b5f081d2f2b76dfab71cfeb6137fabfbf14f01a2eb65f5510f45e5e31a464736f6c634300080b0033";

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
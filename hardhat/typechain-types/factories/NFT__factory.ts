/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { NFT, NFTInterface } from "../NFT";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "_balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_getContractAddress",
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
        internalType: "address",
        name: "_own",
        type: "address",
      },
    ],
    name: "_getTokens",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "_id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            internalType: "string",
            name: "_asset",
            type: "string",
          },
          {
            internalType: "string",
            name: "_category",
            type: "string",
          },
          {
            internalType: "string",
            name: "_type",
            type: "string",
          },
          {
            internalType: "string",
            name: "_name",
            type: "string",
          },
        ],
        internalType: "struct TokenType[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_asset",
        type: "string",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "_isExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_asset",
        type: "string",
      },
      {
        internalType: "string",
        name: "_category",
        type: "string",
      },
      {
        internalType: "string",
        name: "_type",
        type: "string",
      },
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
    ],
    name: "_mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "_ownerOf",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "_id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            internalType: "string",
            name: "_asset",
            type: "string",
          },
          {
            internalType: "string",
            name: "_category",
            type: "string",
          },
          {
            internalType: "string",
            name: "_type",
            type: "string",
          },
          {
            internalType: "string",
            name: "_name",
            type: "string",
          },
        ],
        internalType: "struct TokenType",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "_transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_str",
        type: "string",
      },
    ],
    name: "getLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526000805534801561001457600080fd5b50611de1806100246000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806381d19e351161005b57806381d19e351461014d578063cb7125351461017d578063cca3e83214610199578063ed499474146101c957610088565b80633031afb81461008d57806338350541146100bd57806342408284146100ed5780636981b5f41461011d575b600080fd5b6100a760048036038101906100a29190611056565b6101e7565b6040516100b4919061129b565b60405180910390f35b6100d760048036038101906100d291906112e9565b610641565b6040516100e491906113b4565b60405180910390f35b6101076004803603810190610102919061150b565b610916565b6040516101149190611605565b60405180910390f35b61013760048036038101906101329190611620565b610c78565b6040516101449190611605565b60405180910390f35b61016760048036038101906101629190611669565b610c88565b60405161017491906116fc565b60405180910390f35b61019760048036038101906101929190611717565b610cf1565b005b6101b360048036038101906101ae9190611056565b610f47565b6040516101c09190611605565b60405180910390f35b6101d1610f90565b6040516101de9190611779565b60405180910390f35b606060006101f483610f47565b90506000810361025b57600067ffffffffffffffff811115610219576102186113e0565b5b60405190808252806020026020018201604052801561025257816020015b61023f610f98565b8152602001906001900390816102375790505b5091505061063c565b60008167ffffffffffffffff811115610277576102766113e0565b5b6040519080825280602002602001820160405280156102b057816020015b61029d610f98565b8152602001906001900390816102955790505b509050600080600190505b6000548111610634578573ffffffffffffffffffffffffffffffffffffffff166003600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361062157600360008281526020019081526020016000206040518060c0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820180546103bb906117c3565b80601f01602080910402602001604051908101604052809291908181526020018280546103e7906117c3565b80156104345780601f1061040957610100808354040283529160200191610434565b820191906000526020600020905b81548152906001019060200180831161041757829003601f168201915b5050505050815260200160038201805461044d906117c3565b80601f0160208091040260200160405190810160405280929190818152602001828054610479906117c3565b80156104c65780601f1061049b576101008083540402835291602001916104c6565b820191906000526020600020905b8154815290600101906020018083116104a957829003601f168201915b505050505081526020016004820180546104df906117c3565b80601f016020809104026020016040519081016040528092919081815260200182805461050b906117c3565b80156105585780601f1061052d57610100808354040283529160200191610558565b820191906000526020600020905b81548152906001019060200180831161053b57829003601f168201915b50505050508152602001600582018054610571906117c3565b80601f016020809104026020016040519081016040528092919081815260200182805461059d906117c3565b80156105ea5780601f106105bf576101008083540402835291602001916105ea565b820191906000526020600020905b8154815290600101906020018083116105cd57829003601f168201915b505050505081525050838381518110610606576106056117f4565b5b602002602001018190525060018261061e9190611852565b91505b808061062c90611886565b9150506102bb565b508193505050505b919050565b610649610f98565b600360008381526020019081526020016000206040518060c0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820180546106d7906117c3565b80601f0160208091040260200160405190810160405280929190818152602001828054610703906117c3565b80156107505780601f1061072557610100808354040283529160200191610750565b820191906000526020600020905b81548152906001019060200180831161073357829003601f168201915b50505050508152602001600382018054610769906117c3565b80601f0160208091040260200160405190810160405280929190818152602001828054610795906117c3565b80156107e25780601f106107b7576101008083540402835291602001916107e2565b820191906000526020600020905b8154815290600101906020018083116107c557829003601f168201915b505050505081526020016004820180546107fb906117c3565b80601f0160208091040260200160405190810160405280929190818152602001828054610827906117c3565b80156108745780601f1061084957610100808354040283529160200191610874565b820191906000526020600020905b81548152906001019060200180831161085757829003601f168201915b5050505050815260200160058201805461088d906117c3565b80601f01602080910402602001604051908101604052809291908181526020018280546108b9906117c3565b80156109065780601f106108db57610100808354040283529160200191610906565b820191906000526020600020905b8154815290600101906020018083116108e957829003601f168201915b5050505050815250509050919050565b6000600160008082825461092a9190611852565b92505081905550600285604051610941919061190a565b908152602001604051809103902060009054906101000a900460ff161580156109935750600185604051610975919061190a565b908152602001604051809103902060009054906101000a900460ff16155b6109d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c99061197e565b60405180910390fd5b600180876040516109e3919061190a565b908152602001604051809103902060006101000a81548160ff0219169083151502179055506001600286604051610a1a919061190a565b908152602001604051809103902060006101000a81548160ff0219169083151502179055506040518060c0016040528060005481526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018481526020018781525060036000805481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002019081610afe9190611b4a565b506060820151816003019081610b149190611b4a565b506080820151816004019081610b2a9190611b4a565b5060a0820151816005019081610b409190611b4a565b509050507fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600083600054604051610b7a93929190611c1c565b60405180910390a16000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205403610c12576001600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055610c69565b6001600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c629190611852565b9250508190555b50600054905095945050505050565b6000808290508051915050919050565b6000600283604051610c9a919061190a565b908152602001604051809103902060009054906101000a900460ff1680610ce95750600182604051610ccc919061190a565b908152602001604051809103902060009054906101000a900460ff165b905092915050565b6003600082815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610d95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8c90611cc5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610e04576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dfb90611d57565b60405180910390fd5b816003600083815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ea99190611d77565b925050819055506001600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f009190611852565b925050819055507fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef838383604051610f3a93929190611c1c565b60405180910390a1505050565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600030905090565b6040518060c0016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001606081526020016060815260200160608152602001606081525090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061102382610ff8565b9050919050565b61103381611018565b811461103e57600080fd5b50565b6000813590506110508161102a565b92915050565b60006020828403121561106c5761106b610fee565b5b600061107a84828501611041565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000819050919050565b6110c2816110af565b82525050565b6110d181611018565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156111115780820151818401526020810190506110f6565b60008484015250505050565b6000601f19601f8301169050919050565b6000611139826110d7565b61114381856110e2565b93506111538185602086016110f3565b61115c8161111d565b840191505092915050565b600060c08301600083015161117f60008601826110b9565b50602083015161119260208601826110c8565b50604083015184820360408601526111aa828261112e565b915050606083015184820360608601526111c4828261112e565b915050608083015184820360808601526111de828261112e565b91505060a083015184820360a08601526111f8828261112e565b9150508091505092915050565b60006112118383611167565b905092915050565b6000602082019050919050565b600061123182611083565b61123b818561108e565b93508360208202850161124d8561109f565b8060005b85811015611289578484038952815161126a8582611205565b945061127583611219565b925060208a01995050600181019050611251565b50829750879550505050505092915050565b600060208201905081810360008301526112b58184611226565b905092915050565b6112c6816110af565b81146112d157600080fd5b50565b6000813590506112e3816112bd565b92915050565b6000602082840312156112ff576112fe610fee565b5b600061130d848285016112d4565b91505092915050565b600060c08301600083015161132e60008601826110b9565b50602083015161134160208601826110c8565b5060408301518482036040860152611359828261112e565b91505060608301518482036060860152611373828261112e565b9150506080830151848203608086015261138d828261112e565b91505060a083015184820360a08601526113a7828261112e565b9150508091505092915050565b600060208201905081810360008301526113ce8184611316565b905092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6114188261111d565b810181811067ffffffffffffffff82111715611437576114366113e0565b5b80604052505050565b600061144a610fe4565b9050611456828261140f565b919050565b600067ffffffffffffffff821115611476576114756113e0565b5b61147f8261111d565b9050602081019050919050565b82818337600083830152505050565b60006114ae6114a98461145b565b611440565b9050828152602081018484840111156114ca576114c96113db565b5b6114d584828561148c565b509392505050565b600082601f8301126114f2576114f16113d6565b5b813561150284826020860161149b565b91505092915050565b600080600080600060a0868803121561152757611526610fee565b5b600086013567ffffffffffffffff81111561154557611544610ff3565b5b611551888289016114dd565b955050602086013567ffffffffffffffff81111561157257611571610ff3565b5b61157e888289016114dd565b945050604086013567ffffffffffffffff81111561159f5761159e610ff3565b5b6115ab888289016114dd565b935050606086013567ffffffffffffffff8111156115cc576115cb610ff3565b5b6115d8888289016114dd565b92505060806115e988828901611041565b9150509295509295909350565b6115ff816110af565b82525050565b600060208201905061161a60008301846115f6565b92915050565b60006020828403121561163657611635610fee565b5b600082013567ffffffffffffffff81111561165457611653610ff3565b5b611660848285016114dd565b91505092915050565b600080604083850312156116805761167f610fee565b5b600083013567ffffffffffffffff81111561169e5761169d610ff3565b5b6116aa858286016114dd565b925050602083013567ffffffffffffffff8111156116cb576116ca610ff3565b5b6116d7858286016114dd565b9150509250929050565b60008115159050919050565b6116f6816116e1565b82525050565b600060208201905061171160008301846116ed565b92915050565b6000806000606084860312156117305761172f610fee565b5b600061173e86828701611041565b935050602061174f86828701611041565b9250506040611760868287016112d4565b9150509250925092565b61177381611018565b82525050565b600060208201905061178e600083018461176a565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806117db57607f821691505b6020821081036117ee576117ed611794565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061185d826110af565b9150611868836110af565b92508282019050808211156118805761187f611823565b5b92915050565b6000611891826110af565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036118c3576118c2611823565b5b600182019050919050565b600081905092915050565b60006118e4826110d7565b6118ee81856118ce565b93506118fe8185602086016110f3565b80840191505092915050565b600061191682846118d9565b915081905092915050565b600082825260208201905092915050565b7f4475626c6963617465204e465400000000000000000000000000000000000000600082015250565b6000611968600d83611921565b915061197382611932565b602082019050919050565b600060208201905081810360008301526119978161195b565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302611a007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826119c3565b611a0a86836119c3565b95508019841693508086168417925050509392505050565b6000819050919050565b6000611a47611a42611a3d846110af565b611a22565b6110af565b9050919050565b6000819050919050565b611a6183611a2c565b611a75611a6d82611a4e565b8484546119d0565b825550505050565b600090565b611a8a611a7d565b611a95818484611a58565b505050565b5b81811015611ab957611aae600082611a82565b600181019050611a9b565b5050565b601f821115611afe57611acf8161199e565b611ad8846119b3565b81016020851015611ae7578190505b611afb611af3856119b3565b830182611a9a565b50505b505050565b600082821c905092915050565b6000611b2160001984600802611b03565b1980831691505092915050565b6000611b3a8383611b10565b9150826002028217905092915050565b611b53826110d7565b67ffffffffffffffff811115611b6c57611b6b6113e0565b5b611b7682546117c3565b611b81828285611abd565b600060209050601f831160018114611bb45760008415611ba2578287015190505b611bac8582611b2e565b865550611c14565b601f198416611bc28661199e565b60005b82811015611bea57848901518255600182019150602085019450602081019050611bc5565b86831015611c075784890151611c03601f891682611b10565b8355505b6001600288020188555050505b505050505050565b6000606082019050611c31600083018661176a565b611c3e602083018561176a565b611c4b60408301846115f6565b949350505050565b7f5468652066726f6d206164647265737320646f6573206e6f74206f776e20746860008201527f6520746f6b656e00000000000000000000000000000000000000000000000000602082015250565b6000611caf602783611921565b9150611cba82611c53565b604082019050919050565b60006020820190508181036000830152611cde81611ca2565b9050919050565b7f43616e6e6f74207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611d41602383611921565b9150611d4c82611ce5565b604082019050919050565b60006020820190508181036000830152611d7081611d34565b9050919050565b6000611d82826110af565b9150611d8d836110af565b9250828203905081811115611da557611da4611823565b5b9291505056fea26469706673582212209a31b737fed9f95d9a4cfdfbbf164b3c36f874db2454697fb0e6aa0aae153b0b64736f6c63430008180033";

type NFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFT__factory extends ContractFactory {
  constructor(...args: NFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      NFT & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): NFT__factory {
    return super.connect(runner) as NFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTInterface {
    return new Interface(_abi) as NFTInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): NFT {
    return new Contract(address, _abi, runner) as unknown as NFT;
  }
}
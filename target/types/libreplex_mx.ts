export type LibreplexMx = {
  "version": "0.2.0",
  "name": "libreplex_mx",
  "instructions": [
    {
      "name": "join",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "metaplexJoiner",
          "isMut": true,
          "isSigner": false,
          "relations": [
            "deployment"
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "deployment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "deploymentConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creatorFeeTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "hashlist",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nonFungibleMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nonFungibleMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "hashlistMarker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fairLaunch",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initialise",
      "accounts": [
        {
          "name": "deployment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "metaplexJoiner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fairLaunch",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": "InitialiseInput"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "deployment",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "limitPerMint",
            "type": "u64"
          },
          {
            "name": "maxNumberOfTokens",
            "type": "u64"
          },
          {
            "name": "numberOfTokensIssued",
            "type": "u64"
          },
          {
            "name": "decimals",
            "type": "u8"
          },
          {
            "name": "useInscriptions",
            "type": "bool"
          },
          {
            "name": "deploymentType",
            "type": "u8"
          },
          {
            "name": "requireCreatorCosign",
            "type": "bool"
          },
          {
            "name": "migratedFromLegacy",
            "type": "bool"
          },
          {
            "name": "escrowNonFungibleCount",
            "type": "u64"
          },
          {
            "name": "ticker",
            "type": "string"
          },
          {
            "name": "deploymentTemplate",
            "type": "string"
          },
          {
            "name": "mintTemplate",
            "type": "string"
          },
          {
            "name": "fungibleMint",
            "type": "publicKey"
          },
          {
            "name": "offchainUrl",
            "type": "string"
          },
          {
            "name": "disableSwapCosigner",
            "docs": [
              "when cosigner is active this can be toggled to disable swap cosigner",
              "while still requiring cosigner for other actions such as join"
            ],
            "type": "bool"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                199
              ]
            }
          }
        ]
      }
    },
    {
      "name": "deploymentConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "deployment",
            "type": "publicKey"
          },
          {
            "name": "creatorFeeTreasury",
            "type": "publicKey"
          },
          {
            "name": "creatorFeePerMintLamports",
            "type": "u64"
          },
          {
            "name": "transferFeeInBasisPoints",
            "type": "u16"
          },
          {
            "name": "cosignerProgramId",
            "type": "publicKey"
          },
          {
            "name": "multiplierLimits",
            "type": {
              "option": {
                "defined": "MultiplierLimits"
              }
            }
          },
          {
            "name": "transferFeeWithdrawAuthority",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "transferFeeTargetWallet",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "totalSplEquivalentMinted",
            "type": "u64"
          },
          {
            "name": "splExcessInEscrow",
            "type": "u64"
          },
          {
            "name": "allowBurn",
            "docs": [
              "used for variable-rate swaps"
            ],
            "type": "bool"
          },
          {
            "name": "allowClaimTransferFeeAuthAsCreator",
            "type": "bool"
          },
          {
            "name": "uncheckedFungible",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "metaplexJoiner",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "seed",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "deployment",
            "type": "publicKey"
          },
          {
            "name": "filterValue",
            "type": "publicKey"
          },
          {
            "name": "filterType",
            "docs": [
              "0 - collection",
              "1 - creator"
            ],
            "type": "u8"
          },
          {
            "name": "cosigner",
            "type": "publicKey"
          },
          {
            "name": "cosignerProgramId",
            "type": "publicKey"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                100
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "MultiplierLimits",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maxNumerator",
            "type": "u16"
          },
          {
            "name": "minDenominator",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "InitialiseInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "seed",
            "type": "publicKey"
          },
          {
            "name": "cosigner",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "cosignerProgramId",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "filterValue",
            "type": "publicKey"
          },
          {
            "name": "filterType",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "MetaplexJoiner",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "seed",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "deployment",
            "type": "publicKey"
          },
          {
            "name": "filterValue",
            "type": "publicKey"
          },
          {
            "name": "filterType",
            "docs": [
              "0 - collection",
              "1 - creator"
            ],
            "type": "u8"
          },
          {
            "name": "cosigner",
            "type": "publicKey"
          },
          {
            "name": "cosignerProgramId",
            "type": "publicKey"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                100
              ]
            }
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "MetaplexJoinerCreate",
      "fields": [
        {
          "name": "id",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "metaplexJoiner",
          "type": {
            "defined": "MetaplexJoiner"
          },
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "NoCreatorMatchingFilter",
      "msg": "No creator matching filter"
    },
    {
      "code": 6001,
      "name": "CreatorNotVerified",
      "msg": "Creator not verified"
    },
    {
      "code": 6002,
      "name": "MetadataCollectionNotVerified",
      "msg": "Collection not verified"
    },
    {
      "code": 6003,
      "name": "MetadataHasInvalidCollection",
      "msg": "Collection not verified"
    }
  ]
};

export const IDL: LibreplexMx = {
  "version": "0.2.0",
  "name": "libreplex_mx",
  "instructions": [
    {
      "name": "join",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "metaplexJoiner",
          "isMut": true,
          "isSigner": false,
          "relations": [
            "deployment"
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "deployment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "deploymentConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creatorFeeTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "hashlist",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nonFungibleMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nonFungibleMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "hashlistMarker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fairLaunch",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initialise",
      "accounts": [
        {
          "name": "deployment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "metaplexJoiner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fairLaunch",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": "InitialiseInput"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "deployment",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "limitPerMint",
            "type": "u64"
          },
          {
            "name": "maxNumberOfTokens",
            "type": "u64"
          },
          {
            "name": "numberOfTokensIssued",
            "type": "u64"
          },
          {
            "name": "decimals",
            "type": "u8"
          },
          {
            "name": "useInscriptions",
            "type": "bool"
          },
          {
            "name": "deploymentType",
            "type": "u8"
          },
          {
            "name": "requireCreatorCosign",
            "type": "bool"
          },
          {
            "name": "migratedFromLegacy",
            "type": "bool"
          },
          {
            "name": "escrowNonFungibleCount",
            "type": "u64"
          },
          {
            "name": "ticker",
            "type": "string"
          },
          {
            "name": "deploymentTemplate",
            "type": "string"
          },
          {
            "name": "mintTemplate",
            "type": "string"
          },
          {
            "name": "fungibleMint",
            "type": "publicKey"
          },
          {
            "name": "offchainUrl",
            "type": "string"
          },
          {
            "name": "disableSwapCosigner",
            "docs": [
              "when cosigner is active this can be toggled to disable swap cosigner",
              "while still requiring cosigner for other actions such as join"
            ],
            "type": "bool"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                199
              ]
            }
          }
        ]
      }
    },
    {
      "name": "deploymentConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "deployment",
            "type": "publicKey"
          },
          {
            "name": "creatorFeeTreasury",
            "type": "publicKey"
          },
          {
            "name": "creatorFeePerMintLamports",
            "type": "u64"
          },
          {
            "name": "transferFeeInBasisPoints",
            "type": "u16"
          },
          {
            "name": "cosignerProgramId",
            "type": "publicKey"
          },
          {
            "name": "multiplierLimits",
            "type": {
              "option": {
                "defined": "MultiplierLimits"
              }
            }
          },
          {
            "name": "transferFeeWithdrawAuthority",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "transferFeeTargetWallet",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "totalSplEquivalentMinted",
            "type": "u64"
          },
          {
            "name": "splExcessInEscrow",
            "type": "u64"
          },
          {
            "name": "allowBurn",
            "docs": [
              "used for variable-rate swaps"
            ],
            "type": "bool"
          },
          {
            "name": "allowClaimTransferFeeAuthAsCreator",
            "type": "bool"
          },
          {
            "name": "uncheckedFungible",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "metaplexJoiner",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "seed",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "deployment",
            "type": "publicKey"
          },
          {
            "name": "filterValue",
            "type": "publicKey"
          },
          {
            "name": "filterType",
            "docs": [
              "0 - collection",
              "1 - creator"
            ],
            "type": "u8"
          },
          {
            "name": "cosigner",
            "type": "publicKey"
          },
          {
            "name": "cosignerProgramId",
            "type": "publicKey"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                100
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "MultiplierLimits",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maxNumerator",
            "type": "u16"
          },
          {
            "name": "minDenominator",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "InitialiseInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "seed",
            "type": "publicKey"
          },
          {
            "name": "cosigner",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "cosignerProgramId",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "filterValue",
            "type": "publicKey"
          },
          {
            "name": "filterType",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "MetaplexJoiner",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "seed",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "deployment",
            "type": "publicKey"
          },
          {
            "name": "filterValue",
            "type": "publicKey"
          },
          {
            "name": "filterType",
            "docs": [
              "0 - collection",
              "1 - creator"
            ],
            "type": "u8"
          },
          {
            "name": "cosigner",
            "type": "publicKey"
          },
          {
            "name": "cosignerProgramId",
            "type": "publicKey"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                100
              ]
            }
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "MetaplexJoinerCreate",
      "fields": [
        {
          "name": "id",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "metaplexJoiner",
          "type": {
            "defined": "MetaplexJoiner"
          },
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "NoCreatorMatchingFilter",
      "msg": "No creator matching filter"
    },
    {
      "code": 6001,
      "name": "CreatorNotVerified",
      "msg": "Creator not verified"
    },
    {
      "code": 6002,
      "name": "MetadataCollectionNotVerified",
      "msg": "Collection not verified"
    },
    {
      "code": 6003,
      "name": "MetadataHasInvalidCollection",
      "msg": "Collection not verified"
    }
  ]
};

import React from 'react'

import { H1, H2 } from '../common/H'
import Table from '../common/Table'
import A from '../common/A'

// Mainnet

const mainnetTokenAddresses = [
  ['KEEP', '0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC'],
  ['tBTC', '0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa'],
  ['tBTC Deposit Token (TDT)', '0x10B66Bd1e3b5a936B7f8Dbc5976004311037Cdf0'],
]

const mainnetTokenTableData = [['Name', 'Address']].concat(
  mainnetTokenAddresses.map((record) => [
    record[0],
    <A href={`https://etherscan.io/address/${record[1]}`}>{record[1]}</A>,
  ])
)

const mainnetBeaconAddresses = [
  ['TokenStaking', '0x6D1140a8c8e6Fac242652F0a5A8171b898c67600'],
  ['KeepRandomBeaconService', '0x50510E691c90EA098e3fdd23C311731BF394aAFd'],
  ['KeepRandomBeaconOperator', '0xdF708431162Ba247dDaE362D2c919e0fbAfcf9DE'],
]

const mainnetBeaconTableData = [['Name', 'Address']].concat(
  mainnetBeaconAddresses.map((record) => [
    record[0],
    <A href={`https://etherscan.io/address/${record[1]}`}>{record[1]}</A>,
  ])
)

const mainnetECDSAAddresses = [
  ['BondedECDSAKeepFactory', '0xA7d9E842EFB252389d613dA88EDa3731512e40bD'],
  ['Sanctioned Applications', '0xe20A5C79b39bC8C363f0f49ADcFa82C2a01ab64a '],
]

const mainnetECDSATableData = [['Name', 'Address']].concat(
  mainnetECDSAAddresses.map((record) => [
    record[0],
    <A href={`https://etherscan.io/address/${record[1]}`}>{record[1]}</A>,
  ])
)

// Ropsten

const ropstenTokenAddresses = [
  ['KEEP', '0x90a1443edd0Ee2fe42DD46D0310E19A8BfB4Ba9d'],
  ['tBTC', '0x8661B93F1508e01e30D1679cE7817A04fEE2163C'],
  ['tBTC Deposit Token (TDT)', '0x777eceE852Ab7517d2537726b0e4685339701ea9'],
]

const ropstenTokenTableData = [['Name', 'Address']].concat(
  ropstenTokenAddresses.map((record) => [
    record[0],
    <A href={`https://ropsten.etherscan.io/address/${record[1]}`}>
      {record[1]}
    </A>,
  ])
)

const ropstenBeaconAddresses = [
  ['TokenStaking', '0x3D6Ef582590D75d1fBe63B379f626DA1f5b2f810'],
  ['KeepRandomBeaconService', '0x0D3735ED83F812417af32CEDD09772b0Ec43dAf6'],
  ['KeepRandomBeaconOperator', '0x89361Bd4E69C72194CDcAEcEA3A4df525F22Cb03'],
]

const ropstenBeaconTableData = [['Name', 'Address']].concat(
  ropstenBeaconAddresses.map((record) => [
    record[0],
    <A href={`https://ropsten.etherscan.io/address/${record[1]}`}>
      {record[1]}
    </A>,
  ])
)

const ropstenECDSAAddresses = [
  ['BondedECDSAKeepFactory', '0x26dBc9eF92a062c41FB07513313D14Fd54B630e5'],
  ['Sanctioned Applications', '0xc3f96306eDabACEa249D2D22Ec65697f38c6Da69'],
]

const ropstenECDSATableData = [['Name', 'Address']].concat(
  ropstenECDSAAddresses.map((record) => [
    record[0],
    <A href={`https://ropsten.etherscan.io/address/${record[1]}`}>
      {record[1]}
    </A>,
  ])
)

const AddressList = () => (
  <React.Fragment>
    <H1>Address List</H1>
    <H2>Mainnet - Tokens</H2>
    <Table data={mainnetTokenTableData} />
    <H2>Mainnet - Random Beacon Node</H2>
    <Table data={mainnetBeaconTableData} />
    <H2>Mainnet - ECDSA Node</H2>
    <Table data={mainnetECDSATableData} />
    <H2>Ropsten - Tokens</H2>
    <Table data={ropstenTokenTableData} />
    <H2>Ropsten - Random Beacon Node</H2>
    <Table data={ropstenBeaconTableData} />
    <H2>Ropsten - ECDSA Node</H2>
    <Table data={ropstenECDSATableData} />
  </React.Fragment>
)

export default AddressList

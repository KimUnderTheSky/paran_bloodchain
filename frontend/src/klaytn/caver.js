/** 변경변경
 * caver-js library helps making connection with klaytn node.
 * You can connect to specific klaytn node by setting 'rpcURL' value.
 * default rpcURL is 'https://api.baobab.klaytn.net:8651'.
 */
 import Caver from 'caver-js'

 const BAOBAB_TESTNET_RPC_URL = 'https://api.baobab.klaytn.net:8651/'
 
 const rpcURL = BAOBAB_TESTNET_RPC_URL
 
 // testnet url로 caver 객체 생성 
 // rpcURL에 특정 Klaytn 노드를 지정하여 연결할 수 있다.
 const caver = new Caver(rpcURL)
 
 export default caver
 
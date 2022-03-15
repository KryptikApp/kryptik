import firestore from './firebaseDB';
import { collection, getDocs, query, where } from "firebase/firestore";
import { ServiceState } from './types';
import BaseService from './BaseService';
const citiesRef = collection(firestore, "networks");


class Web3Service extends BaseService{
    public networks:Network[] = []
    private rpcEndpoints: { [networkName:string]: string } = {};
   
    constructor() {
        super();
    }

    async InternalStartService(){
        console.log("internal start service web3");
        this.serviceState = ServiceState.started;
        return this;
    }

   
  }





export default Web3Service;
import firestore from './firebaseDB';
import { collection, getDocs, query, where } from "firebase/firestore";
import { ServiceState } from './types';
import BaseService from './BaseService';
import {Network} from '../models/network'
import {
    Block,
    StaticJsonRpcProvider,
    TransactionRequest,
    TransactionResponse,
} from '@ethersproject/providers';
import{rpcEndpointsConfig} from '../config/providers'
import { getChainIdFromNetwork } from './Utils';
const citiesRef = collection(firestore, "networks");


class Web3Service extends BaseService{
    public networks:Network[] = []
    // network is referenced by its BIP44 chain id
    public rpcEndpoints: { [networkId:number]: string } = {};
    // providers for each network
    public providers: {[networkId:number]: any} = {};

    public web3Provider: StaticJsonRpcProvider = (null as unknown) as StaticJsonRpcProvider;
    public networkProviders: { [networkId:number]: StaticJsonRpcProvider } = {};
   
    constructor() {
        super();
    }

    async InternalStartService(){
        this.networks = await this.populateNetworksAsync();
        this.setRpcEndpoints();
        this.setProviders();
        console.log("internal start service search assets");
        return this;
    }

    // sets rpc endpoints for each supported network
    private setRpcEndpoints(){
        this.networks.forEach((network:Network)=>{
            let chainId:number = network.chainId
            if(network.isSupported){
                try{
                    this.rpcEndpoints[chainId] = rpcEndpointsConfig[chainId];
                }
                // TODO: add better handler 
                catch{
                    console.warn("Network is specified as supported, but there was an error adding rpc endpoint. Check rpc config.")
                }               
            }
        });
    }

    // sets providers for each supported network
    private setProviders(){
        for (let chainId in this.rpcEndpoints) {
            let newProvider = new StaticJsonRpcProvider(this.rpcEndpoints[chainId]);
            this.providers[chainId] = newProvider;
        }
    }

    private async populateNetworksAsync() :Promise<Network[]>{
        const q = query(citiesRef);
        const querySnapshot = await getDocs(q);
        let networksResult:Network[] = []
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        let docData = doc.data();
        let networkToAdd:Network = {
            fullName: docData.fullName,
            ticker: docData.ticker,
            chainId: docData.chainId,
            hexColor: docData.hexColor,
            about: docData.about,
            dateCreated: docData.dateCreated,
            iconPath: docData.iconPath,
            whitePaperPath: docData.whitePaperPath,
            isSupported: docData.isSupported
        }
        networksResult.push(networkToAdd);
        });
        return networksResult;
    }

    async searchNetworksAsync(searchQuery:string) :Promise<Network[]>{
        searchQuery = searchQuery.toUpperCase();
        let networksResult:Network[] = []
        this.networks.forEach((network) => {
        // filter results based on searchquery
        if(network.ticker.toUpperCase().includes(searchQuery) || network.fullName.toUpperCase().includes(searchQuery)){
            // build network object from doc result     
            networksResult.push(network);
            // console.log(doc.id, " => ", doc.data());
        }
        });
        return networksResult;
    }

    getAllNetworks(){
        if(this.serviceState != ServiceState.started) throw("Service is not running. Network data has not been populated.")
        return this.networks;
    }

    // send rpc call given a network
    async sendRpcCall(
        payload: {
          method: string;
          params: any[];
        },
        provider: StaticJsonRpcProvider | null = null
      ):Promise<any>
      {
          return (provider || this.web3Provider)?.send(payload.method, payload.params);
      }
      


      // helper functions!!

      async getProviderForNetwork (
        network: Network
      ): Promise<StaticJsonRpcProvider>{
        let chainId:number = getChainIdFromNetwork(network);
        // try to get existing provider (set on construction)... else, make provider and add to dict.
        if(this.networkProviders[chainId]!=null) return this.networkProviders[chainId];
        // 2x check to ensure provider class accepts chain id as number
        let newProvider = new StaticJsonRpcProvider(this.rpcEndpoints[chainId], chainId);
        this.networkProviders[chainId] = newProvider;
        await newProvider.ready;
        return newProvider;
  }
}


export default Web3Service;
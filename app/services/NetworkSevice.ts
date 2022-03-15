import firestore from './firebaseDB';
import { collection, getDocs, query, where } from "firebase/firestore";
import { ServiceState } from './types';
import BaseService from './BaseService';
import {
    Block,
    Network as EthersNetwork,
    StaticJsonRpcProvider,
    TransactionRequest,
    TransactionResponse,
} from '@ethersproject/providers';
import{rpcEndpointsConfig} from '../config/providers'
const citiesRef = collection(firestore, "networks");


class SearchAssetService extends BaseService{
    public networks:Network[] = []
    // network is referenced by its BIP44 chain id
    public rpcEndpoints: { [networkId:number]: string } = {};
    // providers for each network
    public providers: {[networkId:number]: any} = {};
   
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
                this.rpcEndpoints[chainId] = rpcEndpointsConfig[chainId];
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
   
  }





export default SearchAssetService;





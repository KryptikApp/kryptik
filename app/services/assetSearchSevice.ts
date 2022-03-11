import firestore from './firebaseDB';
import { collection, getDocs, query, where } from "firebase/firestore";
import { ServiceState } from './types';
import BaseService from './BaseService';
const citiesRef = collection(firestore, "networks");


class SearchAssetService extends BaseService{
    public networks:Network[] = []
   
    constructor() {
        super();
    }

    async InternalStartService(){
        this.networks = await this.populateNetworksAsync();
        console.log("internal start service search assets");
        this.serviceState = ServiceState.started;
        return this;
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
            whitePaperPath: docData.whitePaperPath
        }
        networksResult.push(networkToAdd);
        });
        return networksResult;
    }

    // TODO: cache assetlist, so no need to retrieve on search
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




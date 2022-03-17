import { Network } from "../models/network"


export const getChainIdFromNetwork = function(network:Network):number{
    if(network==null) throw(Error("The input network is null."));
    if(network.chainId==null) throw(Error("The input network chain ID is null."));
    return network.chainId;
}
// data model for cryptocurrency networks (blockchains)

interface Network {
    fullName: string,
    ticker: string,
    iconPath: string,
    isSupported: boolean,
    about: string,
    whitePaperPath: string,
    chainId: number,
    hexColor: string,
    dateCreated: Date
}
// data model for cryptocurrency networks (blockchains)

interface Network {
    fullName: string,
    ticker: string,
    iconPath: string,
    about: string,
    whitePaperPath: string,
    chainId: number,
    hexColor: string,
    dateCreated: Date
}
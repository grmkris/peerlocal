import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

export const ConnectWallet = () => {
    const { address, isConnected } = useAccount()
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })
    const { disconnect } = useDisconnect()

    if (isConnected)
        return (
            <div>
                Connected to {address}
                <button className={"btn btn-accent"} onClick={() => disconnect()}>Disconnect</button>
            </div>
        )
    return <button className={"btn btn-accent"} onClick={() => connect()}>Connect Wallet</button>
}

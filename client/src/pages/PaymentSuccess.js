import {useLocation} from 'react-router-dom'
const PaymentSuccess = ()=>{
 
    const location = useLocation()

    console.log(location)
    return (
        <div>
            <h1>payment_success page</h1>
            <p>Amount: {location.state && location.state.amount}</p>
            <p>ID: {JSON.stringify(location.state && location.state.transactionID)}</p>
        </div>
    )
}

export default PaymentSuccess
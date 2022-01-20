import {useState, useEffect} from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
import BraintreeDropin from 'braintree-dropin-react'
import braintree from 'braintree-web-drop-in'
import BraintreeSubmitButton from './BraintreeSubmitButton'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
const BraintreeDrop = (props)=>{
    const [loaded, setLoaded] = useState(false)
    const [token, setToken]= useState('')
    const [error, setError]= useState(null)
    // const [transactionID, setTransactionID]= useState(null)
    const navigate = useNavigate()

    useEffect(()=>{
        getToken()
    },[])

    const getToken = async()=>{
        try {
            let res = await axios.get('/api/braintree_token')
            setToken(res.data)
            setLoaded(true)
        } catch (error) {
            alert('err getting token')
            setLoaded(true)
        }
    }

    const handlePayment = async (payload)=>{
        console.log(payload)
        setError(null)
        // todo axios call to handle payment
        try{
            let res = await axios.post('/api/payment',{amount: props.amount, ...payload})
            // setTransactionID(res.data)
            navigate('/payment_success', {state:{amount: props.amount, transactionID: res.data}})
        }catch(err){
            setError(err.response.data.errors)
            alert('err in post')
        }

    }
    // if(transactionID){
    //     // return <Navigate to={{pathname: '/payment_success', state:{amount: props.amount, transactionID: transactionID}} />
    //     return <Navigate to='/payment_success' state= {{amount: props.amount, transactionID: transactionID}} />
    // }
    if(loaded){
        return (
            <Segment>
                {error && JSON.stringify(error)}
                <BraintreeDropin 
                  braintree={braintree}
                  authorizationToken={token}
                  handlePaymentMethod={handlePayment}
                  renderSubmitButton={BraintreeSubmitButton}
                />
            </Segment>
        )
    }
    return (
        <Dimmer active>
            <Loader>Loading Payment UI (token)</Loader> 
        </Dimmer>
    )
}
export default BraintreeDrop
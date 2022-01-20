import {useState, useEffect} from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
import BraintreeDropin from 'braintree-dropin-react'
import braintree from 'braintree-web-drop-in'
import BraintreeSubmitButton from './BraintreeSubmitButton'
import axios from 'axios'
const BraintreeDrop = (props)=>{
    const [loaded, setLoaded] = useState(false)
    const [token, setToken]= useState('')

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

    const handlePayment = (x)=>{
        console.log(x)
        // todo axios call to handle payment
    }
    if(loaded){
        return (
            <Segment>
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
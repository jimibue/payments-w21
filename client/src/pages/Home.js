import {useState} from 'react'
import {Divider, Header, Image, Input, Label, Segment} from 'semantic-ui-react'
import BraintreeDrop from '../components/BraintreeDrop'

const Home = () => {
  const [amount, setAmount] = useState(100.00)
  
  return (
    <Segment>
      <Header>Home!</Header>
      <Image centered size='small' src='https://images.squarespace-cdn.com/content/v1/5e9e77367eb5e10d5b687548/1614212204352-L0EZ20029ZRFUYDMPWM7/tjs-everything-bagel-spice' />
      <Label color='green'>Payment Amount</Label>
      <Input value={amount} onChange={(e)=> setAmount(e.target.value)} />
      <Divider />
      <BraintreeDrop amount={amount}/>
    </Segment>
  );
};
export default Home;

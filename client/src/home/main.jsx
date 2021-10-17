import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import Form from './form'
import FormatItem from './item'
import DisplayItems from './displayItems';
import { getAllOperations, getBalance } from './apicalls';
const Axios = require('axios')

const Main = () =>{

    const [items,setItems] = useState([])
    const [balance,setBalance] = useState({})
    const [isNewItem,setIsNewItem] =useState(false)
    useEffect(()=>{

        getAllOperations().then((res)=>setItems(res))
        console.log(items)
        if(items.length > 2){ 
        getBalance().then((res)=>setBalance(res))
        }


    },[])

    const handleNewItem = () =>{
        setIsNewItem(!isNewItem)
    }

    useEffect(()=>{
        getAllOperations().then((res)=>setItems(res))
        getBalance().then((res)=>setBalance(res))
    },[isNewItem])

    



    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        border:'solid 2px #121858'
      }));

    return(
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Item>
                    Balance
                    
                </Item>
            </Grid>
            <Grid item xs={6}>
                <Item>Ultimas operaciones</Item>
                
            </Grid>
            <Grid item xs={6}>
                
                <Item>
                    
                <div style={{
                    display:'inline-block',
                    width:'8em',
                    height:'8em',
                    padding:'5px',
                    borderRadius: '50%', 
                    borderWidth:'1px', 
                    background:`linear-gradient(90deg, #4CB942 ${balance.in*100/(balance.in+balance.out)}%, #ea4335 ${balance.out*100/(balance.in+balance.out)}%)`}}>
                    <div style={{width:'8em',height:'8em',borderRadius:'50%',background:'white'}}></div>
                    </div>


                        <div >
                        <h1 style={{color:'green', display:'inline-block'}} ><i class="fas fa-caret-up"/>{balance.in} </h1>
                        <h1 style={{color:'red', display:'inline-block'}}><i class="fas fa-caret-down"/>{balance.out}</h1>
                        </div>


                </Item>
                
            </Grid>
            <Grid item xs={6}>
                <Item>
                    <Form newItem={handleNewItem}/>
                    
                    {/* {items.map(e=>{
                        return <FormatItem description={e.description} amount={e.amount} type={e.OperationType} date={e.date}/>
                    })} */}
                    
                </Item>
                <DisplayItems showItems={items}/>
            </Grid>
            
        </Grid>
    )
}

export default Main
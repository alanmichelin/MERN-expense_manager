import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ItemContainer from './itemContainer';




export default function BasicTable({showItems}) {
    
    const [rows,setRows] =useState([])
    const [lastOrder,setLastOrder] = useState('')

   

    useEffect(()=>{

      console.log(showItems)
      sortByPrice('alphabetical')
      
    },[showItems])

    useEffect(()=>{
      
    },[])
    


    function createData( Description, Amount, Type, Date) {
        return {  Description, Amount, Type, Date };
      }



    
    
    const sortByPrice = (params) =>{
     
      let newOrder
      if(params==='minor') {
        newOrder = showItems.sort((a,b)=> b.amount-a.amount)
        setLastOrder('minor')
      }
      else if(params==='major'){
        newOrder = showItems.sort((a,b)=> a.amount-b.amount)
        setLastOrder('major')
      }
      else if(params==='alphabetical'){
        newOrder = showItems.sort((a,b)=>a.description > b.description)
        setLastOrder('default')
      }
      setRows(newOrder.map(e=>

        createData(e.description, e.amount, e.OperationType, new Date(e.date).toISOString().split('T')[0])
            ))
            console.log(newOrder)
            console.log(lastOrder)
        return lastOrder
    }
  return (
    <TableContainer component={Paper}>
      <button onClick={sortByPrice}>Sort by lowest </button>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left" onClick={()=>{lastOrder=='minor'?sortByPrice('major'):sortByPrice('minor')}}> Amount {lastOrder=='minor' ?  <i class="fas fa-caret-up"></i>:  <i class="fas fa-caret-down"></i> }</TableCell>
            <TableCell align="left">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <ItemContainer items={rows}/>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
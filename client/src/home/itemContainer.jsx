import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const ItemContainer = (props) =>{
    const items = props.items
    return items.map((row,idx) => (
              
        <TableRow key={idx}>
          <TableCell align="left" >

              {row.Description}
              </TableCell>

          <TableCell align="left" style={ row.Type==='in' ? {color:'green'} : {color:'red'} }>
          {row.Type==='in' ? <i class="fas fa-caret-up"></i> : <i class="fas fa-caret-down"></i> }{row.Amount}
          
          </TableCell>
          <TableCell align="left">{row.Date}</TableCell>
        </TableRow>
      ))
}

export default ItemContainer
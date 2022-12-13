
import React,{useState,useEffect} from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from "axios";

function Teacher(){
  

    const [mentor,setMentor]= useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event,newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

      useEffect(()=>{
        async function crud(){
        await axios.get(`https://632138b082f8687273ae2989.mockapi.io/guvi/crud/mentor`).then((response)=>{
          setMentor(response.data);
        });
      }
        crud();
      },[]);
    return(
        <>
 
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  
                  <TableCell align="right">Id</TableCell>
                  <TableCell align="right">Name</TableCell> 
                  <TableCell align="right">Subject</TableCell>
                  <TableCell align="right">Gender</TableCell>
                  <TableCell align='right'>Phone Number</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {mentor.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow
                  key={row.id}

                >
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.subject}</TableCell>
                  <TableCell align="right">{row.gender}</TableCell>
                  <TableCell align="right">{row.phonenumber}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            </Table>
          </TableContainer>
         <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={mentor.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Paper>
    
      </>
    )
}
export default Teacher;
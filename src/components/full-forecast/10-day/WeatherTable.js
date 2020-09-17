import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#9999ff",
    color: theme.palette.common.white,
    fontSize: 20
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function WeatherTable(props) {
  
  
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="right">Min_temp&nbsp;(&#8457;)</StyledTableCell>
            <StyledTableCell align="right">Max_temp&nbsp;(&#8457;)</StyledTableCell>
            <StyledTableCell align="right">Main&nbsp;(&#8457;)</StyledTableCell>
            <StyledTableCell align="right">Humidity&nbsp;(mph)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.fullWeatherForecasts.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.dt_txt}
              </StyledTableCell>
              <StyledTableCell align="right">{row.main.temp}</StyledTableCell>
              <StyledTableCell align="right">{row.main.temp_min}</StyledTableCell>
              <StyledTableCell align="right">{row.main.temp_max}</StyledTableCell>
              <StyledTableCell align="right">{row.main.humidity}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EnvironmentModel from './EnvironmentModel'
import KelvinToFahrenheit from './../../homepage/utils/KelvinToFahrenheit'


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#9999ff",
    color: theme.palette.common.white,
    fontWeight:'bold'
  },
  body: {
    fontSize: 14,
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row'

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
            <StyledTableCell align="right">Full report(click)</StyledTableCell>            
          </TableRow>
        </TableHead>

                  {props.fullWeatherForecasts.map((row) => (
            <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {props.isFullDateShow ? 
                    new Date(row.dt_txt).toString().split(" ").splice(1,4).join(' ') :
                    new Date(row.dt_txt.split(" ")[0]).toDateString()
                  }
                </StyledTableCell>
              <StyledTableCell align="right">{KelvinToFahrenheit(row.main.temp)}</StyledTableCell>
              <StyledTableCell align="right">{KelvinToFahrenheit(row.main.temp_min)}</StyledTableCell>
              <StyledTableCell align="right">
                {KelvinToFahrenheit(row.main.temp_max)}</StyledTableCell>
              <StyledTableCell align="right">{row.main.humidity}</StyledTableCell>
              <StyledTableCell align="right">
                <EnvironmentModel interval={row} city={props.city}/>
                </StyledTableCell>
              
            </StyledTableRow>
          ))}

      </Table>
    </TableContainer>
  );
}

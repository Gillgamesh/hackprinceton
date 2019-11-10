import React, {useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

import companies from '../companies.js';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: 800,
    backgroundColor: "#edf3f3",
  },
  cover: {
    height: 150,
    width: 150,
  },
  buttonBase:{
    margin: 10,
  },

}));

export default function InfoPage({match}) {
  const [state, setState] = useState({applied:false});
  const classes = useStyles();
  const theme = useTheme();
  let data = companies[match.params.companyId];
  
  const handleClick = () => {
    let body = {
        name: companies[match.params.companyId].company,
        status: "No Response Yet",
        position: companies[match.params.companyId].role,
        location: companies[match.params.companyId].location,
      };
    fetch('https://mdabedin.api.stdlib.com/sheet@dev/sheet/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(() => setState({applied:true}));
  };
  return (
    <center>
      <Card className={classes.card} style={{padding:'10px', marginTop:'90px'}}>
        <div style={{backgroundColor:'white', display:'flex', flexDirection:'column',alignItems:'center',borderRadius:'2px'}}>
          <CardMedia
            className={classes.cover}
            image= {data.image}
            title="Live from space album cover"
          />
  <Typography component="h5" variant="h5" >
    {data.company}
    </Typography>
  <Typography component="h6" variant="h6" >
    {data.role}
    </Typography>
  <Typography component="h6" variant="h6" >
    {data.location}
    </Typography>
      <Button 
        variant="contained"
        color="secondary"
        onClick={handleClick}
        disabled={state.applied}
        className={classes.buttonBase}>
    Apply!
    </Button>
      </div>
        <div style={{height:'10px'}}> </div>
          <div style={{backgroundColor:'white', display:'flex', flexDirection:'column',alignItems:'center', padding:'10px', borderRadius:'2px'}}>
Blockstack is a full-stack decentralized computing protocol that enables a new generation of applications where developers and users can interact fairly and securely, while curing the ills of centralized Internet design. Blockstack builds protocols and developer tools designed to enable a fair and open Internet that returns digital rights to developers and consumers. Led by some of the world's foremost experts on distributed systems, Blockstack allows users to own their own data that they can take with them from app to app in the ecosystem, along with their Blockstack ID that eliminates the need for password-based logins. The end result is privacy, security, and freedom.
            </div>
              </Card>
  </center>
  );
}

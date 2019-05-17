import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
       // marginRight: theme.spacing.unit,
        //width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});
function AddressForm() {
    

    return (
       
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Registration
      </Typography>
            <Grid container spacing={24}
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={8} sm={6} >
                
                    <TextField
                        required
                        id="accessCode"
                        name="accessCode"
                        label="Access Code"
                        //fullWidth
                        //Width="90%"
                        autoComplete="Access Code"
                    />
                </Grid>
                <Grid item xs={8} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        //fullWidth
                        autoComplete="fname"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="lname"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="uName"
                        name="uName"
                        label="User Name"
                        fullWidth
                        autoComplete="User Name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="password"
                        name="password"
                        label="password"
                        fullWidth
                        autoComplete="password"
                    />
                </Grid>
               
            </Grid>
        </React.Fragment>
       
    );
}


export default(AddressForm);
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';





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



function SelectPage() {

    

    return (
        
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Registration
      </Typography>
            <Grid container spacing={24}>
               
                <Grid item xs={8} sm={6}>
                    <TextField
                        required
                        id="password"
                        name="password"
                        label="password"
                        fullWidth
                        autoComplete="password"
                    />
                </Grid>
                <Grid item xs={12} >
                <Select
                    //onChange={this.handleChange}
                    input={<Input name="age" id="age-helper" />}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Corn</MenuItem>
                    <MenuItem value={20}>Tomattos</MenuItem>
                    <MenuItem value={30}>Mashrooms</MenuItem>
                </Select>
                </Grid>
            </Grid>
           
        </React.Fragment>

    );
}


export default withStyles(styles) (SelectPage);
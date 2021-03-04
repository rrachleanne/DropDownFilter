import Button from '../shared/ui/components/button';
import React from 'react';
import ShareLayout from '../shared/ui/layouts/share-layout';
import { FormControl, FormControlLabel, FormLabel, Grid, TextField } from '@material-ui/core';
import SearchIcon from '../shared/ui/icons/search-icon';
import Input from '../shared/ui/components/input';
 
export default function ShareComponent() {
  return (
    <ShareLayout> 
      <Grid>
        <Grid item xs={6}>


          <TextField
            id="standard-full-width"
            label="Matter"
            placeholder="RMW51"
            helperText="Estate General"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          /> 
          <TextField
            id="standard-full-width"
            label="Activity Code"
            placeholder="poa"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          /> 
        </Grid>
        <Grid item xs={6}>
          Amount / total
        </Grid>
      </Grid>
      <Grid>
        <Grid item xs={12}> 
          <Button
            color="primary"
            variant="contained"
            >
            primary
          </Button>
          <Button
            color="primary"
            variant="outlined"
            >
            secondary
          </Button>
        </Grid>
      </Grid>

    </ShareLayout>
  );
}

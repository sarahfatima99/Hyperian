import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Dialogmodal from '../Dialogmodal';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});



class DialogSelect extends React.Component {
  state = {
    open: false,
    age: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: Number(event.target.value) });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleClickOpen}>Apply conditonal logic</Button>
        <Dialog
          sx={{
            width: 500,
            color: 'success.main',
          }}
          disableBackdropClick
          disableEscapeKeyDown
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div><DialogTitle style={{marginBottom:'10px'}}>Branching and Conditons</DialogTitle>
          <h4 className='control'>Take full control of the flow</h4>
          </div>
          <DialogContent style={{backgroundColor:'inherit'}}>
            <Dialogmodal></Dialogmodal>
          
          </DialogContent>
          <DialogActions>
            <Button style={{Colour:'Black'}} onClick={this.handleClose} color="inherit">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="Black">
              Save
            </Button>
            
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

DialogSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DialogSelect);

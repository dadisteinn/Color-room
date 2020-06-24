import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      newPaletteName: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const { open, newPaletteName } = this.state;
    const { handleSubmit } = this.props;

    return (
      <Dialog
        open={open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Choose A Palette Name</DialogTitle>

        <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
          <DialogContent>
            <DialogContentText>
              Enter a name for you new palette. Make sure it´s unique!
            </DialogContentText>

            <TextValidator
              label="Palette Name"
              value={this.state.newPaletteName}
              name="newPaletteName"
              fullWidth
              margin="normal"
              onChange={this.handleChange}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={[
                "Enter Palette Name",
                "Palette name must be unique",
              ]}
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>

            <Button variant="contained" color="primary" type="submit">
              Save palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    );
  }
}

export default PaletteMetaForm;
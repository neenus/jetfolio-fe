import React from "react";
import { TextField } from "@mui/material";

const FormInput = ({ ...otherProps }) => {
  return (
    <React.Fragment>
      <TextField
        variant="outlined"
        required
        autoComplete="off"
        fullWidth
        {...otherProps}
      />
    </React.Fragment>
  );
};

export default FormInput;

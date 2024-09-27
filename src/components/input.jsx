import React from "react";
import { TextField } from "@mui/material";

const Inputs = (props) => {
  return (
    <>
      <TextField
        id="outlined-textarea"
        label={
          <span>
            {props.label} <span style={{ color: "red" }}>*</span>
          </span>
        }
        placeholder={props.placeholder}
        size="small"
        sx={{
          "& .MuiInputBase-input": {
            color: "black",
            fontSize:"14px",
            padding:"10px ",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid ##DFDFDF",
            borderRadius:"8px",
            height:"48px",
          },
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "#000",
            },
            "&.Mui-focused fieldset": {
              border: "1px solid #000",
            },
          },
          "& .MuiInputLabel-root": {
            color: "black",
            fontSize:"14px",
            padding:"4px 0",
            "&.Mui-focused": {
              color: "black",
            },

          },
          "& .MuiInputLabel-asterisk": {
            color: "red",
          },
          "&::placeholder": {
            color: "black",
          },
        }}
      />
    </>
  );
};

export default Inputs;

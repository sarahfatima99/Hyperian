import React, { useState } from "react";
import "./FromFields.css";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
export default function Ratings() {
    const [value,setValue] = useState(0);
  return (
    <div>
      <div className="form-type container">
        <span className="ques_no">1.</span>
        <input
          type="text"
          className="input-ques"
          placeholder="Enter Question Text"
        />
        <textarea
          type="textarea"
          className="input-ques description"
          placeholder="Enter Question Description (optional)"
        />

        <Rating
          name="simple-controlled"
          value={value}
          size="large"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Button
          style={{
            marginTop: "30px",
            marginLeft: "40px",
            padding: "8px",
            fontSize: "18px",
            color: "#68c5c5",
            borderColor: "#68c5c5",
          }}
          variant="outlined"
        >
          Ok
        </Button>
      </div>
    </div>
  );
}

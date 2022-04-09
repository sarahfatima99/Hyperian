import React, { useState } from "react";
import "./FromFields.css";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default function Ratings(props) {

    const [value,setValue] = useState(0);
  return (
    <div>
      <div className="form-type container">
        <span className="ques_no">{props.questionNumber}.</span>
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
<br/>
        <Rating
          name="customized-color"
          value={value}
          size="large"
          emptyIcon={props.ratingEmptyIcon} 
          icon={props.ratingicon}
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

  import React from "react";
import {
  CardContent,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

interface ICard {
  title: string;
  content: string;
  image: string;
  id: number;
}

export const CardComponent = (props: ICard) => {
  return (
    <Card sx={{ maxWidth: 300, marginBottom: "20px" }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={props.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {props.content}
          </Typography>
        </CardContent>
        <Button size="small" color="primary" onClick={() => { console.log(props.id); }}>
          Make reservation
        </Button>
      </CardActionArea>
    </Card>
  );
};

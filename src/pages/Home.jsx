import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Card, CardMedia, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: '0px 0px 15px 15px',
    height: 600,
    '@media (max-width: 700px)': {
      height: 400,
    },
    '@media (max-width: 400px)': {
      height: 250,
    },
    objectFit: 'cover'
  }
}));

const items = [
  {
    imgPath: require("../assets/campus1.jpg"),
    id: 1
  },
  {
    imgPath: require("../assets/classroom.jpg"),
    id: 2
  },
  {
    imgPath: require("../assets/campus2.jpg"),
    id: 3
  }
]

const Banner = (props) => {
  return (
    <Card raised className={props.classes.card}>
      <CardMedia className={props.classes.card} component="img" image={props.item.imgPath} />
    </Card>
  )
}

function Home() {
  const classes = useStyles()
  return (
    <Grid sx={{ m: 1 }}>
      <Carousel>
        {items.map((item) => {
          return (
            <Banner key={item.id} item={item} classes={classes} />
          )
        })}
      </Carousel>
    </Grid>
  )
}

export default Home;

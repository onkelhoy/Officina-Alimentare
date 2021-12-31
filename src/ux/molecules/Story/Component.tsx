import React from 'react';
import { createUseStyles } from 'react-jss';

// Atoms ⚛️
import { Typography } from 'ux/atoms/Typography';
import { Image } from 'ux/atoms/Image';
import { Grid } from 'ux/atoms/Grid';
import { MediaMobile } from 'utils/Types';

export interface Props {
  date: number;
  texts: string[];
}

export const Story: React.FC<Props> = props => {
  const classes = useStyles(props);

  return (
    <Grid 
      container 
      cols={{
        default: "1fr 3fr 1fr",
        mobile: '1fr 1fr',
      }}
      rows={{
        default: '1fr',
        mobile: '100px auto'
      }}
      colGap="1rem"
      alignItems="center"
      className={classes.container}
    >
      <Grid 
        item 
        row={{ from: 1, to: 2 }}
        col={{ from: 1, to: 2 }}
      >
        <Image className={classes.image} style={{ transform: 'translateX(-0.5rem)' }} src={`/assets/images/story/${props.date}A.svg`} alt="story A"/>
      </Grid>
      <Grid 
        item
        row={{ default: { from: 1, to: 2 }, mobile: { from: 2, to: 3 } }}
        col={{ default: { from: 2, to: 3 }, mobile: { from: 1, to: 3 } }}
        className={classes.texts}
      >
        {props.texts.map((text, index) => (
          <Typography align="justify" variant="body" key={index}>{text}</Typography>
        ))}
      </Grid>
      <Grid 
        item
        row={{ from: 1, to: 2 }}
        col={{ default: { from: 3, to: 4 }, mobile: { from: 2, to: 3 } }}
        className={classes.rightimage}
      >
        <Image className={classes.image} style={{ transform: 'translateX(0.5rem)' }} src={`/assets/images/story/${props.date}B.svg`} alt="story B"/>
      </Grid>
    </Grid>
  )
}

type RuleName = 'container'|'texts'|'image'|'rightimage'|MediaMobile;
const useStyles = createUseStyles<RuleName, Props, unknown>({
  container: {},
  image: {},
  rightimage: {},
  texts: {},

  "@media screen and (max-width: 480px)": {
    image: {
      maxWidth: 100
    },
    rightimage: {
      textAlign: 'right'
    },
    container: {
      marginTop: '2rem'
    },
    texts: {
      height: '100%',
    }
  }
});

// helper functions

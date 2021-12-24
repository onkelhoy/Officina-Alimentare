import React from 'react';
import { createUseStyles } from 'react-jss';

// utils
import { Color } from 'utils/Enums';

// Atoms ⚛️
import { Typography } from 'ux/atoms/Typography';
import { Image } from 'ux/atoms/Image';
import { Link } from 'ux/atoms/Link';
import { Flex } from 'ux/atoms/Flex';

export interface Props {
  image: {
    src: string;
    alt: string;
  };
  name: string;
  role: string;
  linkedin: string;
}

export const Profile: React.FC<Props> = props => {
  const classes = useStyles(props);
  
  return (
    <div>
      <Flex className={classes.flex} justifyContent="center">
        <Image {...props.image} />
      </Flex>
      <Typography variant="subheader" align="center">{props.name}</Typography>
      <Typography align="center">{props.role}</Typography>
      <Typography align="center">
        <Link href={props.linkedin}>
          <Image className={classes.linkedin} width={17} src="assets/images/team/linkedin.svg" alt="linkedin" />
        </Link>
      </Typography>
    </div>
  )
}

// types & interfaces
type RuleName = 'linkedin' | 'flex';

// css design
const useStyles = createUseStyles<RuleName, Props, unknown>({
  flex: {
    height: 170,

    '& img': {
      width: 'auto'
    }
  },
  linkedin: {
    '& svg': {
      color: Color.Linkedin,
    }
  },
});

// helper functions
import React from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: -1,
      left: -1,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      marginTop: theme.spacing(0.25),
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(0),
    },
    nameSurnameAndStatus: {
      marginTop: theme.spacing(-0.15),
      marginLeft: theme.spacing(1.45),
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(0),
    },
  })
);

const AvatarPic = require("../../../Images/Menu/TopMenu/NatureLover.jpg");
const initials_name_surname = "NL";
const name_surname = "Nature Lover";
const status = "Beginner";

const TopMenu = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List
        style={{
          width: "100%",
        }}
      >
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <StyledBadge
              overlap="circle"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Avatar
                className={classes.large}
                alt="Nature Lover"
                src={AvatarPic}
              >
                {initials_name_surname}
              </Avatar>
            </StyledBadge>
          </ListItemIcon>
          <ListItemText className={classes.nameSurnameAndStatus}>
            <Typography
              style={{
                fontFamily: "Futura Md BT",
                fontSize: "1.66em",
                color: "#FFFFFF",
              }}
            >
              {name_surname}
            </Typography>
            <Typography
              style={{
                fontFamily: "Futura Md BT",
                fontSize: "1.16em",
                color: "#FFFFFF",
                opacity: 0.5,
              }}
            >
              {status}
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );
};
export default TopMenu;

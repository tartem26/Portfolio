import React from "react";
import Paper from "@material-ui/core/Paper";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    large: {
      width: theme.spacing(22),
      height: theme.spacing(22),
    },
    paper: {
      width: "100%",
      padding: theme.spacing(3),
      marginBottom: theme.spacing(6.4),
      color: theme.palette.text.secondary,
    },
    avatar: {
      display: "flex",
      justifyContent: "center",
      marginBottom: theme.spacing(2.5),
    },
    firstNameInput: {
      display: "flex",
      justifyContent: "center",
      marginBottom: theme.spacing(2.17),
    },
    lastNameInput: {
      display: "flex",
      justifyContent: "center",
    },
  })
);

const AvatarPic = require("../../../Images/Menu/TopMenu/NatureLover.jpg");
const initials_name_surname = "NL";

function MainInformation(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} variant="outlined" elevation={0}>
        <div className={classes.avatar}>
          <Badge
            overlap="circle"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            badgeContent={
              <AddAPhotoIcon style={{ fontSize: 30, color: "#000000" }} />
            }
          >
            <Avatar
              className={classes.large}
              alt="Nature Lover"
              src={AvatarPic}
            >
              {initials_name_surname}
            </Avatar>
          </Badge>
        </div>
        <div className={classes.firstNameInput}>
          <TextField
            id="outlined-basic"
            label="First name"
            variant="outlined"
          />
        </div>
        <div className={classes.lastNameInput}>
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
        </div>
      </Paper>
    </div>
  );
}

export default MainInformation;

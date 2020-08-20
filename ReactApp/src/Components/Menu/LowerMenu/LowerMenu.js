import React from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import HeadsetMicOutlinedIcon from "@material-ui/icons/HeadsetMicOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(0),
      marginLeft: theme.spacing(1.3),
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(0.4),
    },
    listItemText: {
      fontSize: "1.2em",
      fontFamily: "Avenir",
    },
  })
);

const LowerMenu = () => {
  const classes = useStyles();

  function renderSwitch(parm) {
    switch (parm) {
      case 0:
        return (
          <HeadsetMicOutlinedIcon style={{ fontSize: 30, color: "#FFFFFF" }} />
        );
      case 1:
        return <SettingsIcon style={{ fontSize: 30, color: "#FFFFFF" }} />;
      case 2:
        return (
          <PowerSettingsNewIcon style={{ fontSize: 30, color: "#FFFFFF" }} />
        );
    }
  }

  function renderSwitch2(parm) {
    switch (parm) {
      case 0:
        return "/Help";
      case 1:
        return "/Settings";
    }
  }

  return (
    <div className={classes.root}>
      <List>
        {["Help", "Settings", "Log Out"].map((text, index) => (
          <ListItem
            button
            key={text}
            component={Link}
            to={renderSwitch2(index)}
          >
            <ListItemIcon>{renderSwitch(index)}</ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={text}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default LowerMenu;

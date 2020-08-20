import React from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import TimelineOutlinedIcon from "@material-ui/icons/TimelineOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import PeopleIcon from "@material-ui/icons/People";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(-1.2),
      marginLeft: theme.spacing(1.3),
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(0),
    },
    listItemText: {
      fontSize: "1.2em",
      fontFamily: "Avenir",
    },
  })
);

const MiddleMenu = () => {
  const classes = useStyles();

  function renderSwitch(parm) {
    switch (parm) {
      case 0:
        return <HomeOutlinedIcon style={{ fontSize: 30, color: "#FFFFFF" }} />;
      case 1:
        return (
          <TimelineOutlinedIcon style={{ fontSize: 30, color: "#FFFFFF" }} />
        );
      case 2:
        return (
          <WorkOutlineOutlinedIcon style={{ fontSize: 30, color: "#FFFFFF" }} />
        );
      case 3:
        return (
          <AssignmentOutlinedIcon style={{ fontSize: 30, color: "#FFFFFF" }} />
        );
      case 4:
        return (
          <DateRangeOutlinedIcon style={{ fontSize: 30, color: "#FFFFFF" }} />
        );
      case 5:
        return <SendOutlinedIcon style={{ fontSize: 30, color: "#FFFFFF" }} />;
      case 6:
        return <PeopleIcon style={{ fontSize: 30, color: "#FFFFFF" }} />;
    }
  }

  function renderSwitch2(parm) {
    switch (parm) {
      case 0:
        return "/NewsFeed";
      case 1:
        return "/MyDashboard";
      case 2:
        return "/Projects";
      case 3:
        return "/Checklists";
      case 4:
        return "/Events";
      case 5:
        return "/Messages";
      case 6:
        return "/Friends";
    }
  }

  return (
    <div className={classes.root}>
      <List>
        {[
          "News Feed",
          "My Dashboard",
          "Projects",
          "Checklists",
          "Events",
          "Messages",
          "Friends",
        ].map((text, index) => (
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

export default MiddleMenu;

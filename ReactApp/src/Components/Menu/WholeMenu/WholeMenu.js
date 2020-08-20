import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import TopMenu from "../TopMenu/TopMenu";
import MiddleMenu from "../MiddleMenu/MiddleMenu";
import LowerMenu from "../LowerMenu/LowerMenu";

const drawerWidth = 307.488619;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      backgroundColor: "#FFFFFF",
      boxShadow: "none",
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundImage:
        "linear-gradient(246.14deg, #6a5fdd 12.24%, #241d8c 117.57%)",
    },
    wholeMenu: {
      display: "flex",
      minHeight: "100%",
      flexDirection: "column",
      backgroundColor: "transparent",
      overflowX: "hidden",
    },
    divList1List2: {
      top: 0,
      width: drawerWidth,
      backgroundColor: "transparent",
    },
    list1: {
      width: drawerWidth,
      backgroundColor: "transparent",
    },
    list2: {
      width: drawerWidth,
      opacity: 0.6,
      color: "#FFFFFF",
      backgroundColor: "transparent",
    },
    gapMenu1: {
      width: drawerWidth,
      height: "100%",
      bottom: 0,
    },
    list3: {
      width: drawerWidth,
      height: "auto",
      verticalAlign: "bottom",
      opacity: 0.6,
      color: "#FFFFFF",
      backgroundColor: "transparent",
    },
  })
);

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const WholeMenu = (props: Props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.wholeMenu}>
      <div className={classes.divList1List2}>
        <div className={classes.list1}>
          <TopMenu />
        </div>
        <div className={classes.list2}>
          <MiddleMenu />
        </div>
      </div>
      <div className={classes.gapMenu1}></div>
      <div className={classes.list3}>
        <LowerMenu />
      </div>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon
              style={{
                fontSize: "1em",
                color: "#000000",
              }}
            />
          </IconButton>
          <Typography
            style={{
              fontFamily: "Avenir 85 Heavy",
              fontSize: "2.3em",
              color: "#222222",
            }}
            noWrap
          >
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default WholeMenu;

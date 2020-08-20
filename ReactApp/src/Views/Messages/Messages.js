import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import WholeMenu from "../../Components/Menu/WholeMenu/WholeMenu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
  })
);

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

function Messages(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <WholeMenu title="Messages" />
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}

export default Messages;

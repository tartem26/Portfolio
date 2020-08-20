import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import WholeMenu from "../../Components/Menu/WholeMenu/WholeMenu";
import MainInformation from "../../Components/UserProfile/MainInformation/MainInformation";

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

function UserProfile(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <WholeMenu title="User Information" />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={3}>
          <Grid item xs></Grid>
          <Grid item xs={8}>
            <Grid>
              <MainInformation />
            </Grid>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </main>
    </div>
  );
}

export default UserProfile;

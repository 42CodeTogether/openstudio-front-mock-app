import {
  AppBar,
  Box,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: {
    flexGrow: 1,
    position: "static",
    backgroundColor: "black",
  },
  title: {
    marginRight: "5px",
  },
  button: {},
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  box: {
    display: "flex",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [isLogin, setIsLogin] = useState(false);
  const history = useHistory();

  useEffect(() => {
    let url;
    if (isLogin) {
      url = "/dash-board";
    } else {
      url = "/";
    }
    history.push(url);
  }, [history, isLogin]);

  return (
    <AppBar className={classes.header}>
      <Toolbar className={classes.toolbar}>
        <Box component="span" className={classes.box}>
          <Typography className={classes.title} variant={"h2"}>
            OpenStudio
          </Typography>
          {isLogin ? (
            <>
              <Button
                className={classes.button}
                color={"inherit"}
                onClick={() => {
                  history.push("/dash-board");
                }}
              >
                DashBoard
              </Button>
              <Button
                className={classes.button}
                color={"inherit"}
                onClick={() => {
                  history.push("/subject");
                }}
              >
                Subject
              </Button>
            </>
          ) : null}
        </Box>
        <Box component="span" className={classes.box}>
          <Button
            className={classes.button}
            color={"inherit"}
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            {isLogin ? "Logout" : "Login"}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

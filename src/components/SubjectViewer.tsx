import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { NoEncryption } from "@material-ui/icons";
import React, { useState } from "react";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  circle: {
    width: "50px",
    height: "50px",
    borderRadius: "25px",
    borderWidth: "1px",
    borderStyle: "line",
    backgroundColor: "black",
    color: "white",
    margin: "1px",
    outline: "none",
  },
  selectors: {
    paddingBottom: "10px",
  },
  listBox: {
    width: "28%",
    maxHeight: "10vh",
  },
  subjectList: {
    maxHeight: "70vh",
    overflowY: "scroll",
    overflowX: "hidden",
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  detailBox: {
    width: "70%",
  },
  containerBox: {
    display: "flex",
    justifyContent: "space-between",
  },
  detailCard: {
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

const CircleSelector = () => {
  const classes = useStyles();
  return (
    <Box className={classes.selectors}>
      <button className={classes.circle}>0</button>
      <button className={classes.circle}>1</button>
      <button className={classes.circle}>2</button>
      <button className={classes.circle}>3</button>
      <button className={classes.circle}>4</button>
      <button className={classes.circle}>5</button>
      <button className={classes.circle}>6</button>
    </Box>
  );
};

const SubjectList = () => {
  const classes = useStyles();

  return (
    <Box className={classes.subjectList}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card elevation={3}>
            <CardHeader title="SubjectName" />
            <CardContent>Subject description</CardContent>
            <CardActions>
              <Button variant="contained">Go</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card elevation={3}>
            <CardHeader title="SubjectName" />
            <CardContent>Subject description</CardContent>
            <CardActions>
              <Button variant="contained">Go</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card elevation={3}>
            <CardHeader title="SubjectName" />
            <CardContent>Subject description</CardContent>
            <CardActions>
              <Button variant="contained">Go</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card elevation={3}>
            <CardHeader title="SubjectName" />
            <CardContent>Subject description</CardContent>
            <CardActions>
              <Button variant="contained">Go</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card elevation={3}>
            <CardHeader title="SubjectName" />
            <CardContent>Subject description</CardContent>
            <CardActions>
              <Button variant="contained">Go</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card elevation={3}>
            <CardHeader title="SubjectName" />
            <CardContent>Subject description</CardContent>
            <CardActions>
              <Button variant="contained">Go</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

const SubjectDetail = () => {
  const classes = useStyles();
  const [openRandom, setOpenRandom] = useState(false);
  const [openTeam, setOpenTeam] = useState(false);
  const history = useHistory();

  const handleClickOpenRandom = () => {
    setOpenRandom(true);
  };

  const handleCloseRandom = () => {
    setOpenRandom(false);
  };

  const handleClickOpenTeam = () => {
    setOpenTeam(true);
  };

  const handleCloseTeam = () => {
    setOpenTeam(false);
  };

  const handleClickAcceptRandom = () => {
    handleCloseRandom();
    history.push("/time-table");
  };

  return (
    <>
      <Card elevation={3} className={classes.detailCard}>
        <Box>
          <CardHeader title="ft_printf" />
          <CardContent>
            The versatility of the printf function in C represents a great
            exercise in programming for us. This project is of moderate
            difficulty.
            <br />
            It will enable you to discover variadic functions in C.
            <br />
            The key to a successful ft_printf is a well-structured and good
            extensible code
          </CardContent>
        </Box>
        <CardActions>
          <Button variant="contained" onClick={handleClickOpenRandom}>
            ?????? ??????
          </Button>
          <Button variant="contained" onClick={handleClickOpenTeam}>
            ?????? ??????
          </Button>
        </CardActions>
      </Card>
      <Dialog
        open={openRandom}
        onClose={handleCloseRandom}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"?????? ??????"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ?????? ????????? ?????????????????????????
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRandom} color="primary">
            ??????
          </Button>
          <Button onClick={handleClickAcceptRandom} color="primary" autoFocus>
            ??????
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openTeam}
        onClose={handleCloseTeam}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">?????? ??????</DialogTitle>
        <DialogContent>
          <DialogContentText>
			(?????? ????????? ????????? ????????? ???????????????.)<br/>
            ?????? ????????? ?????? ?????? ?????? ??? ??????????????????.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="?????? ???"
            type="email"
            fullWidth
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseTeam} color="primary">
            ??????
          </Button>
          <Button
            onClick={() => {
              handleCloseTeam();
              history.push("/dash-board");
            }}
            color="primary"
          >
            ??????
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const SubjectViewer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.containerBox}>
      <Box className={classes.listBox}>
        <CircleSelector></CircleSelector>
        <SubjectList></SubjectList>
      </Box>
      <Box className={classes.detailBox}>
        <SubjectDetail></SubjectDetail>
      </Box>
    </Box>
  );
};

export default SubjectViewer;

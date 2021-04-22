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
import React, { useState } from "react";

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
    width: "27%",
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
  return (
    <>
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
      </Grid>
    </>
  );
};

const SubjectDetail = () => {
  const classes = useStyles();
  const [openRandom, setOpenRandom] = useState(false);
  const [openTeam, setOpenTeam] = useState(false);

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
          <Button variant="contained" onClick={handleClickOpenRandom}>빠른 시작</Button>
          <Button variant="contained" onClick={handleClickOpenTeam}>팀원 모집</Button>
        </CardActions>
      </Card>
      <Dialog
        open={openRandom}
        onClose={handleCloseRandom}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"랜덤 매칭"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            랜덤 매칭을 신청하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRandom} color="primary">
			취소
          </Button>
		  <Button onClick={handleCloseRandom} color="primary" autoFocus>
            신청
          </Button>
        </DialogActions>
      </Dialog>
	<Dialog
        open={openRandom}
        onClose={handleCloseRandom}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"랜덤 매칭"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            랜덤 매칭을 신청하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRandom} color="primary">
			취소
          </Button>
		  <Button onClick={handleCloseRandom} color="primary" autoFocus>
            신청
          </Button>
        </DialogActions>
      </Dialog>
	  <Dialog open={openTeam} onClose={handleCloseTeam} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">팀원 모집</DialogTitle>
        <DialogContent>
          <DialogContentText>
            팀원 모집을 위한 글을 작성 후 신청해주세요.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="모집 글"
            type="email"
            fullWidth
			multiline
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseTeam} color="primary">
            취소
          </Button>
          <Button onClick={handleCloseTeam} color="primary">
            신청
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

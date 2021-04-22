import React, { DOMElement, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  checkbox: {
    width: "5vw",
  },
  box: {
    display: "flex",
    flexDirection: "row-reverse",
    minWidth: "100%",
    marginTop: "1vh",
  },
  button: {
    width: "10vw",
  },
});

function createData(name: string) {
  return { name };
}

const rows = [
  createData("00:00 ~ 02:00"),
  createData("02:00 ~ 04:00"),
  createData("04:00 ~ 06:00"),
  createData("06:00 ~ 08:00"),
  createData("08:00 ~ 10:00"),
  createData("10:00 ~ 12:00"),
  createData("12:00 ~ 14:00"),
  createData("14:00 ~ 16:00"),
  createData("16:00 ~ 18:00"),
  createData("18:00 ~ 20:00"),
  createData("20:00 ~ 22:00"),
  createData("22:00 ~ 00:00"),
];

const TimeTable = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  const handleButton = () => {
    setOpen(true);
  };

  const handleClose = () => {
	  setOpen(false);
  }

  const handleAccept = () => {
	  setOpen(false);
	  history.push("/dash-board");
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="center">
                <Typography variant="h5">월</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h5">화</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h5">수</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h5">목</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h5">금</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h5">토</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h5">일</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  <Typography variant="h6">{row.name}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Checkbox className={classes.checkbox} />
                </TableCell>
                <TableCell align="center">
                  <Checkbox className={classes.checkbox} />
                </TableCell>
                <TableCell align="center">
                  <Checkbox className={classes.checkbox} />
                </TableCell>
                <TableCell align="center">
                  <Checkbox className={classes.checkbox} />
                </TableCell>
                <TableCell align="center">
                  <Checkbox className={classes.checkbox} />
                </TableCell>
                <TableCell align="center">
                  <Checkbox className={classes.checkbox} />
                </TableCell>
                <TableCell align="center">
                  <Checkbox className={classes.checkbox} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box className={classes.box}>
        <Button
          variant="contained"
          className={classes.button}
          onClick={handleButton}
        >
          등록
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"랜덤 매칭"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            해당 내용으로 빠른 매칭을 신청하겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            취소
          </Button>
          <Button onClick={handleAccept} color="primary" autoFocus>
            신청
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TimeTable;

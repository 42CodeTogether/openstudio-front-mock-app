import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

type propTypes = {
  title?: string;
  count?: number;
  date?: string;
};

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    justifyContent: "center",
  },
}));

const Reservation = ({ title, count, date }: propTypes) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader title={"현재 매칭 정보"}></CardHeader>
      <CardContent>
        매칭 신청 제목 : {title}
        <br />
        예약 대기 인원 : {count}명
        <br />
        매칭 예정 날짜 : {date}
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default Reservation;

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  log: {},
}));

type propTypes = {
  subjectName?: string;
  members?: string[];
  date?: string;
};

const Log = ({ subjectName, members, date }: propTypes) => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader title={subjectName} />
      <CardContent>
        <Box>매칭 멤버 : {members?.map((name)=> `${name} `)}</Box>
        <Box>매칭 날짜 : {date}</Box>
      </CardContent>
    </Card>
  );
};

export default Log;

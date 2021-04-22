import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
	  padding: theme.spacing(3),
	  margin: theme.spacing(1)
  }
}));

const IndexPage = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box>
        <Paper elevation={3} className={classes.card}>
          <Typography variant="h3" color="inherit">
            42를 여행하는 당신만을 위한 특별한 <b>매칭 서비스</b>
          </Typography>
        </Paper>
      </Box>
      <Box>
        <Paper elevation={3} className={classes.card}>
          <Typography variant="h4">42서울 총 인원 : 800</Typography>
          <Typography variant="h4">총 사용 인원 : 500</Typography>
          <Typography variant="h4">누적 매칭 인원 : 300</Typography>
          <Typography variant="h4">누적 매칭 팀 : 100</Typography>
          <Typography variant="h4">이번 주에 예약한 인원 : 20</Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default IndexPage;

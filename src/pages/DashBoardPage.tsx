import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Log from "../components/Log";
import Reservation from "../components/Reservation";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    display: "flex",
    flexDirection: "column",
  },
}));

const DashBoardPage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainBox}>
      <Reservation
        title={"ft_printf"}
        count={14}
        date={new Date().toLocaleDateString()}
      />
      <br />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Log
            subjectName={"libft"}
            members={["jayi", "jaeskim", "seungyel"]}
			date={new Date().toLocaleString()}
          />
        </Grid>
		<Grid item xs={4}>
          <Log
            subjectName={"libft"}
            members={["jayi", "jaeskim", "seungyel"]}
			date={new Date().toLocaleString()}
          />
        </Grid>
		<Grid item xs={4}>
          <Log
            subjectName={"libft"}
            members={["jayi", "jaeskim", "seungyel"]}
			date={new Date().toLocaleString()}
          />
        </Grid>
		<Grid item xs={4}>
          <Log
            subjectName={"libft"}
            members={["jayi", "jaeskim", "seungyel"]}
			date={new Date().toLocaleString()}
          />
        </Grid>
		<Grid item xs={4}>
          <Log
            subjectName={"libft"}
            members={["jayi", "jaeskim", "seungyel"]}
			date={new Date().toLocaleString()}
          />
        </Grid>
		<Grid item xs={4}>
          <Log
            subjectName={"libft"}
            members={["jayi", "jaeskim", "seungyel"]}
			date={new Date().toLocaleString()}
          />
        </Grid>
		<Grid item xs={4}>
          <Log
            subjectName={"libft"}
            members={["jayi", "jaeskim", "seungyel"]}
			date={new Date().toLocaleString()}
          />
        </Grid>
		<Grid item xs={4}>
          <Log
            subjectName={"libft"}
            members={["jayi", "jaeskim", "seungyel"]}
			date={new Date().toLocaleString()}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashBoardPage;

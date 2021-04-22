import React from "react";
import Navigation from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Box, makeStyles } from "@material-ui/core";
import IndexPage from "./pages/IndexPage";
import DashBoardPage from "./pages/DashBoardPage";
import SubjectPage from "./pages/SubjectPage";
import TimeTablePage from "./pages/TimeTablePage";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "24px"
  }
}))

function App() {
  const classes = useStyles();

  return (
    <Box className="App" component="div">
      <Router>
        <Navigation />
        <Box className={classes.container}>
          <Switch>
            <Route exact path={"/"} component={IndexPage}></Route>
            <Route exact path={"/dash-board"} component={DashBoardPage}></Route>
            <Route exact path={"/subject"} component={SubjectPage}></Route>
            <Route exact path={"/time-table"} component={TimeTablePage}></Route>
          </Switch>
        </Box>
      </Router>
    </Box>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/MenuOpen';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import { Helmet } from 'react-helmet';


import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles,
  WithStyles,
  Theme,
} from '@material-ui/core/styles';

import { TypographyOptions } from '@material-ui/core/styles/createTypography';

import { styled } from '@material-ui/core/styles';
import { compose, spacing, palette } from '@material-ui/system';

import clsx from 'clsx';

import { mainListItems, secondaryListItems } from './Components/listItems';

import { yellow } from '@material-ui/core/colors';

import Home from './Home';
import ContractsPage from './Pages/ContractsPage';
import ContractTamplatePage from './Pages/ContractTamplatePage';
import ClausePage from './Pages/ClausePage';
import ClauseTemplatePage from './Pages/ClauseTemplatePage'

// import './App.css';

//import ContractTemplateStore from './Stores/ContractTemplateStore';

import Header from './Components/Header'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  } as TypographyOptions,
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
      contrastText: '#fff',
    },
  },
});

function App(props: any) {
  const displayName = App.name;  

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        {/* <Helmet titleTemplate={displayName} defaultTitle={displayName}>
          <meta
            name="description"
            content="A platform to connect bee keepers and land owners"
          />
        </Helmet> */}
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contracts" component={ContractsPage} />
            <Route exact path="/contractTemplates" component={ContractTamplatePage} />
            <Route exact path="/clauses" component={ClausePage} />
            <Route exact path="/clauseTemplates" component={ClauseTemplatePage} />
          </Switch>
        </BrowserRouter>
      </div>
    </MuiThemeProvider>
  );
}

export default App;

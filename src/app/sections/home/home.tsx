import { Typography } from '@material-ui/core';
import * as React from 'react';
import Fetch from 'react-fetch-component';
import './home.scss';

interface IHomeState {
  countryResult: any;
  countrySearch: string;
  loading: boolean;
  error: boolean;
}

export class Home extends React.Component<{}, IHomeState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      countryResult: null,
      countrySearch: '',
      error: false,
      loading: false
    };
  }

  public render(): JSX.Element {
    window.console.log(this.props);
    return (
      <Fetch url="https://pokeapi.co/api/v2/pokemon/ditto/">
        {({ loading, error, data }) => {
          return (
            <React.Fragment>
              <Typography variant="h1" color="primary">
                Booyah
              </Typography>
              <h1 color="primary">Booyah</h1>
            </React.Fragment>
          );
        }}
      </Fetch>
    );
  }
}

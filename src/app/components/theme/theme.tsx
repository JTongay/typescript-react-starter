import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { Main } from 'app/main';
import * as React from 'react';

export class AppTheme extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <MuiThemeProvider theme={this.getTheme()}>
        <Main />
      </MuiThemeProvider>
    );
  }

  private getTheme(): any {
    return createMuiTheme({
      palette: {
        primary: {
          main: blue[800]
        },
        secondary: {
          main: red[900]
        },
        type: 'dark'
      },
      spacing: {
        unit: 16
      },
      typography: {
        useNextVariants: true
      }
    });
  }
}

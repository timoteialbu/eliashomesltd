import React, { Component } from 'react';
import { withStyles } from "material-ui/styles";
import Copyright from 'material-ui-icons/Copyright';
import Typography from "material-ui/Typography";

const styles = {
    footer: {
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
      textAlign: 'center'
    }
  };

class Footer extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <footer className={classes.footer}>
                    <Typography>
                        <Copyright /> Elias Homes LTD 2018
                    </Typography>
                </footer>
            </div>
        );
    }
}

export default withStyles(styles)(Footer);
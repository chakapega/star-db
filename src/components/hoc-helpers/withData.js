import React, { Component } from 'react';

import Spinner from '../spinner/Spinner';
import ErrorIndicator from '../errorIndicator/ErrorIndicator';

const withData = View => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      error: false,
    };

    componentDidMount() {
      const { getData } = this.props;

      this.setState({ loading: true, error: false });

      getData()
        .then(data => this.setState({ data, loading: false }))
        .catch(() => {
          this.setState({ error: true, loading: false });
        });
    }

    render() {
      const { data, loading, error } = this.state;

      if (loading) {
        return <Spinner />;
      }

      if (error) {
        return <ErrorIndicator />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;

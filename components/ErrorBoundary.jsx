import React from 'react';
import PropTypes from 'prop-types';
import * as Sentry from '@sentry/browser';

class ErrorBoundary extends React.Component {
  state = { hasError: false, eventId: null };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    Sentry.withScope((scope) => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });
  }

  render() {
    const { hasError, eventId } = this.state;
    const { children } = this.props;
    if(hasError) {
      return (
        <div>
          <h3>An Error Occurred</h3>
          <button
            type="button"
            onClick={
              () => Sentry.showReportDialog({ eventId })
            }
          >
            Report feedback
          </button>
        </div>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;

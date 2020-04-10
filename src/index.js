import React from 'react';
import { render } from 'react-dom';
import * as Sentry from '@sentry/browser';
import App from './app';

const appRoot = document.getElementById('app');

Sentry.init({
  dsn: 'https://a4c45b3f64a34ef795ee8b5b1bf22941@o375654.ingest.sentry.io/5195480'
});

/* eslint-disable react/jsx-filename-extension */
render(<App />, appRoot);

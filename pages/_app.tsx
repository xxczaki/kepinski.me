import React from 'react';
import {AppProps} from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import debounce from 'lodash.debounce';
import nprogress from 'nprogress';

import Container from '../components/container';

// Only show nprogress after 500ms (slow loading)
const start = debounce(nprogress.start, 500);
Router.events.on('routeChangeStart', start);
Router.events.on('routeChangeComplete', () => {
	start.cancel();
	nprogress.done();
	window.scrollTo(0, 0);
});
Router.events.on('routeChangeError', () => {
	start.cancel();
	nprogress.done();
});

const App = ({Component, pageProps}: Readonly<AppProps>): JSX.Element => {
	return (
		<>
			<Head>
				<title>Antoni Kepinski</title>
			</Head>
			<Container>
				<Component {...pageProps}/>
			</Container>
		</>
	);
};

export default App;

import { ScrollViewStyleReset } from "expo-router/html";
import type { PropsWithChildren } from "react";

// This file is web-only and used to configure the root HTML for every
// web page during static rendering.
// The contents of this function only run in Node.js environments and
// do not have access to the DOM or browser APIs.
export default function Root({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>

				{/* Link the PWA manifest file. */}
				<link rel="manifest" href="/manifest.json" />

				{/* Global metadata */}
				<meta
					name="description"
					content="A secure, privacy-first digital wallet using Taproot Assets."
				/>
				<meta
					name="keywords"
					content="wallet, digital, secure, privacy, Taproot, Assets"
				/>
				<meta property="og:title" content="App Wallet" />
				<meta
					property="og:description"
					content="A secure, privacy-first digital wallet using Taproot Assets."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="/" />
				<meta property="og:image" content="/icon.png" />

				{/*
                  Disable body scrolling on web. This makes ScrollView components work closer to how they do on native.
                  However, body scrolling is often nice to have for mobile web. If you want to enable it, remove this line.
                */}
				<ScrollViewStyleReset />

				{/* Add any additional <head> elements that you want globally available on web... */}
			</head>
			<body>{children}</body>
		</html>
	);
}

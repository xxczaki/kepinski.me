import React from 'react';
import {NextPage} from 'next';

import ExtLink from '../components/extlink';

const Index: NextPage<unknown> = () => {
	return (
		<section className="grid gap-12">
			<h1 className="text-4xl font-bold">Uses</h1>
			<p>Here you can find information about the all the hardware and software I own and use. I update this page regularly so be sure to check it out later. Inspired by <ExtLink href="https://uses.tech/">/uses</ExtLink>.</p>
			<h2 className="text-2xl font-bold">Desk</h2>
			<p>Since November 2020 I&apos;m using a <b>MacBook Pro 13&quot;</b> with the following specs:</p>
			<ul role="list" className="list-disc list-inside">
				<li>Intel Core I5 2,0-3,8 GHz (10th gen)</li>
				<li>16GB RAM (DDR4, 3733 MHz)</li>
				<li>512GB SSD PCIe</li>
				<li>4x Thunderbolt 3 (USB-C)</li>
				<li>Touch Bar (<i>yes, I actually like it</i>)</li>
			</ul>
			<p>Before that I was using a custom PC with Linux Mint for about 3 years.</p>
			<h2 className="text-2xl font-bold">Accessories</h2>
			<p>I&apos;m using a USB hub (<b>Green Cell HUB GC Connect60 8in1</b>) in order to connect stuff like the <b>Logitech MX Master 3</b> mouse to my laptop. My favorite MacBook stand is the <b>Twelve South Curve</b>. Super cheap and reliable <b>Logitech K350</b> is my wireless, ergonomic keyboard.</p>
			<p>I use <b>Bang &amp; Olufsen H9 (3rd gen)</b> headphones for anything sound-related.</p>
			<h2 className="text-2xl font-bold">Other gear</h2>
			<p>I&apos;m using <b>iPhone 12 (64GB)</b> as my phone. <b>YubiKey 5C NFC</b> is my security key. I keep smaller files on <b>SanDisk 64GB Ultra Dual Drive Luxe USB</b> and large backups on my <b>Samsung Portable SSD T7 (500GB)</b>.</p>
			<h2 className="text-2xl font-bold">Software</h2>
			<p>I use <b>Mozilla Firefox Developer Edition</b>, optimized for privacy, to browser the internet. <b>1Password</b> is where I store all my passwords. I listen to classical music on <b>Spotify</b> and write everything from travel plans to useful phrases in <b>Notion</b>. <b>Signal</b> is my preferred online messaging service. I write longer texts and TO-DOs in <b>iA Writer</b>.</p>
			<p>I do most of the programming-related stuff in <b>Visual Studio Code</b>, which I carefully configured. I use <b>iTerm 2</b> with the <b>zsh</b> shell for running commands.</p>
			<p>I&apos;m also a huge fan of macOS-only apps! Here is a list of my favorites:</p>
			<ul role="list" className="list-disc list-inside">
				<li>Alfred 4</li>
				<li>Bartender 4</li>
				<li>Dato</li>
				<li>Gifski</li>
				<li>Little Snitch 5</li>
				<li>Micro Snitch</li>
				<li>Lungo</li>
				<li>Rectangle</li>
				<li>Fig</li>
			</ul>
			<h2 className="text-2xl font-bold">Configuration</h2>
			<p>Settings and preferences for my browser, terminal, code editor and other apps can be found in my personal <ExtLink href="https://github.com/xxczaki/dotfiles">dotfiles repositiory</ExtLink>.</p>
			<h2 className="text-2xl font-bold">Other services</h2>
			<p>Since 2018 I use <b>ProtonMail</b> for keeping my emails private. Their paid plan allows me to connect a custom domain. I also pay a small amount for the previously mentioned <b>1Password</b>, even though since February 2021 I only use their local vault feature. To keep non-confidential data synchronized across my devices I use <b>iCloud</b>. I mostly use <b>Namecheap</b> for registering domains and <b>Vercel</b> for hosting small websites. I also rent a VPS in Iceland via <b>1984 hosting</b> which I highly recommend for privacy-related reasons. This website is running on it!</p>
		</section>
	);
};

export default Index;

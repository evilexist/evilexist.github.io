$(function() {

	CMS.init({

		// Name of your site or location of logo file ,relative to root directory (img/logo.png)
		siteName: 'Cafe with',

		// Tagline for your site
		siteTagline: '你生活中的好咖啡',

		// Email address
		siteEmail: 'evilexist@gmail.com',

		// Name
		siteAuthor: 'Riku',

		// Navigation items
		siteNavItems: [
			{ name: 'Github', href: 'https://github.com/evilexist', newWindow: true},
			{ name: 'About', href: 'http://evilexist.com/'}
		],

		// Posts folder name
		postsFolder: 'posts',

		// Homepage posts snippet length
		postSnippetLength: 120,

		// Pages folder name
		pagesFolder: 'pages',

		// Site fade speed
		fadeSpeed: 300,

		// Site footer text
		footerText: '&copy; ' + new Date().getFullYear() + ' All Rights Reserved.',

		// Mode 'Github' for Github Pages, 'Apache' for Apache server. Defaults
		// to Github
		mode: 'Github',

		// If Github mode is set, your Github username and repo name. Defaults
		// to Github pages branch (master)
		githubUserSettings: {
			username: 'evilexist',
			repo: 'evilexist.github.io'
		}

	});

	// Markdown settings
	marked.setOptions({
		renderer: new marked.Renderer(),
		gfm: true,
		tables: true,
		breaks: false,
		pedantic: false,
		sanitize: true,
		smartLists: true,
		smartypants: false
	});

});

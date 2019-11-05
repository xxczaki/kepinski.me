import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {StaticQuery, graphql, withPrefix} from 'gatsby';

function Seo({description, lang, meta, keywords, title}) {
	return (
		<StaticQuery
			query={detailsQuery}
			render={data => {
				const metaDescription =
          description || data.site.siteMetadata.description;
				return (
					<Helmet
						htmlAttributes={{
							lang
						}}
						title={title}
						titleTemplate={`%s | ${data.site.siteMetadata.title}`}
						meta={[
							{
								property: 'og:title',
								content: title
							},
							{
								name: 'description',
								content: metaDescription
							},
							{
								property: 'image',
								content: 'https://i.imgur.com/wTAVqy5.jpg'
							},
							{
								property: 'og:description',
								content: metaDescription
							},
							{
								property: 'og:type',
								content: 'website'
							},
							{
								property: 'fb:admins',
								content: '100001509073874'
							},
							{
								name: 'twitter:card',
								content: 'summary'
							},
							{
								name: 'twitter:creator',
								content: data.site.siteMetadata.author
							},
							{
								name: 'twitter:title',
								content: title
							},
							{
								name: 'twitter:description',
								content: metaDescription
							},
							{
								name: 'theme-color',
								content: '#212121'
							},
							{
								name: 'msapplication-TileColor',
								content: '#212121'
							}
						]
							.concat(
								keywords.length > 0 ?
									{
										name: 'keywords',
										content: keywords.join(', ')
									} :
									[]
							)
							.concat(meta)}
					>
						<link rel="icon" href={withPrefix('/img/favicon.png')}/>
					</Helmet>
				);
			}}
		/>
	);
}

Seo.defaultProps = {
	lang: 'en',
	description: '',
	meta: [],
	keywords: []
};

Seo.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.array,
	keywords: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string.isRequired
};

export default Seo;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

function SEO({ description, lang, meta, image: metaImage, title, keywords }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
            image
          }
        }
      }
    `
  )

  const { pathname } = useLocation()
  const metaDescription = description || site.siteMetadata.description
  const metaKeywords = keywords || site.siteMetadata.keywords
  const image =
    metaImage && metaImage.src
      ? metaImage.src
      : `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null
  const url = `${site.siteMetadata.siteUrl}${pathname}`
  const verifyContent = "Mv0HqI6WEb1lMe4ASpwg9Qf5YA9Z9qO1DafrQAHVYhI"

  const schemaOrgWebPage = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Zailac Hair",
    image: "https://www.zailachair.com/Logo.jpg",
    "@id": "",
    url: "https://www.zailachair.com",
    telephone: "+381 60 3230 250",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mlatisumina 25",
      addressLocality: "Beograd",
      postalCode: "11000",
      addressCountry: "RS",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.798914,
      longitude: 20.4914937,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "12:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "11:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/pages/category/Hair-Salon/Zailac-Hair-823673054501131/",
      "https://www.instagram.com/zailachair/?hl=en",
    ],
  }

  return (
    <Helmet
      defer={false}
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | Zailac Hair | Coloring & styling`}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `keywords`,
          content: metaKeywords.join(", "),
        },
        {
          property: "og:image:secure_url",
          content: image,
        },
        {
          property: "og:image",
          content: image,
        },
        {
          property: "og:url",
          content: url,
        },
        {
          name: "google-site-verification",
          content: verifyContent,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: image,
        },
        {
          name: `twitter:site`,
          content: url,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  property: "og:image",
                  content: image,
                },
                {
                  property: "og:image:width",
                  content: metaImage.width,
                },
                {
                  property: "og:image:height",
                  content: metaImage.height,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(meta)}
    >
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgWebPage)}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `sr`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
}

export default SEO

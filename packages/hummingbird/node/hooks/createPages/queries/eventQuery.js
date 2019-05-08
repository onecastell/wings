module.exports = `{
  wings {
    events {
      edges {
        node {
          id
          title
          intro
          description
          schedule {
            start
            end
          }
          location {
            name
            street
            city
            zip
            country
          }
          fee {
            amount
            currencyCode
          }
          attendeeCount
          settings {
            mailchimp {
              listId
              fieldMapping {
                field
                source
                value
              }
              interestMapping {
                interest
                source
                value
              }
            }
          }
          slug
          meta {
            key
            value
          }
          data {
            key
            data
          }
          platforms {
            all {
              title
              description
              imageUrl
            }
            facebook {
              title
              description
              imageUrl
            }
            twitter {
              title
              description
              imageUrl
            }
            whatsapp {
              text
            }
          }
          menu {
            id
            name
            items {
              text
              url
              items {
                text
                url
              }
            }
          }
          image {
            id
            name
            caption
            alt
            url
          }
        }
      }
    }
  }
}`;
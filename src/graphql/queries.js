import { gql } from '@apollo/client';

const HEAD_OFFICE_ID = 'clx6b0w8b6bsw07zvjpsm5irr';
const CONTACT_ID = 'clx6apdkx6apn07zvsbfgo8nc';
const OVERVIEW_ID = 'clx6an1b068h3070zxp64qdk5';

export const QUERY_FOOTER = gql`
  query getFooterData {
    socialMedias {
      id
      platform
      url
      createdAt
      updatedAt
      icon {
        url
      }
    }
    office(where: { id: "${HEAD_OFFICE_ID}" }) {
      type
      address
    }
    services {
      id
      name
    }
  }
`;

export const QUERY_HOMEPAGE = gql`
 query getHomepageData {
   socialMedias {
      id
      platform
      url
      createdAt
      updatedAt
      icon {
        url
      }
    }
   overview(where: { id: "${OVERVIEW_ID}" }) {
     totalClient
     totalAward
     finishedProject
     totalArtist
   }
   services {
    id
    name
    icon {
      url
    }
    overview
  }
   contact(where: { id: "${CONTACT_ID}" }) {
      phone
      email
    }
    blogs(last: 3) {
      id
      title
      overview
      image {
        url
      }
    }
  }
`;

export const QUERY_TESTIMONIALS = gql`
  query getTestimonials {
    testimonials {
      id
      name
      avatar {
        url
      }
      country
      review
      rating
    }
  }
`;

export const QUERY_ABOUTPAGE = gql`
  query getAboutPageData {
    teams {
      id
      name
      jobTitle
      description
      avatar {
        url
      }
    }
    cultures {
      id
      title
      description
      image {
        url
      }
    }
    histories {
      id
      name
      description {
        html
        markdown
        raw
        text
      }
    }
  }
`;

export const QUERY_SERVICEPAGE = gql`
  query getServicePageData {
    services {
      id
      name
      image {
        url
      }
      description
    }
    projects {
      id
      title
      overview
      image {
        url
      }
    }
  }
`;

export const QUERY_PROEJCTPAGE = gql`
  query getProjectPageData {
    projects {
      id
      title
      overview
      image {
        url
      }
    }
  }
`;

export const QUERY_FIRSTBLOGPAGE = gql`
  query getBlogPageData {
    blogs(first: 1) {
      id
      title
      image {
        url
      }
      overview
      country
      content {
        html
        markdown
        raw
        text
      }
      updatedAt
      name {
        ... on Team {
          id
          name
          avatar {
            url
          }
        }
      }
      createdAt
    }
  }
`;

export const QUERY_BLOGSPAGE = gql`
  query getBlogs($search: String, $orderBy: BlogOrderByInput) {
    blogs(where: { _search: $search }, orderBy: $orderBy) {
      id
      title
      image {
        url
      }
      overview
      country
      content {
        html
        markdown
        raw
        text
      }
      updatedAt
      name {
        ... on Team {
          id
          name
          avatar {
            url
          }
        }
      }
      publishedAt
      createdAt
    }
  }
`;

export const QUERY_BLOGDETAILPAGE = gql`
  query getBlogDetail($id: ID!) {
    blog(where: { id: $id }) {
      id
      title
      image {
        url
      }
      overview
      country
      content {
        html
        markdown
        raw
        text
      }
      updatedAt
      name {
        ... on Team {
          id
          name
          avatar {
            url
          }
        }
      }
      createdAt
    }
    blogs(where: { id_not: $id }) {
      id
      title
      image {
        url
      }
      country
      content {
        html
        markdown
        raw
        text
      }
      updatedAt
      name {
        ... on Team {
          id
          name
          avatar {
            url
          }
        }
      }
      createdAt
    }
  }
`;

export const QUERY_CONTACTPAGE = gql`
  query getContactPageData {
    contact(where: { id: "${CONTACT_ID}"
     }) {
      email
      phone
    }
    socialMedias {
      id
      platform
      url
    }
    offices {
      id
      phone
      type
      address
    }
  }
`;

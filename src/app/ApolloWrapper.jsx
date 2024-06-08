'use client';

import { URL_SERVER_HYGRAPH, HYGRAPH_TOKEN } from '@/constants/credentials';
import { HttpLink } from '@apollo/client';
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from '@apollo/experimental-nextjs-app-support';

function makeClient() {
  try {
    const httpLink = new HttpLink({
      // this needs to be an absolute url, as relative urls cannot be used in SSR
      uri: URL_SERVER_HYGRAPH,
      headers: {
        Authorization: `Bearer ${HYGRAPH_TOKEN}`,
      },
      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      // you can override the default `fetchOptions` on a per query basis
      // via the `context` property on the options passed as a second argument
      // to an Apollo Client data fetching hook, e.g.:
      // const { data } = useSuspenseQuery(MY_QUERY, { context: { fetchOptions: { cache: "force-cache" }}});
    });

    // use the `ApolloClient` from "@apollo/experimental-nextjs-app-support"
    return new ApolloClient({
      // use the `InMemoryCache` from "@apollo/experimental-nextjs-app-support"
      cache: new InMemoryCache(),
      link: httpLink,
    });
  } catch (error) {
    console.error('Error creating Apollo Client:', error);
    return null;
  }
}

export function ApolloWrapper({ children }) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}

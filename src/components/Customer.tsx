import React from 'react'
import { Main } from 'grommet'
import CustomerDetails from '../context/CustomerDetails';
import { ApolloProvider} from "@apollo/client";
import apollo from '../server/server'

function Customer() {

    return (
      
    <Main pad="small">
        <ApolloProvider client={apollo}>
            <CustomerDetails/>
        </ApolloProvider>
    </Main>

  );
}

export default Customer;
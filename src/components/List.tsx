import React from 'react'
import { Main } from 'grommet'
import CustomerList from '../context/CustomerList';
import { ApolloProvider} from "@apollo/client";
import apollo from '../server/server'

function List() {

    return (
      
    <Main pad="small">
        <ApolloProvider client={apollo}>
            <CustomerList/>
        </ApolloProvider>
    </Main>

  );
}

export default List;
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useGetOrdersQuery } from '../generated/graphql';
import { Heading, Grid, DataTable, List, Text } from 'grommet'

const CustomerDetails: React.FC = () => {
    const { state }: any = useLocation();
    
    const { loading, error, data } = useGetOrdersQuery({variables: {customer_id: state.id}});

    if(loading) {
        return (<div>Loading...</div>);
    }
    if(error || !data) {
        return (<div>Error...</div>);
    }

    return (
        <div>
            <Grid
                rows={['xsmall', 'small', 'xsmall', 'small']}
                columns={['medium', 'small']}
                gap="xxsmall"
                areas={[
                    { name: 'header_details', start: [0, 0], end: [1, 0] },
                    { name: 'details', start: [0, 1], end: [0, 1] },
                    { name: 'header_orders', start: [0, 2], end: [0, 2] },
                    { name: 'orders', start: [0, 3], end: [0, 3] },
                    
                ]}
                >
                <Heading 
                    gridArea="header_details"     
                    size='xsmall'
                    color='#2a79a1'
                >
                Customer details
                </Heading>
                <List
                    border={{
                        color: "light-2",
                        side: "bottom",
                        size: "small"
                    }}
                    gridArea="details"
                    primaryKey="name"
                    secondaryKey="data"
                    data={[
                        { name: 'ID', data: state.id },
                        { name: 'Name', data: state.name },
                        { name: 'Birth date', data: state.birth_date },
                        { name: 'VIP', data: state.vip },
                    ]}
                />
                <Heading
                    margin={{top: "medium"}}
                    gridArea="header_orders"     
                    size='xsmall'
                    color='#2a79a1'
                >
                List of orders
                </Heading>
                <DataTable
                    gridArea="orders"
                    margin={{top: "xsmall"}}
                    border={{
                        color: "light-2",
                        side: "bottom",
                        size: "small"
                    }}
                
                    columns={[
                    {
                        property: 'id',
                        header: <Text>ID</Text>,
                        primary: true,
                    },
                    {
                        property: 'date',
                        header: <Text>Date</Text>,
                    },
                    {
                        property: 'sum',
                        header: 'Sum',
                    },
                    {
                        property: 'product_count',
                        align: "center",
                        header: 'Product count',
                    },
                    
                    ]}
                    data={data.orders}
            />
            </Grid>
        </div>
    )
}

export default CustomerDetails;
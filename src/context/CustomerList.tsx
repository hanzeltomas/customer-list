import React from 'react';
import { Heading, DataTable, Text } from 'grommet'
import { useNavigate } from 'react-router-dom'
import { useGetCustomersQuery, Customer_Order_Sum, Customers } from '../generated/graphql'

function mergeCustomersOrders(customers: Customers[], order_sums: Customer_Order_Sum[]){
    return customers.map(customer => ({ ...customer, ...order_sums.find(order => order.customer === customer.id) }));
}

const CustomerList: React.FC = () => {
    
    const { loading, error, data } = useGetCustomersQuery();
    const navigate = useNavigate();

    if(loading) {
        return (<div>Loading...</div>);
    }
    if(error || !data) {
        return (<div>Error...</div>);
    }
    
    const customers = mergeCustomersOrders(data.customers, data.customer_order_sum);

    return (
        <div>
            <Heading
                size='small'
                color='#2a79a1'
                >
                Customers list
            </Heading>
            <DataTable
                onClickRow={({ datum }) => {navigate('/details', {state: datum})}}
                border={{
                    color: "light-2",
                    side: "bottom",
                    size: "small"
                  }}
                pad='medium'
                columns={[
                {
                    property: 'id',
                    header: <Text>ID</Text>,
                    primary: true,
                },
                {
                    property: 'name',
                    header: <Text>Name</Text>,
                },
                {
                    property: 'birth_date',
                    header: 'Birth date',
                },
                {
                    property: 'vip',
                    header: 'VIP',
                },
                {
                    property: 'sum',
                    header: 'Orders total sum',
                },
                ]}
                data={customers}
            />
        </div>
    )
}

export default CustomerList;
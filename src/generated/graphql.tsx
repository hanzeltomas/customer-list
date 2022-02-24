import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
};

/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Float']>;
  _gt?: InputMaybe<Scalars['Float']>;
  _gte?: InputMaybe<Scalars['Float']>;
  _in?: InputMaybe<Array<Scalars['Float']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Float']>;
  _lte?: InputMaybe<Scalars['Float']>;
  _neq?: InputMaybe<Scalars['Float']>;
  _nin?: InputMaybe<Array<Scalars['Float']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "customer_order_sum" */
export type Customer_Order_Sum = {
  __typename?: 'customer_order_sum';
  customer: Scalars['Int'];
  sum: Scalars['Float'];
};

/** aggregated selection of "customer_order_sum" */
export type Customer_Order_Sum_Aggregate = {
  __typename?: 'customer_order_sum_aggregate';
  aggregate?: Maybe<Customer_Order_Sum_Aggregate_Fields>;
  nodes: Array<Customer_Order_Sum>;
};

/** aggregate fields of "customer_order_sum" */
export type Customer_Order_Sum_Aggregate_Fields = {
  __typename?: 'customer_order_sum_aggregate_fields';
  avg?: Maybe<Customer_Order_Sum_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Customer_Order_Sum_Max_Fields>;
  min?: Maybe<Customer_Order_Sum_Min_Fields>;
  stddev?: Maybe<Customer_Order_Sum_Stddev_Fields>;
  stddev_pop?: Maybe<Customer_Order_Sum_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Customer_Order_Sum_Stddev_Samp_Fields>;
  sum?: Maybe<Customer_Order_Sum_Sum_Fields>;
  var_pop?: Maybe<Customer_Order_Sum_Var_Pop_Fields>;
  var_samp?: Maybe<Customer_Order_Sum_Var_Samp_Fields>;
  variance?: Maybe<Customer_Order_Sum_Variance_Fields>;
};


/** aggregate fields of "customer_order_sum" */
export type Customer_Order_Sum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customer_Order_Sum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Customer_Order_Sum_Avg_Fields = {
  __typename?: 'customer_order_sum_avg_fields';
  customer?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "customer_order_sum". All fields are combined with a logical 'AND'. */
export type Customer_Order_Sum_Bool_Exp = {
  _and?: InputMaybe<Array<Customer_Order_Sum_Bool_Exp>>;
  _not?: InputMaybe<Customer_Order_Sum_Bool_Exp>;
  _or?: InputMaybe<Array<Customer_Order_Sum_Bool_Exp>>;
  customer?: InputMaybe<Int_Comparison_Exp>;
  sum?: InputMaybe<Float_Comparison_Exp>;
};

/** aggregate max on columns */
export type Customer_Order_Sum_Max_Fields = {
  __typename?: 'customer_order_sum_max_fields';
  customer?: Maybe<Scalars['Int']>;
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate min on columns */
export type Customer_Order_Sum_Min_Fields = {
  __typename?: 'customer_order_sum_min_fields';
  customer?: Maybe<Scalars['Int']>;
  sum?: Maybe<Scalars['Float']>;
};

/** Ordering options when selecting data from "customer_order_sum". */
export type Customer_Order_Sum_Order_By = {
  customer?: InputMaybe<Order_By>;
  sum?: InputMaybe<Order_By>;
};

/** select columns of table "customer_order_sum" */
export enum Customer_Order_Sum_Select_Column {
  /** column name */
  Customer = 'customer',
  /** column name */
  Sum = 'sum'
}

/** aggregate stddev on columns */
export type Customer_Order_Sum_Stddev_Fields = {
  __typename?: 'customer_order_sum_stddev_fields';
  customer?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Customer_Order_Sum_Stddev_Pop_Fields = {
  __typename?: 'customer_order_sum_stddev_pop_fields';
  customer?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Customer_Order_Sum_Stddev_Samp_Fields = {
  __typename?: 'customer_order_sum_stddev_samp_fields';
  customer?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Customer_Order_Sum_Sum_Fields = {
  __typename?: 'customer_order_sum_sum_fields';
  customer?: Maybe<Scalars['Int']>;
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate var_pop on columns */
export type Customer_Order_Sum_Var_Pop_Fields = {
  __typename?: 'customer_order_sum_var_pop_fields';
  customer?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Customer_Order_Sum_Var_Samp_Fields = {
  __typename?: 'customer_order_sum_var_samp_fields';
  customer?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Customer_Order_Sum_Variance_Fields = {
  __typename?: 'customer_order_sum_variance_fields';
  customer?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "customers" */
export type Customers = {
  __typename?: 'customers';
  birth_date: Scalars['date'];
  id: Scalars['Int'];
  name: Scalars['String'];
  vip: Scalars['String'];
};

/** aggregated selection of "customers" */
export type Customers_Aggregate = {
  __typename?: 'customers_aggregate';
  aggregate?: Maybe<Customers_Aggregate_Fields>;
  nodes: Array<Customers>;
};

/** aggregate fields of "customers" */
export type Customers_Aggregate_Fields = {
  __typename?: 'customers_aggregate_fields';
  avg?: Maybe<Customers_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Customers_Max_Fields>;
  min?: Maybe<Customers_Min_Fields>;
  stddev?: Maybe<Customers_Stddev_Fields>;
  stddev_pop?: Maybe<Customers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Customers_Stddev_Samp_Fields>;
  sum?: Maybe<Customers_Sum_Fields>;
  var_pop?: Maybe<Customers_Var_Pop_Fields>;
  var_samp?: Maybe<Customers_Var_Samp_Fields>;
  variance?: Maybe<Customers_Variance_Fields>;
};


/** aggregate fields of "customers" */
export type Customers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Customers_Avg_Fields = {
  __typename?: 'customers_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "customers". All fields are combined with a logical 'AND'. */
export type Customers_Bool_Exp = {
  _and?: InputMaybe<Array<Customers_Bool_Exp>>;
  _not?: InputMaybe<Customers_Bool_Exp>;
  _or?: InputMaybe<Array<Customers_Bool_Exp>>;
  birth_date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  vip?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "customers" */
export enum Customers_Constraint {
  /** unique or primary key constraint */
  CustomersPkey = 'customers_pkey'
}

/** input type for incrementing numeric columns in table "customers" */
export type Customers_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "customers" */
export type Customers_Insert_Input = {
  birth_date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  vip?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Customers_Max_Fields = {
  __typename?: 'customers_max_fields';
  birth_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  vip?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Customers_Min_Fields = {
  __typename?: 'customers_min_fields';
  birth_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  vip?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "customers" */
export type Customers_Mutation_Response = {
  __typename?: 'customers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Customers>;
};

/** on_conflict condition type for table "customers" */
export type Customers_On_Conflict = {
  constraint: Customers_Constraint;
  update_columns?: Array<Customers_Update_Column>;
  where?: InputMaybe<Customers_Bool_Exp>;
};

/** Ordering options when selecting data from "customers". */
export type Customers_Order_By = {
  birth_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  vip?: InputMaybe<Order_By>;
};

/** primary key columns input for table: customers */
export type Customers_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "customers" */
export enum Customers_Select_Column {
  /** column name */
  BirthDate = 'birth_date',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Vip = 'vip'
}

/** input type for updating data in table "customers" */
export type Customers_Set_Input = {
  birth_date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  vip?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Customers_Stddev_Fields = {
  __typename?: 'customers_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Customers_Stddev_Pop_Fields = {
  __typename?: 'customers_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Customers_Stddev_Samp_Fields = {
  __typename?: 'customers_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Customers_Sum_Fields = {
  __typename?: 'customers_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "customers" */
export enum Customers_Update_Column {
  /** column name */
  BirthDate = 'birth_date',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Vip = 'vip'
}

/** aggregate var_pop on columns */
export type Customers_Var_Pop_Fields = {
  __typename?: 'customers_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Customers_Var_Samp_Fields = {
  __typename?: 'customers_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Customers_Variance_Fields = {
  __typename?: 'customers_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "customers" */
  delete_customers?: Maybe<Customers_Mutation_Response>;
  /** delete single row from the table: "customers" */
  delete_customers_by_pk?: Maybe<Customers>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** insert data into the table: "customers" */
  insert_customers?: Maybe<Customers_Mutation_Response>;
  /** insert a single row into the table: "customers" */
  insert_customers_one?: Maybe<Customers>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** update data of the table: "customers" */
  update_customers?: Maybe<Customers_Mutation_Response>;
  /** update single row of the table: "customers" */
  update_customers_by_pk?: Maybe<Customers>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
};


/** mutation root */
export type Mutation_RootDelete_CustomersArgs = {
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Customers_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_CustomersArgs = {
  objects: Array<Customers_Insert_Input>;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customers_OneArgs = {
  object: Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CustomersArgs = {
  _inc?: InputMaybe<Customers_Inc_Input>;
  _set?: InputMaybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Customers_By_PkArgs = {
  _inc?: InputMaybe<Customers_Inc_Input>;
  _set?: InputMaybe<Customers_Set_Input>;
  pk_columns: Customers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  customer: Scalars['Int'];
  date: Scalars['date'];
  id: Scalars['Int'];
  product_count: Scalars['Int'];
  sum: Scalars['Float'];
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  avg?: Maybe<Orders_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
  stddev?: Maybe<Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Sum_Fields>;
  var_pop?: Maybe<Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Var_Samp_Fields>;
  variance?: Maybe<Orders_Variance_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: 'orders_avg_fields';
  customer?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  product_count?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Bool_Exp>>;
  _not?: InputMaybe<Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Bool_Exp>>;
  customer?: InputMaybe<Int_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  product_count?: InputMaybe<Int_Comparison_Exp>;
  sum?: InputMaybe<Float_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint */
  OrdersPkey = 'orders_pkey'
}

/** input type for incrementing numeric columns in table "orders" */
export type Orders_Inc_Input = {
  customer?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  product_count?: InputMaybe<Scalars['Int']>;
  sum?: InputMaybe<Scalars['Float']>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  customer?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['Int']>;
  product_count?: InputMaybe<Scalars['Int']>;
  sum?: InputMaybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  customer?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  product_count?: Maybe<Scalars['Int']>;
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  customer?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  product_count?: Maybe<Scalars['Int']>;
  sum?: Maybe<Scalars['Float']>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** on_conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  customer?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product_count?: InputMaybe<Order_By>;
  sum?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  Customer = 'customer',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  ProductCount = 'product_count',
  /** column name */
  Sum = 'sum'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  customer?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['Int']>;
  product_count?: InputMaybe<Scalars['Int']>;
  sum?: InputMaybe<Scalars['Float']>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: 'orders_stddev_fields';
  customer?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  product_count?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: 'orders_stddev_pop_fields';
  customer?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  product_count?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: 'orders_stddev_samp_fields';
  customer?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  product_count?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: 'orders_sum_fields';
  customer?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  product_count?: Maybe<Scalars['Int']>;
  sum?: Maybe<Scalars['Float']>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  Customer = 'customer',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  ProductCount = 'product_count',
  /** column name */
  Sum = 'sum'
}

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: 'orders_var_pop_fields';
  customer?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  product_count?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: 'orders_var_samp_fields';
  customer?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  product_count?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: 'orders_variance_fields';
  customer?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  product_count?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "customer_order_sum" */
  customer_order_sum: Array<Customer_Order_Sum>;
  /** fetch aggregated fields from the table: "customer_order_sum" */
  customer_order_sum_aggregate: Customer_Order_Sum_Aggregate;
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
};


export type Query_RootCustomer_Order_SumArgs = {
  distinct_on?: InputMaybe<Array<Customer_Order_Sum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_Sum_Order_By>>;
  where?: InputMaybe<Customer_Order_Sum_Bool_Exp>;
};


export type Query_RootCustomer_Order_Sum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Order_Sum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_Sum_Order_By>>;
  where?: InputMaybe<Customer_Order_Sum_Bool_Exp>;
};


export type Query_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootCustomers_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "customer_order_sum" */
  customer_order_sum: Array<Customer_Order_Sum>;
  /** fetch aggregated fields from the table: "customer_order_sum" */
  customer_order_sum_aggregate: Customer_Order_Sum_Aggregate;
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
};


export type Subscription_RootCustomer_Order_SumArgs = {
  distinct_on?: InputMaybe<Array<Customer_Order_Sum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_Sum_Order_By>>;
  where?: InputMaybe<Customer_Order_Sum_Bool_Exp>;
};


export type Subscription_RootCustomer_Order_Sum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Order_Sum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_Sum_Order_By>>;
  where?: InputMaybe<Customer_Order_Sum_Bool_Exp>;
};


export type Subscription_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomers_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['Int'];
};

export type GetOrdersQueryVariables = Exact<{
  customer_id: Scalars['Int'];
}>;


export type GetOrdersQuery = { __typename?: 'query_root', orders: Array<{ __typename?: 'orders', id: number, date: any, product_count: number, sum: number }> };

export type GetCustomersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomersQuery = { __typename?: 'query_root', customers: Array<{ __typename?: 'customers', id: number, name: string, birth_date: any, vip: string }>, customer_order_sum: Array<{ __typename?: 'customer_order_sum', customer: number, sum: number }> };


export const GetOrdersDocument = gql`
    query getOrders($customer_id: Int!) {
  orders(where: {customer: {_eq: $customer_id}}) {
    id
    date
    product_count
    sum
  }
}
    `;

/**
 * __useGetOrdersQuery__
 *
 * To run a query within a React component, call `useGetOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdersQuery({
 *   variables: {
 *      customer_id: // value for 'customer_id'
 *   },
 * });
 */
export function useGetOrdersQuery(baseOptions: Apollo.QueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
      }
export function useGetOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
        }
export type GetOrdersQueryHookResult = ReturnType<typeof useGetOrdersQuery>;
export type GetOrdersLazyQueryHookResult = ReturnType<typeof useGetOrdersLazyQuery>;
export type GetOrdersQueryResult = Apollo.QueryResult<GetOrdersQuery, GetOrdersQueryVariables>;
export const GetCustomersDocument = gql`
    query getCustomers {
  customers {
    id
    name
    birth_date
    vip
  }
  customer_order_sum {
    customer
    sum
  }
}
    `;

/**
 * __useGetCustomersQuery__
 *
 * To run a query within a React component, call `useGetCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCustomersQuery(baseOptions?: Apollo.QueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, options);
      }
export function useGetCustomersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, options);
        }
export type GetCustomersQueryHookResult = ReturnType<typeof useGetCustomersQuery>;
export type GetCustomersLazyQueryHookResult = ReturnType<typeof useGetCustomersLazyQuery>;
export type GetCustomersQueryResult = Apollo.QueryResult<GetCustomersQuery, GetCustomersQueryVariables>;
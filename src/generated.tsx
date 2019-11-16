import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Continent = {
   __typename?: 'Continent',
  code?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  countries?: Maybe<Array<Maybe<Country>>>,
};

export type Country = {
   __typename?: 'Country',
  code?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  native?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  continent?: Maybe<Continent>,
  currency?: Maybe<Scalars['String']>,
  languages?: Maybe<Array<Maybe<Language>>>,
  emoji?: Maybe<Scalars['String']>,
  emojiU?: Maybe<Scalars['String']>,
};

export type Language = {
   __typename?: 'Language',
  code?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  native?: Maybe<Scalars['String']>,
  rtl?: Maybe<Scalars['Int']>,
};

export type Query = {
   __typename?: 'Query',
  continents?: Maybe<Array<Maybe<Continent>>>,
  continent?: Maybe<Continent>,
  countries?: Maybe<Array<Maybe<Country>>>,
  country?: Maybe<Country>,
  languages?: Maybe<Array<Maybe<Language>>>,
  language?: Maybe<Language>,
};


export type QueryContinentArgs = {
  code?: Maybe<Scalars['String']>
};


export type QueryCountryArgs = {
  code?: Maybe<Scalars['String']>
};


export type QueryLanguageArgs = {
  code?: Maybe<Scalars['String']>
};


export type LangQueryVariables = {};


export type LangQuery = (
  { __typename?: 'Query' }
  & { language: Maybe<(
    { __typename?: 'Language' }
    & Pick<Language, 'code' | 'name'>
  )> }
);


export const LangDocument = gql`
    query Lang {
  language {
    code
    name
  }
}
    `;
export type LangComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<LangQuery, LangQueryVariables>, 'query'>;

    export const LangComponent = (props: LangComponentProps) => (
      <ApolloReactComponents.Query<LangQuery, LangQueryVariables> query={LangDocument} {...props} />
    );
    
export type LangProps<TChildProps = {}> = ApolloReactHoc.DataProps<LangQuery, LangQueryVariables> & TChildProps;
export function withLang<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LangQuery,
  LangQueryVariables,
  LangProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, LangQuery, LangQueryVariables, LangProps<TChildProps>>(LangDocument, {
      alias: 'lang',
      ...operationOptions
    });
};

/**
 * __useLangQuery__
 *
 * To run a query within a React component, call `useLangQuery` and pass it any options that fit your needs.
 * When your component renders, `useLangQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLangQuery({
 *   variables: {
 *   },
 * });
 */
export function useLangQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LangQuery, LangQueryVariables>) {
        return ApolloReactHooks.useQuery<LangQuery, LangQueryVariables>(LangDocument, baseOptions);
      }
export function useLangLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LangQuery, LangQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LangQuery, LangQueryVariables>(LangDocument, baseOptions);
        }
export type LangQueryHookResult = ReturnType<typeof useLangQuery>;
export type LangLazyQueryHookResult = ReturnType<typeof useLangLazyQuery>;
export type LangQueryResult = ApolloReactCommon.QueryResult<LangQuery, LangQueryVariables>;
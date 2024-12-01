import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DataTime: { input: any; output: any; }
};

export type Course = {
  __typename?: 'Course';
  badge: Scalars['Boolean']['output'];
  created: Scalars['DataTime']['output'];
  createdBy: Scalars['String']['output'];
  description: Scalars['String']['output'];
  duration: Scalars['Float']['output'];
  hash: Scalars['String']['output'];
  info: Info;
  poster: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  rating: Scalars['Float']['output'];
  technologies: Scalars['String']['output'];
  views: Scalars['Int']['output'];
  votes: Scalars['Int']['output'];
};

export type CourseDetailReturn = {
  __typename?: 'CourseDetailReturn';
  data: Course;
};

export type CourseInput = {
  badge?: InputMaybe<Scalars['Boolean']['input']>;
  description: Scalars['String']['input'];
  duration: Scalars['Float']['input'];
  info: InfoInput;
  poster?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  technologies: Scalars['String']['input'];
};

export type CourseReturn = {
  __typename?: 'CourseReturn';
  data: Array<Course>;
  meta: Meta;
};

export type Credentials = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Info = {
  __typename?: 'Info';
  benefits: Array<Scalars['String']['output']>;
  descriptionSummary: Scalars['String']['output'];
  descriptions: Array<Scalars['String']['output']>;
  requirements: Array<Scalars['String']['output']>;
};

export type InfoInput = {
  benefits: Array<Scalars['String']['input']>;
  descriptionSummary: Scalars['String']['input'];
  descriptions: Array<Scalars['String']['input']>;
  requirements: Array<Scalars['String']['input']>;
};

export type Meta = {
  __typename?: 'Meta';
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addScore: CourseDetailReturn;
  addView: CourseDetailReturn;
  createCourse: Course;
  register: Token;
};


export type MutationAddScoreArgs = {
  courseHash: Scalars['String']['input'];
  score: Score;
};


export type MutationAddViewArgs = {
  courseHash: Scalars['String']['input'];
};


export type MutationCreateCourseArgs = {
  course: CourseInput;
};


export type MutationRegisterArgs = {
  user: User;
};

export type Profile = {
  __typename?: 'Profile';
  avatar: Scalars['String']['output'];
  email: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  auth: Scalars['Boolean']['output'];
  getAllCourses: CourseReturn;
  getAllTeacherCourses: CourseReturn;
  getCourseDetails: CourseDetailReturn;
  login: Token;
  logout: Scalars['Boolean']['output'];
  profile: Profile;
};


export type QueryGetAllCoursesArgs = {
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
};


export type QueryGetAllTeacherCoursesArgs = {
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
};


export type QueryGetCourseDetailsArgs = {
  courseHash: Scalars['String']['input'];
};


export type QueryLoginArgs = {
  credentials: Credentials;
};

export type Score = {
  score: Scalars['Float']['input'];
};

export type Token = {
  __typename?: 'Token';
  data: Scalars['String']['output'];
};

export type User = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type RegisterMutationVariables = Exact<{
  user: User;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'Token', data: string } };


export const RegisterDocument = gql`
    mutation REGISTER($user: User!) {
  register(user: $user) {
    data
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
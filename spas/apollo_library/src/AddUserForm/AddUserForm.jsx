import React from 'react'
import { useMutation, useQuery } from '@apollo/client'

import { ADD_USER, GET_USERS } from './query.gql'
import UserValues from '../fragments/UserValueFragment.gql'
/**
 *
 * @param {String} mutationKey - This is the mutation return values key eg "addUser"
 * @param {String} queryKey - The query you are updating key eg "users"
 * @param {Fragment} fragment - A fragment used to update the
 */
const updateCache = (mutationKey, queryKey, fragment) => (cache, { data }) => {
  const updateData = data[mutationKey]
  cache.modify({
    fields: {
      [queryKey](existingData) {
        return [
          ...existingData,
          cache.writeFragment({
            data: updateData,
            fragment: UserValues
          })
        ]
      }
    }
  })
}

export const AddUserForm = props => {
  const { loading, data } = useQuery(GET_USERS)
  const [addUser] = useMutation(ADD_USER, {
    update: updateCache('addUser', 'users', UserValues)
  })

  if (loading) {
    return 'loading'
  }

  return (
    <>
      <button
        className='bg-primary-75 rounded-lg px-4 py-2 text-white'
        onClick={() =>
          addUser({ variables: { user: { id: '003', name: 'Paul' } } })
        }
      >
        Add
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

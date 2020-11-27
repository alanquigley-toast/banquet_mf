import React from 'react'
import { Button } from '@toasttab/buffet-pui-buttons'
import Parcel from 'single-spa-react/parcel'
import { mountRootParcel } from 'single-spa'
import MyApolloProvider from 'apollo_library_spa/MyApolloProvider'
import Books from 'apollo_library_spa/Books'
// import { GridLayout } from '@toasttab/buffet-pui-layouts'

// console.log(GridLayout)

export function App() {
  return (
    <MyApolloProvider>
      <div className='m-4 p-8 space-y-4 border border-dashed'>
        <p>apollo_library_spa/MyApolloProvider</p>
        <div className='p-4 bg-gray-25 space-y-4'>
          <h1 className='text-heading-1'>Parent SPA</h1>
          <Button>Parent Button</Button>
          <p>
            The button above is defined in the parent spa, and automatically
            shares vendor code with the child spa below via a vendor pui-button
          </p>
        </div>
        <div className='p-4 space-y-4 bg-gray-25'>
          <h2 className='text-heading-2'>Loading external SPAs</h2>
          <p>
            This section contains two single-spa Parcels. Module federation
            allows developers to expose and consume components from multiple
            different SPAs, this flexibility is great, but could lead to a very
            tightly coupled architecture - requiring the release of multiple
            SPAs for a single update. Using single-spa, we could create a
            limited interface between SPAs, that would decouple the SPAs and
            allow for the seamless mixing of different frameworks. Making
            upgrading easier in the future.
          </p>
          <Parcel
            description='child_spa/Banquet loaded into a Parcel'
            wrapClassName='p-4 bg-gray-50 rounded'
            mountParcel={mountRootParcel}
            config={() => import('child_spa/Banquet')}
          />
          <p>
            We easily mix multiple frameworks together with
            single-spa-react/parcel
          </p>
          <Parcel
            description='child_non_react_spa/Banquet loaded into a Parcel'
            wrapClassName='p-4 bg-gray-50 rounded'
            mountParcel={mountRootParcel}
            config={() => import('child_non_react_spa/Banquet')}
          />
        </div>
        <div className='bg-gray-25 p-4 space-y-4'>
          <h2 className='text-heading-2'>Sharing Connected components</h2>
          <p className='font-bold'>apollo_library_spa</p>
          <p>
            Book is an example of a connected component - connected components
            good candidates for module federation sharing, as the scope of their
            sharing is limited to the a particular graphql schema.
          </p>
          <p className='font-bold'>apollo_library_spa/Books</p>
          <Books />
        </div>
        {/* <GridLayout slotA={{ name: 'child_spa/Banquet' }} /> */}
      </div>
    </MyApolloProvider>
  )
}

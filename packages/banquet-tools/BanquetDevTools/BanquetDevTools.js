import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import { IconButton } from '@toasttab/buffet-pui-buttons'
import create from 'zustand'
import { TextInput } from '@toasttab/buffet-pui-text-input'

const useStore = create(set => ({
  currentKey: null,
  currentOverrides: {},
  importMap: {},
  setCurrentOverrides: currentOverrides =>
    set(state => ({ ...state, currentOverrides })),
  setImportMap: importMap => set(state => ({ ...state, importMap })),
  setCurrentKey: key => set(state => ({ ...state, currentKey: key })),
  clearCurrentKey: key => set(state => ({ ...state, currentKey: null }))
}))

export const BanquetDevTools = () => {
  const {
    importMap,
    currentKey,
    setCurrentKey,
    setImportMap,
    currentOverrides,
    setCurrentOverrides,
    clearCurrentKey
  } = useStore()
  const [open, openSet] = useState(localStorage.getItem('BanquetDevTools'))

  useEffect(() => {
    localStorage.setItem('BanquetDevTools', open)
  }, [open])

  useEffect(() => {
    window.importMapOverrides.getCurrentPageMap().then(importMap => {
      setImportMap(importMap.imports)
    })
    setCurrentOverrides(window.importMapOverrides.getOverrideMap().imports)
  }, [setImportMap, setCurrentOverrides])

  return open ? (
    <div className='fixed z-50 shadow border bottom-0 w-full pt-8 pb-8 bg-white text-small'>
      <IconButton
        className='absolute right-0 top-0'
        iconName='close'
        onClick={() => openSet(!open)}
      ></IconButton>
      <div className='pl-16 pr-16'>
        <h1 className='text-heading-4 mb-4 font-bold text-brand-100'>
          Banquet Devtools
        </h1>
        <table className='w-full'>
          <thead className='text-left'>
            <tr>
              <th>type</th>
              <th>Name</th>
              <th>Bundle</th>
              <th>Add</th>
              <th>Reset</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(importMap).map(([key, value]) => {
              return (
                <tr
                  key={key}
                  className={cx({
                    'bg-teal-75': Object.keys(currentOverrides).includes(key)
                  })}
                >
                  <td className='px-2'>
                    {Object.keys(currentOverrides).includes(key)
                      ? 'local'
                      : 'remote'}
                  </td>
                  <td className='px-2'>{key}</td>
                  {currentKey !== key ? (
                    <td className='px-2'>{value}</td>
                  ) : (
                    <td className='flex'>
                      <TextInput
                        onKeyDown={e => {
                          if (e.key === 'Enter') {
                            window.importMapOverrides.addOverride(
                              key,
                              e.currentTarget.value
                            )
                            window.location.reload()
                          }
                        }}
                        onBlur={() => clearCurrentKey()}
                        containerClassName='flex-grow bg-white rounded-md'
                      />
                      <IconButton
                        iconName='cancel'
                        onClick={() => clearCurrentKey()}
                      ></IconButton>
                    </td>
                  )}
                  <td>
                    <IconButton
                      contained={true}
                      iconName={'edit'}
                      onClick={() => setCurrentKey(key)}
                    />
                  </td>
                  <td>
                    <IconButton
                      contained={true}
                      iconName={'delete'}
                      onClick={() => {
                        window.importMapOverrides.removeOverride(key)
                        window.location.reload()
                      }}
                    />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <IconButton
      className='fixed bottom-0 right-0'
      iconName='maintenance'
      onClick={() => openSet(!open)}
    ></IconButton>
  )
}

BanquetDevTools.propTypes = {}

// @ts-check
import produce from 'immer';
/**
 * @typedef Action
 * @property {string} type
 * @property {object} payload
 */

/** 
 * @template A
 * @callback Reducer
 * @param {A} state
 * @param {Action} action
 * @returns {void}
 * 
 */

/**
 * @template B
 * @callback ReducerMap
 * @param {{ [key: string]: Reducer<B> }} reducerMap
 * @returns {Reducer<B>}
 */

/**
 * @template T
 * @param {T} initialState
 * @returns {ReducerMap<T>}
 * */
export const createReducer = (initialState) => (reducerMap) => produce((state = initialState, action) => {
  const reducer = reducerMap[action.type]
  return reducer ? reducer(state, action) : state
});

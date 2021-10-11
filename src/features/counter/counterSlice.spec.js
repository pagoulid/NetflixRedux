import {SaveSlice} from './counterSlice';
import {store} from './../app/store';
const {clicked} = SaveSlice.actions;
describe('counter reducer', () => {
  const initialState = {
    name:'',
    pswd: '',
  };
  
  it('should handle initial state', () => {
    expect(store.reducer(undefined, { type: 'unknown' })).toEqual({
      name:'',
      pswd: '',
    });
  });

  

  it('should handle save state', () => {
    const actual = store.reducer(initialState, clicked());
    expect(actual.name).toEqual('save');
    expect(actual.pswd).toEqual('save');
    
  });

  
});

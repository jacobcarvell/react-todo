var expect = require('expect');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('Should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Test'
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('Should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
         id: '1',
         text: 'test',
         completed: false,
         createdAt: 0
      }
    };
    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  it('Should create todo and dispatch ADD_TODO', (done) => {
     const store = createMockStore({});
     const todoText = 'test';

     store.dispatch(actions.startAddTodo(todoText)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toInclude({
           type: 'ADD_TODO'
        });
        expect(actions[0].todo).toInclude({
           text: 'test'
        });
        done();
     }).catch(done);
  });

  it('Should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('Should generate a toggle todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 1
    };
    var res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });

  it('Should generate a add todos action', () => {
     var todos = [{
        id: '1',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 10000
     }];
     var action = {
         type: 'ADD_TODOS',
         todos
     } ;

     var res = actions.addTodos(todos);
     expect(res).toEqual(action);
  });
});

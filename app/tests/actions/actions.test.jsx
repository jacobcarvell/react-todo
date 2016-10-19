var expect = require('expect');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import firebase, {firebaseRef} from 'app/firebase';
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

  it('Should generate an update todo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: '1',
      updates: {completed: false}
    };
    var res = actions.updateTodo(action.id, action.updates);

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

   describe('tests with firebase todos', () => {
      var testTodoRef;
      beforeEach((done) => {
         var todosRef = firebaseRef.child('todos');

         todosRef.remove().then(() => {
            testTodoRef = firebaseRef.child('todos').push();

            return testTodoRef.set({
               text: 'test',
               completed: false,
               createdAt: 0
            });
         })
         .then(() => done())
         .catch(done);
      });

      afterEach((done) => {
         testTodoRef.remove().then(() => done());
      });

      it('should start add todos ad dispatch ADD_TODOS actions', (done) => {
         const store = createMockStore({});
         const action = actions.startAddTodos();

         store.dispatch(action).then(() => {
            const mockActions = store.getActions();
            expect(mockActions[0].type).toEqual('ADD_TODOS');
            expect(mockActions[0].todos.length).toEqual(1);
            expect(mockActions[0].todos[0].text).toEqual('test');
            done();
         }, done);
      });

      it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
         const store = createMockStore({});
         const action = actions.startToggleTodo(testTodoRef.key, true);

         store.dispatch(action).then(() => {
            const mockActions = store.getActions();
            expect(mockActions[0]).toInclude({
               type: 'UPDATE_TODO',
               id: testTodoRef.key
            });
            expect(mockActions[0].updates).toInclude({
               completed: true
            });
            expect(mockActions[0].updates.completedAt).toExist();
            done();
         }, done);
      });
   });
});

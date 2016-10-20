var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('Should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'test'
      };

      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('Should toggle show completed', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);

      var res = reducers.showCompletedReducer(df(true), df(action));
      expect(res).toEqual(false);
    });
  });

  describe('todosReducer', () => {
    it('Should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
           id: '1',
           text: 'test',
           completed: false,
           createdAt: 1
        }
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('Should update todo completed status', () => {
      var todos = [{
        id: 1,
        text: 'Test',
        completed: false,
        createdAt: 0,
        completedAt: undefined
      }];
      var updates = {
         completed: false,
         completedAt: null
      }
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });

    it('Should add existing todos', () => {
      var todos = [{
        id: 1,
        text: 'Test',
        completed: false,
        createdAt: 0,
        completedAt: undefined
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });

   describe('authReducer', () => {
      it('should add a new user id', () => {
         const action = {
            type: 'LOGIN',
            uid: '123'
         };

         var res = reducers.authReducer(undefined, df(action));
         expect(res).toEqual({
            uid: action.uid
         });
      });

      it('should wipe auth on logout', () => {
         const authData = {
            uid: '123'
         };

         const action = {
            type: 'LOGOUT'
         }

         var res = reducers.authReducer(df(authData), df(action));
         expect(res).toEqual({});
      });
   });


});

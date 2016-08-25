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
        type: 'TOGGLE_SHOW_COMPETED'
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
        text: 'Test'
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('Should toggle todo completed status', () => {
      var state = [{
        id: 1,
        text: 'Test',
        completed: false,
        createdAt: 0,
        completedAt: undefined
      }];
      var action = {
        type: 'TOGGLE_TODO',
        id: 1
      };
      var res = reducers.todosReducer(df(state), df(action));

      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toNotBeA('undefined');

      var res = reducers.todosReducer(df(res), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toBeA('undefined');

    });
  });


});

var expect = require('expect');
var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('Should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('Should set valid todos array', () => {
      var todos = [{id: 1, text: 'test', completed: false}];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });

    it('Should not set an invalid todos array', () => {
      var badTodos = {id: 1, text: 'test'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('Should return an empty array for bad local storage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('Should return valid todos array', () => {
      var todos = [{id: 1, text: 'test', completed: false}];
      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });

  describe('filterTodos', () => {
    var todos = [
      {id: 1, text: 'test 1', completed: true},
      {id: 2, text: 'test 2', completed: false},
      {id: 3, text: 'something else', completed: true}
    ]

    it('Should return all items if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('Should return non completed items if showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('Should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toEqual(false);
    });

    it('Should filter todos by searchtext', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'Test');
      expect(filteredTodos.length).toBe(2);
    });

    it('Should return all todos if searchtext if empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
  });
});

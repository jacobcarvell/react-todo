var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {Search} from 'Search';

describe('Search', () => {
  it('Should exist', () => {
    expect(Search).toExist();
  });

  it('Should disptach SET_SEARCH_TEXT on input change', () => {
    var searchText = 'jacob';
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    };
    var spy = expect.createSpy();
    var search = TestUtils.renderIntoDocument(<Search dispatch={spy} />);

    search.refs.searchText.value = searchText;
    TestUtils.Simulate.change(search.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it("Should dipatch TOGGLE_SHOW_COMPLETED when checkbox was checked", () => {
    var spy = expect.createSpy();
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var search = TestUtils.renderIntoDocument(<Search dispatch={spy} />);

    search.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(search.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);
  });

});

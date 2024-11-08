import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

let count = 0;
const updateCounter = () => {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
};

// Use Lodash's debounce on the updateCounter function
$('button').on('click', _.debounce(updateCounter, 500));

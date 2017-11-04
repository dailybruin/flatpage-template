import hello from './module';

import replaceLine from './fortune';
hello();

$(document).ready(() => {
  console.log('READY!');
  $('#replace-button').click(() => {
    console.log(replaceLine);
    console.log($('#line-to-replace').text());
    $('#line-to-replace').text(replaceLine());
  });
});

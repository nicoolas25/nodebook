'use strict';

module.exports = {
  'appendix-b/examples/events-setmaxlisteners.js': {
    skip: true
  },
  'appendix-b/examples/callback.js': {
    stderr: 'TypeError: message is not a String'
  },
  'appendix-b/examples/promise-errors.js': {
    stderr: 'Erreur volontaire'
  },
  'appendix-b/examples/streams-large.js': {
    exitCode: 1,
    stderr: 'SyntaxError: Unexpected end of JSON input'
  },
  'chapter-03/examples/class-constructor.js': {
    stderr: 'Error: Extend the View class to render content'
  },
  'chapter-03/examples/definition.js': {
    exitCode: 1,
    stderr: 'ReferenceError: document is not defined'
  },
  'chapter-03/examples/function.js': {
    exitCode: 1,
    stderr: 'ReferenceError: values is not defined'
  },
  'chapter-03/examples/object-getters-shorthand.js': {
    exitCode: 1,
    stderr: 'TypeError: Cannot set property .+ which has only a getter'
  },
  'chapter-03/examples/object-getters.js': {
    exitCode: 1,
    stderr: 'Error: Invalid date given'
  },
  'chapter-04/examples/process-stdin-uppercase.js': {
    stdin: 'un deux trois',
    stdout: 'UN DEUX TROIS'
  },
  'chapter-04/examples/process-exit-devinette.js': {
    stdin: '3',
    stdout: /Tu as trouvé, bravo !/
  },
  'chapter-04/examples/process-exit-error.js': {
    exitCode: 1,
    stderr: 'ReferenceError: jenexistepas is not defined'
  },
  'chapter-04/examples/process-interrupt.js': {
    skip: true,
  },
  'chapter-04/examples/process-stdout-long.js': {
    skip: true,
  },
  'chapter-06/examples/app.js': {
    skip: true
  },
  'chapter-06/examples/debug.js': {
    timeout: 6000
  },
  'chapter-06/examples/server-port80.js': {
    skip: true
  },
  'chapter-07/examples/http-app.js': {
    skip: true
  }
};

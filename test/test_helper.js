import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

// this creates jsdom versions of document and window objects

// they are then assigned on the global object so that they will be discovered by React

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

// populate global object with all window properties jsdom window object creates

Object.keys(window).forEach((key) => {
    if (!(key in global)) global[key] = window[key];
});

chai.use(chaiImmutable);

import _ from 'lodash'
import './style.css'
import Icon from './icon.png'
import Data from './data.xml'
import printMe from './print.js'

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!'
    btn.onclick = printMe;
    element.appendChild(btn);

    var myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add('logo');
    element.appendChild(myIcon);
    console.log(Data);


    return element;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = component(); // Re-render the "component" to update the click handler
        document.body.appendChild(element);
    })
}
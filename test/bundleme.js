import submod from './submodule/submodule';
import './styles/test.scss!';
import './styles/test_sass.sass!scss';
import './styles/test_other.scss!';


console.log('I am bundled');
console.log('submodule loaded: ' + submod.available);

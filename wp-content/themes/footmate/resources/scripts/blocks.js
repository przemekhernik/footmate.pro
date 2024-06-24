import Cookies from 'js-cookie';
import './../styles/blocks.scss';

class Test {
  log() {
    console.log('blocks');
  }
}

const test = new Test();

test.log();
console.log(Cookies.get('wp-settings-time-1'));

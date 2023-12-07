import Cookies from 'js-cookie';

class Test {
    log() {
        console.log('scripts');
    }
}

const test = new Test();

test.log();
console.log(Cookies.get('wp-settings-time-1'));
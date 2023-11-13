let count = 0;
let interval = null;

function create() {
  interval = setInterval(() => {
    count++;
    document.getElementById('count').innerText = count;
  }, 1000)

  document.getElementById('message').innerText = 'Change message'
}

function destroy () {
  clearInterval(interval)
}

export function setState(val) {
  count = val;
}



create()

if (import.meta.hot) {
  import.meta.hot.accept((module) => {
    module.setState(import.meta.hot.data.count)
  })
  import.meta.hot.dispose(() => {
    import.meta.hot.data.count = count;
    destroy();
  })
}
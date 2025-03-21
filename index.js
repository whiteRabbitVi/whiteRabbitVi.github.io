// index.js
function HelloWorld(props) {
  const computedDate = props.date ? props.date : '29.05.2013';

  return (<h1>Привет, Мир!!! Моё приложение создано: <b>{computedDate}</b></h1>)
}

const root = createRoot(document.getElementById("root"));

root.render(HelloWorld({date: '13.02.23'}));

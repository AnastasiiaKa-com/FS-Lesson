import MyButton from "../../components/myButton/MyButton";

function Lesson02() {
  const element = <h4>Это JSX элемент из переменной element!</h4>;
  const text = "это строка из переменной text..";

  // объект 1
  const react = {
    library: "React",
    developer: "Meta",
    logo: "https://cdn.pixabay.com/photo/2022/01/18/08/43/meta-6946620_960_720.jpg",
  };

  // объект 2
  const angular = {
    library: "Angular",
    developer: "Google",
  };

  // функция обрабатывающая ключи переданных объектов и создающая новую строку
  function showDeveloper(obj) {
    // проверка на наличие нужного ключа в объекте
    if (obj.developer && obj.library) {
      return `Developer of ${obj.library} is ${obj.developer}!`;
    }
    return "Not valid data 😵";
  }
  const isLoggedIn = true;

  return (
    <div>
      <h2>React JSX components 🤖</h2>
      <p>
        В JSX мы можем пользоваться динамическими данными, которые приходят из
        тела функции react компонента или других файлов
      </p>
      {element}
      <p>Здесь будет строка: {text}</p>
      {/* в фигурных скобках в верстке JSX можно использовать логические конструкции JS - в том числе числовые и вызовы функций */}
      <p>Это вычисление случилось в JSX: {40 * 42} !!</p>
      {/* пример вызова функций внутри тегов JSX */}
      <p>{showDeveloper(react)}</p>
      <p>{showDeveloper(angular)}</p>
      <p>{showDeveloper(element)}</p>
      {isLoggedIn ? (
        <img width={"250px"} src={react.logo} alt="" />
      ) : 
        <h4>To see image zou need to authoize!</h4>
      }
      <div>
        <MyButton/>
        <MyButton/>
        <MyButton/>
      </div>
    </div>
  );
}

export default Lesson02;

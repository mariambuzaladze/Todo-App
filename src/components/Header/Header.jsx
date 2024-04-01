import "./header.css";
import Moon from "/images/icon-moon.svg";
import Sun from "/images/icon-sun.svg";

export default function Header({changeTheme,theme}) {
  return (
    <header>
      <h1>TODO</h1>
      <img onClick={changeTheme} className="theme" src={theme === "light"?Moon:Sun} alt="theme icon" />
    </header>
  );
}

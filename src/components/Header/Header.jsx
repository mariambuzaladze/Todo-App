import "./header.css";
import Moon from "/images/icon-moon.svg";
import Sun from "/images/icon-sun.svg";

export default function Header() {
  return (
    <header>
      <h1>TODO</h1>
      <img src={Moon} alt="theme icon" />
    </header>
  );
}

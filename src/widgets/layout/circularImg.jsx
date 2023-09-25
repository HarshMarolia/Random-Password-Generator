import logo from '../../img/favicon.png'
import { Link } from "react-router-dom";

export function CircularImg() {
  return (
    <Link to="/">
      <img
        className="h-8 w-8 rounded-full object-cover object-center"
        src={logo}
        alt="Boomi AI"
      />
    </Link>
  );
}
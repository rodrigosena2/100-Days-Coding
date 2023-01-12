export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="icon"> Front Beginners</a>
      <ul>
        <li className="active"><a href="/about">Sobre</a></li>
        <li><a href="/profile">Perfil</a></li>
      </ul>
    </nav>
  )
}
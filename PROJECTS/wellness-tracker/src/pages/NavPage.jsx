export default function NavPage() {
  return (
    <ul>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </ul>
  );
}

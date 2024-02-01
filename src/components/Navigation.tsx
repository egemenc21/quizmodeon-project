interface NavigationProps {
  user: string;
  score:number
}

function Navigation({user, score}: NavigationProps) {
  return (
    <nav className="p-6 bg-primary text-white flex justify-center gap-10">
      {user}
      <div className="flex space-x-4">
        <div >
          <div>Score:</div>
          <div className="text-center">{score}</div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

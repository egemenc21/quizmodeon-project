interface NavigationProps {
  user: string;
}

function Navigation({user}: NavigationProps) {
  return (
    <nav className="p-6 bg-primary text-white flex justify-center gap-10">
      {user}
      <div className="flex space-x-4">
        <div >
          <div>Score:</div>
          <div className="text-center">0</div>
        </div>
        <div >
          <div>Rank:</div>
          <div className="text-center">0</div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

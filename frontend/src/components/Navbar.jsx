import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <div className="bg-zinc-700 flex justify-between px-24 py-4">
      <Link to="/">
        <h1 className="font-bold text-2xl">React CRUD</h1>
      </Link>

      <div className="">
        <ul className="flex gap-12">
          <li className="px-2 py-1 rounded-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="border border-white px-4 py-1 rounded-lg">
            <Link to="/new">Create Task</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

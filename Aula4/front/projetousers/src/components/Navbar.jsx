import React from "react";

const Navbar = () => {
  return (
    <div className="bg-dark p-3 text-white">
        <img src="https://i.imgur.com/jnlbNsc_d.jpg?maxwidth=520&shape=thumb&fidelity=high" className="logo" />
        
        <a href="#" className="text-decoration-none m-2 text-white">
        <i class="fa-solid fa-dungeon"></i> <b>HOME</b>
        </a>

        <a href="#" className="text-decoration-none m-2 text-white">
        <i class="fa-solid fa-address-book"></i> <b>CADASTRO</b>
        </a>

        <a href="#" className="text-decoration-none m-2 text-white">
        <i class="fa-solid fa-clipboard-list"></i> <b>LISTA</b>
        </a>

    </div>
  );
};

export default Navbar;
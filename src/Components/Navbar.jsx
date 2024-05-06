import React from 'react';

const Navbar = () => {
  return (
<header class="bg-black">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <div class="flex-1 md:flex md:items-center md:gap-8">
        <img src="/movie.png" className="w-12 bg-black" alt="logo" />
       <p className="text-white font-sans text-xl">Movie  Bazer<span className="text-red-600">.</span></p>
      </div>

      <div class="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" class="hidden md:block">
          <ul class="flex items-center gap-12 text-md">
            <li>
              <a class="text-white transition hover:text-gray-500/75" href="#"> Home </a>
            </li>

            <li>
              <a class="text-gray-400 transition hover:text-gray-500/75" href="#">Explore</a>
            </li>

            <li>
              <a class="text-gray-400 transition hover:text-gray-500/75" href="#"> Genre </a>
            </li>

            <li>
              <a class="text-gray-400 transition hover:text-gray-500/75" href="#"> News </a>
            </li>

            <li>
              <a class="text-gray-400 transition hover:text-gray-500/75" href="#"> Movies </a>
            </li>

            <li>
              <a class="text-gray-400 transition hover:text-gray-500/75" href="#"> TV shows </a>
            </li>
          </ul>
        </nav>

        

          
          </div>
        </div>
      </div>
</header>
  );
}

export default Navbar;

import Propils from "./Propils";

export default function HalamanUtama() {
  return (
    <>
      <header className="bg-gray-800 text-white p-5 font-serif">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-between items-center">
          <h1 className="text-4xl font-bold">Lira.com</h1>

          {/* Navigation */}
          <nav className="w-full md:w-auto">
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 font-bold">
              <li>
                <a href="#home" className="hover:text-yellow-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#profile" className="hover:text-yellow-400">
                  Profile
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-yellow-400">
                  Projects
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="home">
        <div className="flex flex-col lg:flex-row items-center ">
          <div>
            <img
              className="h-[400px] lg:h-[650px]  lg:mr-6"
              src="./img/LIRA-removebg-preview.png"
              alt="Profile"
            />
          </div>
          <div>
            <h1 className="text-3xl lg:text-5xl font-serif text-center lg:text-left font-bold">
              Hi, Im
            </h1>
            <h1 className="text-3xl lg:text-5xl font-serif text-center lg:text-left mt-1">
              Lira Rahmawati
            </h1>
            <p className="text-lg lg:text-xl font-serif mt-4 text-center lg:text-left">
              Junior FrontEnd | Junior BackEnd
            </p>
          </div>
        </div>
        <div id="profile" className="mb-0">
          <Propils />
        </div>

        <div id="projects" className="grid gap-10 m-5 cici">
          {/* <h1 className="text-7xl font-serif text-center my-2">My Projects</h1> */}

          <div className="flex flex-col lg:flex-row-reverse bg-gray-300 text-black p-6 rounded-lg mb-0 ">
            <div className="lg:w-2/4">
              <img
                className="mb-4 lg:mb-0"
                src="./img/bahasaC (1).jpg"
                alt="Butik Liparkah"
              />
              <div className="flex gap-4 my-5">
                <img
                  className="w-1/3"
                  src="./img/bahasaC (2).jpg"
                  alt="Butik Liparkah Thumbnail 1"
                />
                <img
                  className="w-1/3"
                  src="./img/bahasaC (3).jpg"
                  alt="Butik Liparkah Thumbnail 2"
                />
                <img
                  className="w-1/4"
                  src="./img/c.jpg"
                  alt="Butik Liparkah Thumbnail 3"
                />
              </div>
            </div>

            <div className="lg:mr-6 lg:w-1/2 justify-center font-serif ">
              <h2 className="text-xl lg:text-2xl font-bold mb-2 justify-center ">
                1. Butik Liparkah
              </h2>

              <div className="my-5 text-sm ">
                <button className="nline-block bg-slate-500 text-white py-2 px-4 rounded-lg gap-2 m-2">
                  C
                </button>
                <button className="nline-block bg-slate-500 text-white py-2 px-4 rounded-lg gap-2 m-2">
                  Visual Studio Code
                </button>
              </div>
              <p className="text-sm">
                The Sales and Stock Management Information System at Butik
                Liparkah is a program developed in C language designed to
                facilitate the management of clothing stock, orders, and sales
                reports at the boutique. This program helps the admin and
                boutique staff manage clothing inventory, process orders, and
                generate sales reports efficiently.
              </p>

              <h2 className="mt-4 font-bold text-xl">Key Features</h2>
              <ol className="list-decimal m-5 text-sm">
                <li>
                  Clothing: Users can view a list of available clothing items,
                  including name, price, color options, and sizes.
                </li>
                <li>
                  Ordering: Users can select clothing items, choose colors and
                  sizes, and add them to their shopping cart.
                </li>
                <li>
                  Payment: Users can make payments for their orders and view the
                  total amount due.
                </li>
                <li>
                  Stock Management: Admins have special access to add and remove
                  clothing items, as well as manage color and size options.
                </li>
                <li>
                  Order History: Admins and cashiers can view customer order
                  history, including details of purchased items and total
                  payments.
                </li>
              </ol>

              {/* GitHub Button */}
              <div className="mt-4">
                <a
                  href="https://github.com/lirarahmawati20/projek-bahasac.git" // Replace with actual GitHub link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-slate-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Open link
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col lg:flex-row bg-white text-gray-900 rounded-lg p-6">
            <div className="lg:w-2/4">
              <img
                className="rounded-lg mb-4 lg:mb-0"
                src="./img/movi3.png"
                alt="Movie Project"
              />
              <div className="flex gap-4 my-10">
                <img
                  className="w-1/3 rounded-lg"
                  src="./img/movi1.png"
                  alt="Movie Thumbnail 1"
                />
                <img
                  className="w-1/3 rounded-lg"
                  src="./img/movi2.png"
                  alt="Movie Thumbnail 2"
                />
                <img
                  className="w-1/4 rounded-lg"
                  src="./img/movi4.png"
                  alt="Movie Thumbnail 3"
                />
              </div>
            </div>
            <div className="lg:ml-6 lg:w-1/2">
              <h2 className="text-xl lg:text-2xl font-bold mb-2">2. Movie</h2>

              <div className="my-5 text-sm">
                <button className="inline-block bg-slate-500 text-white py-2 px-3 sm:py-2 sm:px-4 md:py-3 md:px-5 rounded-lg gap-2 m-1 sm:m-2 md:m-3 text-xs sm:text-sm md:text-base">
                  JavaScript
                </button>
                <button className="inline-block bg-slate-500 text-white py-2 px-3 sm:py-2 sm:px-4 md:py-3 md:px-5 rounded-lg gap-2 m-1 sm:m-2 md:m-3 text-xs sm:text-sm md:text-base">
                  HTML
                </button>
                <button className="inline-block bg-slate-500 text-white py-2 px-3 sm:py-2 sm:px-4 md:py-3 md:px-5 rounded-lg gap-2 m-1 sm:m-2 md:m-3 text-xs sm:text-sm md:text-base">
                  CSS
                </button>
                <button className="inline-block bg-slate-500 text-white py-2 px-3 sm:py-2 sm:px-4 md:py-3 md:px-5 rounded-lg gap-2 m-1 sm:m-2 md:m-3 text-xs sm:text-sm md:text-base">
                  Visual Studio Code
                </button>
                <button className="inline-block bg-slate-500 text-white py-2 px-3 sm:py-2 sm:px-4 md:py-3 md:px-5 rounded-lg gap-2 m-1 sm:m-2 md:m-3 text-xs sm:text-sm md:text-base">
                  Git
                </button>
                <button className="inline-block bg-slate-500 text-white py-2 px-3 sm:py-2 sm:px-4 md:py-3 md:px-5 rounded-lg gap-2 m-1 sm:m-2 md:m-3 text-xs sm:text-sm md:text-base">
                  GitHub
                </button>
                <button className="inline-block bg-slate-500 text-white py-2 px-3 sm:py-2 sm:px-4 md:py-3 md:px-5 rounded-lg gap-2 m-1 sm:m-2 md:m-3 text-xs sm:text-sm md:text-base">
                  API
                </button>
              </div>

              <p className="text-sm font-serif">
                MOVI is a movie management application that allows users to add,
                view, and manage their favorite movies list. The application
                provides features for searching movies by title, category, and
                the ability to rate and review movies.
              </p>
              <h2 className="mt-4 font-bold text-xl">Key Features</h2>
              <ol className="list-decimal m-4 text-sm font-serif">
                <li>
                  Movie Search: Search for movies by title or filter by
                  category.
                </li>
                <li>
                  Popular Movies: Displays currently popular movies based on
                  user ratings or view counts.
                </li>
                <li>
                  Latest Releases: Shows movies that have recently been released
                  in theaters or on streaming platforms.
                </li>
                <li>
                  Recommended Movies: Based on browsing history or user
                  preferences, the system provides relevant movie
                  recommendations.
                </li>
                <li>
                  Movie Details: A dedicated page for each movie containing
                  comprehensive information such as synopsis, release year,
                  duration, genre, director, cast, and reviews from critics.
                </li>
              </ol>

              {/* GitHub Button */}
              <div className="mt-4">
                <a
                  href="https://github.com/lirarahmawati20/projek-html.git" // Replace with actual GitHub link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-slate-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Open link
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col lg:flex-row-reverse bg-gray-300 text-gray-900 p-6 rounded-lg ">
            <div className="lg:w-2/4">
              <img
                className="mb-4 lg:mb-0"
                src="./img/nebula1.png"
                alt="Nebula Express"
              />
              <div className="flex gap-4 my-10">
                <img
                  className="w-1/3"
                  src="./img/nebula2.png"
                  alt="Nebula Express Thumbnail 1"
                />
                <img
                  className="w-1/3"
                  src="./img/nebula3.png"
                  alt="Nebula Express Thumbnail 2"
                />
                <img
                  className="w-1/4"
                  src="./img/nebula4.png"
                  alt="Nebula Express Thumbnail 3"
                />
              </div>
            </div>

            <div className="lg:mr-6 lg:w-1/2 justify-center font-serif">
              <h2 className="text-xl lg:text-2xl font-bold mb-2 justify-center ">
                3. Nebula Espresso
              </h2>

              <div className="my-5 text-sm">
                <button className="inline-block bg-slate-500 text-white py-2 px-3 sm:py-2 sm:px-4 md:py-3 md:px-5 rounded-lg gap-2 m-1 sm:m-2 md:m-3 text-xs sm:text-sm md:text-base">
                  React.js
                </button>
                <button className="inline-block bg-slate-500 text-white py-2 px-3 sm:py-2 sm:px-4 md:py-3 md:px-5 rounded-lg gap-2 m-1 sm:m-2 md:m-3 text-xs sm:text-sm md:text-base">
                  Tailwind.css
                </button>
                <button className="inline-block bg-slate-500 text-white py-2 px-3 sm:py-2 sm:px-4 md:py-3 md:px-5 rounded-lg gap-2 m-1 sm:m-2 md:m-3 text-xs sm:text-sm md:text-base">
                  CSS
                </button>
                <button className="inline-block bg-slate-500 text-white py-2 px-3 sm:py-2 sm:px-4 md:py-3 md:px-5 rounded-lg gap-2 m-1 sm:m-2 md:m-3 text-xs sm:text-sm md:text-base">
                  JavaScript
                </button>
                <button className="inline-block bg-slate-500 text-white py-2 px-3 sm:py-2 sm:px-4 md:py-3 md:px-5 rounded-lg gap-2 m-1 sm:m-2 md:m-3 text-xs sm:text-sm md:text-base">
                  Express.js
                </button>
                <button className="inline-block bg-slate-500 text-white py-2 px-3 sm:py-2 sm:px-4 md:py-3 md:px-5 rounded-lg gap-2 m-1 sm:m-2 md:m-3 text-xs sm:text-sm md:text-base">
                  PostgreSQL
                </button>
                <button className="inline-block bg-slate-500 text-white py-2 px-3 sm:py-2 sm:px-4 md:py-3 md:px-5 rounded-lg gap-2 m-1 sm:m-2 md:m-3 text-xs sm:text-sm md:text-base">
                  Git
                </button>
                <button className="inline-block bg-slate-500 text-white py-2 px-3 sm:py-2 sm:px-4 md:py-3 md:px-5 rounded-lg gap-2 m-1 sm:m-2 md:m-3 text-xs sm:text-sm md:text-base">
                  GitHub
                </button>
                <button className="inline-block bg-slate-500 text-white py-2 px-3 sm:py-2 sm:px-4 md:py-3 md:px-5 rounded-lg gap-2 m-1 sm:m-2 md:m-3 text-xs sm:text-sm md:text-base">
                  DBper
                </button>
                <button className="inline-block bg-slate-500 text-white py-2 px-3 sm:py-2 sm:px-4 md:py-3 md:px-5 rounded-lg gap-2 m-1 sm:m-2 md:m-3 text-xs sm:text-sm md:text-base">
                  MariaDB
                </button>
                <button className="inline-block bg-slate-500 text-white py-2 px-3 sm:py-2 sm:px-4 md:py-3 md:px-5 rounded-lg gap-2 m-1 sm:m-2 md:m-3 text-xs sm:text-sm md:text-base">
                  Vite
                </button>
                <button className="inline-block bg-slate-500 text-white py-2 px-3 sm:py-2 sm:px-4 md:py-3 md:px-5 rounded-lg gap-2 m-1 sm:m-2 md:m-3 text-xs sm:text-sm md:text-base">
                  JWT
                </button>
                <button className="inline-block bg-slate-500 text-white py-2 px-3 sm:py-2 sm:px-4 md:py-3 md:px-5 rounded-lg gap-2 m-1 sm:m-2 md:m-3 text-xs sm:text-sm md:text-base">
                  Node.js
                </button>
                <button className="inline-block bg-slate-500 text-white py-2 px-3 sm:py-2 sm:px-4 md:py-3 md:px-5 rounded-lg gap-2 m-1 sm:m-2 md:m-3 text-xs sm:text-sm md:text-base">
                  REST API
                </button>
              </div>

              <p className="text-sm font-serif">
                Nebula Espresso is a web application for a coffee shop that
                makes it easy for users to view and order various types of
                coffee. The application also provides information about the
                coffee products for sale, including images, prices, and stock
                availability.
              </p>
              <h2 className="mt-4 font-bold text-xl">Key Features</h2>
              <ol className="list-decimal text-sm m-4 font-serif">
                <li>
                  Products: Users can view a list of available coffee products,
                  including name, image, and price.
                </li>
                <li>
                  Ordering: Users can order coffee products they want and add
                  them to their shopping cart.
                </li>
                <li>Payment: Users can make payments for their orders.</li>
                <li>
                  Stock Management: Admins have special access to add and remove
                  coffee products.
                </li>
                <li>
                  Order History: Admins and cashiers can view customer order
                  history and details.
                </li>
              </ol>

              {/* GitHub Button */}
              <div className="mt-4">
                <a
                  href="https://github.com/lirarahmawati20/Nebula-Espresso.git" // Replace with actual GitHub link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-slate-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Open link
                </a>
              </div>
            </div>
          </div>

          {/* Futsall */}
          <div className="flex flex-col lg:flex-row bg-white text-gray-900 rounded-lg p-6">
            <div className="lg:w-2/4">
              <img
                className="mb-4 lg:mb-0"
                src="./img/Screenshot1.png"
                alt="Kickzone Futsal"
              />
              <div className="flex gap-4 my-10">
                <img
                  className="w-1/3"
                  src="./img/Screenshot2.png"
                  alt="Kickzone Futsal Thumbnail 1"
                />
                <img
                  className="w-1/3"
                  src="./img/Screenshot3.png"
                  alt="Kickzone Futsal Thumbnail 2"
                />
                <img
                  className="w-1/4"
                  src="./img/Screenshot4.png"
                  alt="Kickzone Futsal Thumbnail 3"
                />
              </div>
            </div>

            <div className="lg:ml-6 lg:w-1/2">
              <h2 className="text-xl lg:text-2xl font-bold mb-2">
                4. Kickzone Futsal
              </h2>
              <div className="my-5 text-sm grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg m-2 ">
                  React.js
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg m-2 ">
                  Tailwind.css
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg m-2">
                  Css
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg m-2 ">
                  Java Springboot
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg m-2">
                  JavaScript
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg m-2">
                  Vite
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg m-2">
                  PostgreSQL
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg m-2 ">
                  Git
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg m-2">
                  GitHub
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg m-2 ">
                  DBper
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg m-2 ">
                  MariaDB
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg m-2">
                  JWT
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg m-2">
                  REST API
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg m-2 ">
                  Visual Studio Code
                </button>
              </div>
              <p className="text-sm font-serif">
                Kickzone Futsal is an online futsal field booking application
                that allows users to check the availability of fields, make
                reservations, and manage bookings. The system includes a
                user-friendly interface for booking and managing reservations.
              </p>
              <h2 className="mt-4 font-bold text-xl">Key Features</h2>
              <ol className="list-decimal text-sm font-serif m-4">
                <li>
                  Field Availability: View the availability of futsal fields
                  based on date and time.
                </li>
                <li>Booking: Make reservations for futsal fields.</li>
                <li>
                  Confirmation: Users receive confirmation of their booking.
                </li>
                <li>
                  Cancellation: Users can cancel or reschedule bookings if
                  necessary.
                </li>
                <li>
                  Booking History: Users can view their booking history and
                  details.
                </li>
              </ol>

              {/* GitHub Button */}
              <div className="mt-4">
                <a
                  href="https://github.com/lirarahmawati20/KICKZONE-FUTSAL.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-slate-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Open link
                </a>
              </div>
            </div>
          </div>

          {/* tambahan */}
          <div className="flex flex-col lg:flex-row bg-white text-gray-900 rounded-lg p-4">
            <div className="lg:w-2/5">
              <img
                className="mb-4 lg:mb-0"
                src="./img/Screenshot (748).png"
                alt="Kickzone Futsal"
              />
            </div>

            <div className="lg:ml-6 lg:w-3/5">
              <h2 className="text-xl lg:text-2xl font-bold mb-2">
                5. Job Management System
              </h2>
              <div className="my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg ">
                  React.js
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg ">
                  Tailwind.css
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg ">
                  Css
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg ">
                  TypeScript
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg ">
                  Vite
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg ">
                  Java Spring Boot
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg">
                  Visual Studio Code
                </button>
              </div>
              <p className="mt-4">
                This project is an employee management application developed
                using TypeScript and Java. This application allows users to add,
                edit, and delete employee data, as well as sort and search
                employees based on certain categories.
              </p>

              {/* GitHub Button */}
              <div className="mt-4">
                <a
                  href="https://github.com/lirarahmawati20/uts-react-java-lira.git" // Replace with actual GitHub link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-slate-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Open link
                </a>
              </div>
            </div>
          </div>

          {/* tambahan */}
          <div className="flex flex-col lg:flex-row bg-white text-gray-900 rounded-lg p-4">
            <div className="lg:w-2/5">
              <img
                className="mb-2 lg:mb-0"
                src="./img/Screenshot (753).png"
                alt="Fruity Store"
              />
            </div>

            <div className="lg:ml-6 lg:w-3/5">
              <h2 className="text-xl lg:text-2xl font-bold mb-2">
                6. Fruity Store
              </h2>
              <div className="my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg ">
                  React.js
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg ">
                  Tailwind.css
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg ">
                  Css
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg ">
                  JavaScript
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg ">
                  Vite
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg ">
                  Visual Studio Code
                </button>
              </div>
              <p className="mt-4">
                Fruity Store is an online application for managing product
                catalogs with CRUD features. Users can also add items to the
                shopping cart.
              </p>

              {/* GitHub Button */}
              <div className="mt-4">
                <a
                  href="https://github.com/lirarahmawati20/tugas-react1.git" // Replace with actual GitHub link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-slate-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Open link
                </a>
              </div>
            </div>
          </div>

          {/* tambahan */}
          <div className="flex flex-col lg:flex-row bg-white text-gray-900 rounded-lg p-4">
            <div className="lg:w-2/5">
              <img
                className="mb-2 lg:mb-0"
                src="./img/Screenshot (752).png"
                alt="To-Do List"
              />
            </div>

            <div className="lg:ml-6 lg:w-3/5">
              <h2 className="text-xl lg:text-2xl font-bold mb-2">
                8. To-Do List
              </h2>
              <div className="my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg ">
                  React.js
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg ">
                  Tailwind.css
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg ">
                  Css
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg ">
                  JavaScript
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg ">
                  Vite
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg ">
                  Visual Studio Code
                </button>
              </div>
              <p className="mt-4">
                This project is a to-do list application developed using ReactJs
                and JavaScript. It allows users to add, edit, and delete tasks,
                as well as categorize them into completed and pending lists.
              </p>

              {/* GitHub Button */}
              <div className="mt-4">
                <a
                  href="https://github.com/lirarahmawati20/uts-react-2024.git" // Replace with actual GitHub link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-slate-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Open link
                </a>
              </div>
            </div>
          </div>
          {/* tambahan */}
          <div className="flex flex-col lg:flex-row bg-white text-gray-900 rounded-lg p-4">
            <div className="lg:w-2/5">
              <img
                className="mb-2 lg:mb-0"
                src="./img/Screenshot (747).png"
                alt="General Election Commissions"
              />
            </div>

            <div className="lg:ml-6 lg:w-3/5">
              <h2 className="text-xl lg:text-2xl font-bold mb-2">
                9. General Election Commissions
              </h2>
              <div className="my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg ">
                  React.js
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg ">
                  Tailwind.css
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg ">
                  Css
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg ">
                  TypeScript
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg ">
                  Vite
                </button>
                <button className="bg-slate-500 text-white py-2 px-4 rounded-lg ">
                  Visual Studio Code
                </button>
              </div>
              <p className="mt-4">
                This project is a presidential candidate list application
                developed using ReactJs and TypeScript.
              </p>

              {/* GitHub Button */}
              <div className="mt-4">
                <a
                  href="https://github.com/lirarahmawati20/tugasTypeScript-kandidat.git" // Replace with actual GitHub link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-slate-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Open link
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

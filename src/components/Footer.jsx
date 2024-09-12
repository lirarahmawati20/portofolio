import { Github } from "lucide-react";
import { PhoneCall } from "lucide-react";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 px-6 font-serif">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Contact Information */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">Kontak saya</h3>
          <p className="text-lg">
            Jl.cikupa, Des.Sukamannah, Kec.Rongga, Kab.Bandung Barat
          </p>
          <p className="text-lg">
            Email:{" "}
            <a
              href="mailto:lirarahmawati94@gmail.com"
              className="hover:underline"
            >
              lirarahmawati94@gmail.com
            </a>
          </p>
          <p className="text-lg">
            Telepon:{" "}
            <a href="tel:+6283821081737" className="hover:underline">
              +62838-2108-1737
            </a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mb-6 md:mb-0">
          <a
            href="https://www.linkedin.com/in/lira-rahmawati-a413492b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <Linkedin />
          </a>
          <a
            href="https://wa.me/+6283821081737"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <PhoneCall />
          </a>
          <a
            href="https://github.com/lirarahmawati20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <Github />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p>&copy; 2024 Lira Rahmawati.</p>
        </div>
      </div>
    </footer>
  );
}

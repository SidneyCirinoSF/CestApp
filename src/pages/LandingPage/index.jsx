import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CestApp_Logo from "../../images/CestApp_Logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ["/images/doacao.png", "/images/estoque.jpg", "/images/funcionarios.jpg"];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-white overflow-x-hidden w-screen">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-2 py-3 bg-gray-100 shadow sticky top-0 z-50">
        <img src={CestApp_Logo} alt="Logo" className="w-10 h-10" />
        <div className="flex gap-2">
          <Link
            to="/login"
            className="px-2 py-1 border rounded text-xs hover:bg-gray-200 transition"
          >
            Login Funcionário
          </Link>
          <Link
            to="/cadastro"
            className="px-2 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition"
          >
            Cadastre-se
          </Link>
        </div>
      </header>

      {/* Carrossel */}
      <section className="relative w-full h-[500px] sm:h-[600px] md:h-[750px] overflow-hidden">
        <img
          src={images[currentSlide]}
          alt="slide"
          className="w-full h-full object-cover object-center transition duration-700"
        />
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-1 rounded-full shadow hover:bg-white"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-1 rounded-full shadow hover:bg-white"
        >
          ❯
        </button>
      </section>

      {/* Quem Somos */}
      <section className="w-full bg-white">
        <h2 className="text-xl font-semibold text-center text-gray-800 mt-6 mb-2">Quem Somos</h2>
        <p className="px-4 text-sm text-justify text-gray-700 leading-relaxed mb-6">
          Somos uma organização dedicada a combater a fome e promover a segurança alimentar por meio da arrecadação e doação de cestas básicas para pessoas e famílias em situação de vulnerabilidade social...
        </p>
      </section>

      {/* Contato */}
      <section className="w-full bg-gray-100 text-center py-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Contato</h3>
        <div className="text-gray-700 text-sm space-y-1">
          <p><strong>Endereço:</strong> Av. Sen. Salgado Filho, s/n - Paulista - PE</p>
          <p><strong>Telefone:</strong> (81) 91234-5678</p>
          <p><strong>Email:</strong> contato@cestapp.com</p>
          <p><strong>Atendimento:</strong> Seg. a Sex. das 9h às 17h</p>
        </div>
      </section>

      {/* Mapa */}
      <section className="w-full bg-white py-4">
        <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Localização</h3>
        <div className="w-full h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.1704017458515!2d-34.87344718588294!3d-7.940611779958391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab13b2c638f9eb%3A0x3424d35e3d9a4b3!2sAv.%20Sen.%20Salgado%20Filho%2C%20s%2Fn%20-%20Centro%2C%20Paulista%20-%20PE%2C%2053401-440!5e0!3m2!1spt-BR!2sbr!4v1717289970000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            className="border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Redes Sociais */}
      <section className="w-full bg-gray-100 py-4 text-center">
        <h3 className="text-base font-semibold text-gray-800 mb-2">Siga-nos</h3>
        <div className="flex justify-center gap-4 text-lg text-gray-600">
          <a href="#" className="hover:text-blue-600 transition"><i className="fab fa-facebook"></i></a>
          <a href="#" className="hover:text-pink-500 transition"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-sky-400 transition"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-blue-700 transition"><i className="fab fa-linkedin"></i></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 py-2 w-full">
        &copy; {new Date().getFullYear()} CestApp. Todos os direitos reservados.
      </footer>
    </div>
  );
}
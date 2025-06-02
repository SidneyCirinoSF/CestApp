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
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-6 py-4 shadow-md bg-gray-200 sticky top-0 z-50">
        <div className="text-2xl font-bold text-gray-800">          
          <img src={CestApp_Logo} alt="Logo" className="w-10"/>
        </div>
        <div className="flex gap-4">
          <Link to="/login" className="px-4 py-2 border rounded-md text-sm font-medium hover:bg-gray-100 transition">
            Login Funcionário
          </Link>
          <Link to="/cadastro" className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition">
            Cadastre-se
          </Link>
        </div>
      </header>

      {/* Carrossel */}
      <section className="relative w-full h-80 md:h-[500px] overflow-hidden">
        <img
          src={images[currentSlide]}
          alt="slide"
          className="w-full h-full object-cover transition duration-700"
        />
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
        >
          ❯
        </button>
      </section>

      {/* Quem somos */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Quem Somos</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-600 text-lg">
          Somos uma equipe dedicada a oferecer soluções inovadoras para facilitar sua vida. Nosso sistema foi desenvolvido com foco em eficiência, simplicidade e experiência do usuário.
        </p>
      </section>

      {/* Informações de contato */}
      <section className="py-12 px-6 md:px-20 bg-gray-200">
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">Informações de Contato</h3>
        <div className="max-w-2xl mx-auto text-center text-gray-600 space-y-2">
          <p><strong>Endereço:</strong> Av. Sen. Salgado Filho, s/n - Centro, Paulista - PE, 53401-440</p>
          <p><strong>Telefone:</strong> (81) 98765-4321</p>
          <p><strong>Email:</strong> contato@ongexemplo.org</p>
          <p><strong>Horário de atendimento:</strong> Segunda a Sexta, das 9h às 17h</p>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-12 px-6 md:px-20 bg-white">
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Localização</h3>
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.1704017458515!2d-34.87344718588294!3d-7.940611779958391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab13b2c638f9eb%3A0x3424d35e3d9a4b3!2sAv.%20Sen.%20Salgado%20Filho%2C%20s%2Fn%20-%20Centro%2C%20Paulista%20-%20PE%2C%2053401-440!5e0!3m2!1spt-BR!2sbr!4v1717289970000!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow"
          ></iframe>
        </div>
      </section>

      {/* Redes Sociais */}
      <section className="py-8 px-6 md:px-20 bg-gray-200">
        <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">Siga-nos</h3>
        <div className="flex justify-center gap-6 text-gray-600 text-2xl">
          <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition"><i className="fab fa-facebook"></i></a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="Twitter" className="hover:text-sky-400 transition"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition"><i className="fab fa-linkedin"></i></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-4">
        &copy; {new Date().getFullYear()} CestApp. Todos os direitos reservados.
      </footer>
    </div>
  );
}

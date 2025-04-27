
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div>
            <h1 className="text-9xl font-extrabold text-green-600">404</h1>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Страница не найдена</h2>
            <p className="mt-2 text-base text-gray-500">
              Похоже, что страница, которую вы ищете, не существует или была перемещена.
            </p>
          </div>
          <div className="mt-6">
            <Link to="/">
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Вернуться на главную
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;

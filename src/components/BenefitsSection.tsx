
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    title: "Для вашего здоровья",
    description: "Натуральные продукты, отказ от токсичных веществ и более активный образ жизни положительно влияют на ваше здоровье и самочувствие.",
    items: [
      "Меньше вредных веществ в организме",
      "Улучшение общего состояния здоровья",
      "Снижение риска развития хронических заболеваний"
    ]
  },
  {
    title: "Для вашего кошелька",
    description: "Осознанное потребление помогает экономить средства, отказываясь от ненужных покупок и выбирая качественные, долговечные товары.",
    items: [
      "Экономия на импульсивных покупках",
      "Снижение расходов на электроэнергию и воду",
      "Меньше трат на замену некачественных товаров"
    ]
  },
  {
    title: "Для планеты",
    description: "Ваш экологичный образ жизни вносит вклад в сохранение природных ресурсов и защиту окружающей среды.",
    items: [
      "Сокращение углеродного следа",
      "Уменьшение загрязнения воды и почвы",
      "Сохранение биоразнообразия"
    ]
  }
];

const BenefitsSection = () => {
  return (
    <div className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Преимущества устойчивого потребления
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Ответственный подход к потреблению приносит пользу не только планете, но и вам лично
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-6">{benefit.description}</p>
                <ul className="space-y-3">
                  {benefit.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-green-500">
                        <Check size={20} />
                      </span>
                      <span className="ml-2 text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;

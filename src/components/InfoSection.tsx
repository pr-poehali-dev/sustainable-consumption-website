
import { 
  Leaf, 
  Recycle, 
  ShoppingBag, 
  Droplet, 
  Lightbulb, 
  Battery
} from "lucide-react";

const features = [
  {
    name: 'Осознанное потребление',
    description: 'Покупайте только необходимое и выбирайте качественные товары с длительным сроком службы.',
    icon: ShoppingBag
  },
  {
    name: 'Повторное использование',
    description: 'Дайте вещам вторую жизнь — ремонтируйте, переделывайте, используйте повторно.',
    icon: Recycle
  },
  {
    name: 'Экологичные материалы',
    description: 'Выбирайте продукты из натуральных и биоразлагаемых материалов.',
    icon: Leaf
  },
  {
    name: 'Экономия воды',
    description: 'Сокращайте расход воды в повседневной жизни — это ценный ресурс.',
    icon: Droplet
  },
  {
    name: 'Энергосбережение',
    description: 'Оптимизируйте потребление электроэнергии и выбирайте энергоэффективные приборы.',
    icon: Lightbulb
  },
  {
    name: 'Правильная утилизация',
    description: 'Сортируйте отходы и сдавайте опасные материалы в специальные пункты приема.',
    icon: Battery
  },
];

const InfoSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Принципы</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Основы устойчивого потребления
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Следуя этим принципам, каждый из нас может внести свой вклад в сохранение планеты для будущих поколений.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;

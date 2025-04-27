
const stats = [
  { name: 'Тонн пластика попадает в океаны ежегодно', value: '8 млн' },
  { name: 'Лет требуется для разложения пластиковой бутылки', value: '450' },
  { name: 'Литров воды уходит на производство футболки', value: '2700' },
  { name: 'Тонн пищевых отходов выбрасывается ежегодно', value: '1.3 млрд' },
];

const StatsSection = () => {
  return (
    <div className="bg-green-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Почему устойчивое потребление важно
          </h2>
          <p className="mt-3 text-xl text-green-100 sm:mt-4">
            Эти цифры показывают, как наши ежедневные привычки влияют на окружающую среду
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.name} className="flex flex-col p-6 bg-green-800 rounded-lg overflow-hidden shadow transform transition duration-300 hover:scale-105">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-green-100">
                {stat.name}
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default StatsSection;

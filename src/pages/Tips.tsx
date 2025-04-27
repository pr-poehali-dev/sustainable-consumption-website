
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Leaf, ShoppingBag, Home, Recycle, Droplet, ZapIcon, Car, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Tips = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Практические советы по устойчивому потреблению</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Небольшие изменения в повседневной жизни могут привести к значительному положительному влиянию на окружающую среду.
            </p>
          </div>

          <Tabs defaultValue="daily" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-2xl grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="daily" className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  <span className="hidden md:inline">Повседневность</span>
                </TabsTrigger>
                <TabsTrigger value="shopping" className="flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4" />
                  <span className="hidden md:inline">Покупки</span>
                </TabsTrigger>
                <TabsTrigger value="resources" className="flex items-center gap-2">
                  <Droplet className="h-4 w-4" />
                  <span className="hidden md:inline">Ресурсы</span>
                </TabsTrigger>
                <TabsTrigger value="waste" className="flex items-center gap-2">
                  <Recycle className="h-4 w-4" />
                  <span className="hidden md:inline">Отходы</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="daily" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5 text-green-600" />
                    Устойчивые привычки в повседневной жизни
                  </CardTitle>
                  <CardDescription>
                    Простые действия, которые вы можете предпринять каждый день для уменьшения своего экологического следа.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <ZapIcon className="h-4 w-4 text-amber-500" />
                          <span>Экономия энергии</span>
                          <Badge variant="outline" className="ml-2 bg-amber-50">Легко внедрить</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Выключайте свет и электроприборы, когда они не используются</li>
                          <li>Замените обычные лампы на светодиодные (они потребляют на 90% меньше энергии)</li>
                          <li>Используйте умные розетки для контроля энергопотребления</li>
                          <li>Стирайте белье в холодной воде, когда это возможно</li>
                          <li>Сушите одежду естественным путем вместо использования сушильной машины</li>
                          <li>Установите термостаты на оптимальный уровень (20-22°C зимой и 24-26°C летом)</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Droplet className="h-4 w-4 text-blue-500" />
                          <span>Разумное использование воды</span>
                          <Badge variant="outline" className="ml-2 bg-blue-50">Экономия ресурсов</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Принимайте короткий душ вместо ванны (экономия до 150 литров воды)</li>
                          <li>Установите аэраторы на краны и экономичные душевые лейки</li>
                          <li>Закрывайте кран при чистке зубов (экономия до 9 литров в минуту)</li>
                          <li>Используйте посудомоечную и стиральную машины только при полной загрузке</li>
                          <li>Проверьте и устраните утечки воды (капающий кран может тратить до 11 000 литров в год)</li>
                          <li>Собирайте дождевую воду для полива растений</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Car className="h-4 w-4 text-gray-600" />
                          <span>Экологичное передвижение</span>
                          <Badge variant="outline" className="ml-2 bg-green-50">Снижение выбросов</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Пользуйтесь общественным транспортом вместо личного автомобиля</li>
                          <li>Практикуйте совместные поездки (карпулинг) с коллегами или соседями</li>
                          <li>Передвигайтесь на велосипеде или пешком на короткие расстояния</li>
                          <li>Рассмотрите возможность удаленной работы, если это возможно</li>
                          <li>При выборе автомобиля отдавайте предпочтение гибридным или электрическим моделям</li>
                          <li>Поддерживайте правильное давление в шинах для экономии топлива</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="shopping" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5 text-green-600" />
                    Осознанные покупки
                  </CardTitle>
                  <CardDescription>
                    Как делать покупки с минимальным воздействием на окружающую среду.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Leaf className="h-4 w-4 text-green-500" />
                          <span>Продукты питания</span>
                          <Badge variant="outline" className="ml-2 bg-green-50">Здоровый выбор</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Отдавайте предпочтение сезонным и местным продуктам (меньше транспортных выбросов)</li>
                          <li>Покупайте органические продукты, выращенные без пестицидов и химических удобрений</li>
                          <li>Сократите потребление мяса и молочных продуктов, особенно говядины (высокий углеродный след)</li>
                          <li>Планируйте покупки заранее, чтобы избежать пищевых отходов</li>
                          <li>Покупайте продукты на развес, избегая лишней упаковки</li>
                          <li>Приобретайте продукты с сертификатами устойчивого производства (Fair Trade, Rainforest Alliance)</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Heart className="h-4 w-4 text-red-500" />
                          <span>Одежда и текстиль</span>
                          <Badge variant="outline" className="ml-2 bg-red-50">Долговечный выбор</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Выбирайте качественную одежду, которая прослужит дольше</li>
                          <li>Отдавайте предпочтение натуральным тканям (органический хлопок, лен, конопля)</li>
                          <li>Покупайте одежду из вторичных материалов (переработанный полиэстер)</li>
                          <li>Посещайте секонд-хенды и винтажные магазины</li>
                          <li>Участвуйте в обмене одеждой с друзьями или на специальных мероприятиях</li>
                          <li>Поддерживайте бренды с прозрачной и этичной цепочкой поставок</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <ShoppingBag className="h-4 w-4 text-purple-500" />
                          <span>Бытовые товары</span>
                          <Badge variant="outline" className="ml-2 bg-purple-50">Умный выбор</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Выбирайте товары с экологической маркировкой (Ecolabel, Nordic Swan)</li>
                          <li>Отдавайте предпочтение многоразовым продуктам вместо одноразовых</li>
                          <li>Приобретайте технику с высоким классом энергоэффективности (A+++)</li>
                          <li>Выбирайте товары с минимальной упаковкой или биоразлагаемой упаковкой</li>
                          <li>Используйте натуральные чистящие средства (сода, уксус, лимонная кислота)</li>
                          <li>Покупайте бытовую химию в концентрированном виде и разбавляйте водой</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resources" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplet className="h-5 w-5 text-green-600" />
                    Эффективное использование ресурсов
                  </CardTitle>
                  <CardDescription>
                    Как разумно использовать природные ресурсы в повседневной жизни.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <ZapIcon className="h-4 w-4 text-yellow-500" />
                          <span>Альтернативные источники энергии</span>
                          <Badge variant="outline" className="ml-2 bg-yellow-50">Зеленая энергия</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Перейдите на тариф зеленой энергии у вашего поставщика электроэнергии</li>
                          <li>Рассмотрите возможность установки солнечных панелей на вашем доме или участке</li>
                          <li>Узнайте о программах энергоэффективности в вашем регионе</li>
                          <li>Используйте солнечные зарядные устройства для гаджетов</li>
                          <li>Инвестируйте в энергосберегающие технологии для дома</li>
                          <li>Поддерживайте инициативы по развитию возобновляемой энергетики</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Droplet className="h-4 w-4 text-blue-500" />
                          <span>Водосбережение в доме</span>
                          <Badge variant="outline" className="ml-2 bg-blue-50">Снижение расхода</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Установите систему сбора дождевой воды для полива сада</li>
                          <li>Используйте серую воду (после душа, стирки) для смыва в туалете</li>
                          <li>Приобретите унитаз с двойной системой смыва (экономия до 50% воды)</li>
                          <li>Выбирайте растения для сада, которые требуют минимального полива</li>
                          <li>Установите водосберегающую насадку на душ (экономия до 50% воды)</li>
                          <li>Организуйте систему капельного орошения для растений</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Home className="h-4 w-4 text-orange-500" />
                          <span>Экономия тепла и энергии</span>
                          <Badge variant="outline" className="ml-2 bg-orange-50">Утепление</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Утеплите окна и двери, чтобы избежать потери тепла</li>
                          <li>Используйте термические шторы зимой для сохранения тепла</li>
                          <li>Установите теплоотражающие экраны за радиаторами отопления</li>
                          <li>Проведите аудит энергоэффективности дома</li>
                          <li>Установите программируемый термостат для оптимизации отопления</li>
                          <li>Используйте природное проветривание летом вместо кондиционера</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="waste" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Recycle className="h-5 w-5 text-green-600" />
                    Управление отходами
                  </CardTitle>
                  <CardDescription>
                    Как минимизировать и правильно утилизировать отходы в повседневной жизни.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Recycle className="h-4 w-4 text-green-500" />
                          <span>Раздельный сбор и переработка</span>
                          <Badge variant="outline" className="ml-2 bg-green-50">Базовые навыки</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Организуйте систему раздельного сбора отходов в своем доме</li>
                          <li>Изучите правила сортировки в вашем регионе (что можно и нельзя перерабатывать)</li>
                          <li>Сдавайте батарейки и электронику в специальные пункты приема</li>
                          <li>Старую одежду и текстиль можно сдавать в H&M или другие пункты сбора</li>
                          <li>Не выбрасывайте опасные отходы (краски, растворители) с обычным мусором</li>
                          <li>Очищайте от пищи контейнеры перед отправкой на переработку</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Leaf className="h-4 w-4 text-green-500" />
                          <span>Компостирование</span>
                          <Badge variant="outline" className="ml-2 bg-green-50">Органические отходы</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Начните компостировать пищевые отходы (до 30% бытового мусора можно компостировать)</li>
                          <li>Для квартиры подойдут вермикомпостеры (с помощью дождевых червей)</li>
                          <li>Используйте полученный компост для домашних растений или сада</li>
                          <li>Что можно компостировать: овощные и фруктовые очистки, яичную скорлупу, кофейную гущу</li>
                          <li>Что нельзя компостировать: мясо, рыбу, молочные продукты, жиры</li>
                          <li>Узнайте о городских программах компостирования в вашем районе</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <ShoppingBag className="h-4 w-4 text-purple-500" />
                          <span>Жизнь без отходов (Zero Waste)</span>
                          <Badge variant="outline" className="ml-2 bg-purple-50">Продвинутый уровень</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Следуйте принципу 5R: Refuse (откажись), Reduce (сократи), Reuse (используй повторно), Recycle (перерабатывай), Rot (компостируй)</li>
                          <li>Всегда носите с собой многоразовую сумку, бутылку для воды и контейнер для еды</li>
                          <li>Используйте бамбуковую зубную щетку и твердое мыло вместо жидкого в пластиковой упаковке</li>
                          <li>Покупайте продукты на развес в свои контейнеры</li>
                          <li>Замените одноразовые предметы гигиены на многоразовые (менструальная чаша, многоразовые подгузники)</li>
                          <li>Научитесь ремонтировать вещи вместо покупки новых</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-12 bg-green-50 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Начните свой путь к устойчивому потреблению</h2>
            <p className="text-gray-700 mb-4">
              Не пытайтесь изменить все сразу. Начните с небольших шагов и постепенно внедряйте новые привычки в свою жизнь. 
              Каждое усилие имеет значение и вносит вклад в общее благо планеты.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <Card className="bg-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="text-2xl">🌱</span> Начните с малого
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Выберите 1-3 совета из этой страницы и внедрите их в течение следующего месяца.</p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="text-2xl">📊</span> Отслеживайте прогресс
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Ведите дневник своих экологичных привычек и замечайте положительные изменения.</p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="text-2xl">👥</span> Делитесь опытом
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Рассказывайте друзьям и близким о своих успехах, вдохновляя их последовать вашему примеру.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tips;

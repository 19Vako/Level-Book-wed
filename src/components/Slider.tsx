import './slider.css';
import { useAppSelector } from '../store/hooks';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Slider = () => {
  const [flipped, setFlipped] = useState<{ [key: string]: boolean }>({});
  const theme = useAppSelector(state => state.Theme);

  const choiseLevel = (level: string) => {
    setFlipped(prev => ({
      ...prev,
      [level]: !prev[level], // Переключаем только текущий уровень
    }));
  };

  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']; // Массив уровней

  return (
    <div className='slidesContainer' style={{ borderBottom: '1px solid ' + theme.color }}>
      {levels.map(level => (
        <motion.div
          key={level}
          className='levelSlide'
          style={{
            border: '1px solid ' + theme.color,
            backgroundColor: theme.slideBackground,
          }}
          animate={{ rotateY: flipped[level] ? 180 : 0 }} // Используйте текущее состояние для уровня
          transition={{ duration: 0.6 }}
          onClick={() => choiseLevel(level)}
        >
          <motion.div className='first' style={{ transform: 'rotateY(0deg)' }}>
            <h1 style={{ color: theme.color }}>{level}</h1>
          </motion.div>
          <motion.div className='last' style={{ transform: 'rotateY(180deg)' }}>
            <p className='slideText' style={{ color: theme.color }}>
              <h1>Що потрібно знати для рівня {level}</h1>
              <ul>
                {level === 'A1' && (
                  <>
                    <li><h3>Алфавіт та вимова</h3>Розпізнавання літер англійського алфавіту та їх вимова.</li>
                    <li><h3>Кольори та числа</h3>Знання та вміння називати кольори та числа.</li>
                    <li><h3>Базові фрази для спілкування</h3>Як вітатися та прощатися англійською мовою.</li>
                    <li><h3>Коротка інформація про себе</h3>Вміння називати основні дані про себе.</li>
                    <li><h3>Сім’я</h3>Назви членів родини (батько, мати, брат, сестра).</li>
                    <li><h3>Знання базових слів та формування простих речень</h3>Опис предметів, щоденних дій.</li>
                  </>
                )}
                {level === 'A2' && (
                  <>
                    <li><h3>Родина</h3>Опис членів сім’ї та родинних стосунків.</li>
                    <li><h3>Робота</h3>Лексика, пов’язана з робочими посадами.</li>
                    <li><h3>Дозвілля</h3>Слова для опису розваг, хобі, спорту.</li>
                    <li><h3>Подорожі</h3>Лексика для спілкування під час подорожей.</li>
                    <li><h3>Їжа та напої</h3>Опис різних страв і продуктів.</li>
                    <li><h3>Рутинні ситуації</h3>Лексика для опису щоденних обов’язків.</li>
                  </>
                )}
                {level === 'B1' && (
                  <>
                    <li><h3>Умовні речення</h3>Використання умовних конструкцій.</li>
                    <li><h3>Складні форми дієслів</h3>Герундій, інфінітив та інші.</li>
                    <li><h3>Непряма мова</h3>Переклад прямої мови у непряму.</li>
                    <li><h3>Пасивний стан</h3>Використання пасивних конструкцій.</li>
                    <li><h3>Додаткові часи</h3>Різні контексти для різних часів.</li>
                  </>
                )}
                {level === 'B2' && (
                  <>
                    <li><h3>Модальні слова</h3>Правильне вживання модальних дієслів.</li>
                    <li><h3>Фрази з дієсловами</h3>Розуміння контекстів для дієслів.</li>
                    <li><h3>Лексичні структури</h3>Знання ідіом і великий запас слів.</li>
                    <li><h3>Часи</h3>Використання складних часів.</li>
                    <li><h3>Пасивний стан та умовні конструкції</h3>Формування цих конструкцій.</li>
                  </>
                )}
                {level === 'C1' && (
                  <>
                    <li><h3>Професійні переваги</h3>Вміння спілкуватися англійською на високому рівні.</li>
                    <li><h3>Можливості подорожей</h3>Легкість у спілкуванні під час подорожей.</li>
                    <li><h3>Культурна інтеграція</h3>Доступ до культурного світу англомовних країн.</li>
                    <li><h3>Навчання та розвиток</h3>Можливість навчання на професійних курсах англійською.</li>
                    <li><h3>Соціальні контакти</h3>Спілкування з носіями мови без труднощів.</li>
                  </>
                )}
                {level === 'C2' && (
                  <>
                    <li><h3>Повна свобода спілкування</h3>Говорити і писати без помилок.</li>
                    <li><h3>Навчання та робота</h3>Вміння навчатися та працювати на англомовних ринках.</li>
                    <li><h3>Культура та суспільство</h3>Поглиблене розуміння культурних особливостей англомовних країн.</li>
                    <li><h3>Соціальна адаптація</h3>Участь у соціальних подіях і розмовах без бар'єрів.</li>
                    <li><h3>Інтеграція в міжнародне середовище</h3>Високий рівень англійської для будь-яких професійних і соціальних цілей.</li>
                  </>
                )}
              </ul>
            </p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export default Slider;

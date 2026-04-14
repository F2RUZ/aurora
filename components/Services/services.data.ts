export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: 'Analytics',
    description:
      '— это услуга аналитики и консалтинга для роста бизнеса: находим точки роста, устраняем слабые места и даём конкретный план действий',
    image: '/images/services/analytics.png',
  },
  {
    id: 2,
    title: 'Performance',
    description:
      '— это реклама на различных площадках, которая приводит клиентов и усиливает продажи',
    image: '/images/services/performance.png',
  },
  {
    id: 3,
    title: 'Веб-разработка',
    description:
      '— создаём цифровую платформу под конкретные задачи бизнеса: продажи, заявки, автоматизация',
    image: '/images/services/web-programming.png',
  },
  {
    id: 4,
    title: 'Брендинг',
    description:
      '— создаём визуальный и смысловой образ компании, который выделяет, запоминается и вызывает доверие',
    image: '/images/services/branding.png',
  },
  {
    id: 5,
    title: 'SMM',
    description:
      '— системное продвижение в соцсетях, которое формирует лояльность, привлекает клиентов и усиливает образ бренда. Контент, оформление и стратегия — всё под ключ',
    image: '/images/services/smm.png',
  },
];
type StrategyPillProps = {
    imgSrc: string;
    label: string;
    circleSize?: number;
    pillWidth?: number;
  };

  interface StatCircleProps {
    value: string;
    label: string;
  }

  interface ServiceCardProps {
    category: string;
    title: string;
    description: string;
    icon: React.ElementType;
  }

  type AddressData = {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
    cep: string;
  };
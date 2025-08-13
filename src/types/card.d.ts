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
    imgSrc: string; 
  }

  type AddressData = {
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    cep: string;
  };

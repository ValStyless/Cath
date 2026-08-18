import React from 'react';

const personalityTraits = [
  {
    number: "01",
    title: "Creativa",
    description: "Transformo ideas en propuestas originales y visualmente atractivas."
  },
  {
    number: "02",
    title: "Auténtica",
    description: "Busco que cada proyecto tenga una esencia propia y refleje una identidad real."
  },
  {
    number: "03",
    title: "Profesional",
    description: "Trabajo cada proyecto con atención al detalle, compromiso y estrategia."
  },
  {
    number: "04",
    title: "Cercana",
    description: "Creo en una comunicación natural que facilite la conexión con las personas."
  }
];

const BrandPersonality: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-[#EBEAE8]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12 font-title text-mainText text-center">Personalidad de Marca</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalityTraits.map((trait, index) => (
            <div 
              key={index} 
              className="bg-[#F5E7DC]/40 p-6 rounded-xl border border-[#DACABD] flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-title text-[#89725B] mb-2 block">{trait.number} —</span>
                <h3 className="text-xl font-title mb-3 text-mainText">{trait.title}</h3>
                <p className="font-content text-sm text-gray-700 leading-relaxed">{trait.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPersonality;
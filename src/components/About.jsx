import react from 'react';

const about = () => {
  return (
    <section className="relative w-full min-h-[34vh] md:min-h-[160vh] rounded-b-[20px] overflow-hidden bg-[#556045]">
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/te-ms.png" 
          alt="temilade about section" 
          className="w-full h-full object-cover object-center md:object-top select-none"
        />
      </div>
    </section>
  );
};

export default about;
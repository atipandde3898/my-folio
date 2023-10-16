import React from "react";
import api from "../assets/portfolio/folio.png";
import apod from "../assets/portfolio/pomodoro.png";
import webpostman from "../assets/portfolio/gitlogo.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: api,
      link: 'https://my-folio-d6t86wxwf-atipandde3898.vercel.app/',
      repo: 'https://github.com/atipandde3898/my-folio-o'
    },
    {
      id: 2,
      src: webpostman,
      link: 'https://mtechzilla-assesss-57kd.vercel.app/',
      repo: 'https://github.com/atipandde3898/mtechzilla-assesment'
    },
    {
      id: 3,
      src: apod,
      link: 'https://vercel.com/atipandde3898/mtechzilla-assesss',
      repo: 'https://github.com/atipandde3898/mtechzilla-assesss'
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

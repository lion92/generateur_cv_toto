import React from 'react';
import { CVData } from '../types/cv';

interface Props {
  data: CVData;
}

export const CVPreview: React.FC<Props> = ({ data }) => {
  return (
      <div
          id="cv-preview"
          className="bg-gradient-to-tr from-gray-50 via-gray-100 to-gray-200 shadow-2xl max-w-7xl mx-auto rounded-3xl p-12 animate-fade-in"
      >
        {/* Header */}
        <header className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white rounded-t-3xl p-12 shadow-lg">
          <div className="flex items-center gap-10">
            {/* Profile Picture */}
            {data.personalInfo.photo && (
                <div className="relative">
                  <img
                      src={data.personalInfo.photo}
                      alt="Profile"
                      className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-2xl"
                  />
                  <div className="absolute inset-0 w-44 h-44 rounded-full border-2 border-indigo-200 animate-pulse"></div>
                </div>
            )}
            <div>
              <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-md">
                {data.personalInfo.prenom} {data.personalInfo.nom}
              </h1>
              <p className="text-2xl italic mt-2">{data.personalInfo.metier}</p>
              <p className="text-lg mt-4">
                📧 {data.personalInfo.email} | 📞 {data.personalInfo.telephone} | 📍 {data.personalInfo.adresse}
              </p>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="grid grid-cols-12 gap-8 mt-12">
          {/* Sidebar */}
          <aside className="col-span-4 bg-white rounded-3xl shadow-md p-8 space-y-10">
            {/* Skills */}
            <section>
              <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
                🌟 Compétences
              </h2>
              {data.competences.map((comp) => (
                  <div key={comp.id} className="mb-6">
                    <p className="text-lg font-medium">{comp.nom}</p>
                    <div className="relative bg-gray-200 rounded-full h-3 mt-2">
                      <div
                          className="bg-indigo-500 h-3 rounded-full"
                          style={{ width: `${comp.niveau * 20}%` }}
                      ></div>
                    </div>
                  </div>
              ))}
            </section>

            {/* Hobbies */}
            <section>
              <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
                🎭 Loisirs
              </h2>
              <ul className="space-y-2">
                {data.loisirs.map((loisir) => (
                    <li key={loisir.id} className="text-lg text-gray-700 flex items-center">
                      <span className="mr-2 text-indigo-500">✔</span>
                      {loisir.nom}
                    </li>
                ))}
              </ul>
            </section>
          </aside>

          {/* Main Content */}
          <main className="col-span-8 space-y-12">
            {/* Professional Experiences */}
            <section className="bg-white rounded-3xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-indigo-600 mb-6 border-b-4 border-indigo-400 pb-2">
                💼 Expériences Professionnelles
              </h2>
              {data.experiences.map((exp) => (
                  <div key={exp.id} className="space-y-2 mb-8">
                    <h3 className="text-xl font-semibold">{exp.poste}</h3>
                    <p className="text-gray-500 italic">
                      {exp.debut} - {exp.fin}
                    </p>
                    <p className="text-lg text-indigo-600">{exp.entreprise}</p>
                    <p className="text-gray-700 mt-2">{exp.description}</p>
                  </div>
              ))}
            </section>

            {/* Education */}
            <section className="bg-white rounded-3xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-indigo-600 mb-6 border-b-4 border-indigo-400 pb-2">
                🎓 Formation
              </h2>
              {data.formations.map((form) => (
                  <div key={form.id} className="space-y-2 mb-8">
                    <h3 className="text-xl font-semibold">{form.diplome}</h3>
                    <p className="text-gray-500 italic">{form.annee}</p>
                    <p className="text-lg text-indigo-600">{form.etablissement}</p>
                    <p className="text-gray-700 mt-2">{form.description}</p>
                  </div>
              ))}
            </section>
          </main>
        </div>

        {/* Footer */}
        <footer className="mt-16 bg-gradient-to-r from-pink-500 to-indigo-500 text-white rounded-b-3xl shadow-lg p-8 text-center">
          <p className="text-xl font-semibold">
            🚀 Disponible pour relever vos défis professionnels ! Merci pour votre attention. ✨
          </p>
        </footer>
      </div>
  );
};

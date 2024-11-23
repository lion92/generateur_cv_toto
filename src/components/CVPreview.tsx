import React from 'react';
import { CVData } from '../types/cv';

interface Props {
  data: CVData;
}

export const CVPreview: React.FC<Props> = ({ data }) => {
  return (
      <div
          id="cv-preview"
          className="bg-gradient-to-b from-gray-50 to-gray-100 p-10 shadow-2xl max-w-6xl mx-auto rounded-3xl border border-gray-300 animate-fade-in"
      >
        {/* Header */}
        <header className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-10 rounded-t-3xl shadow-xl">
          <div className="flex items-center gap-10">
            {/* Profile Picture */}
            {data.personalInfo.photo && (
                <img
                    src={data.personalInfo.photo}
                    alt="Profile"
                    className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl"
                />
            )}
            <div>
              <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-md">
                {data.personalInfo.prenom} {data.personalInfo.nom}
              </h1>
              <p className="text-2xl mt-3 italic">{data.personalInfo.metier}</p>
              <p className="mt-5 text-lg">
                📧 {data.personalInfo.email} | 📞 {data.personalInfo.telephone} | 📍 {data.personalInfo.adresse}
              </p>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="grid grid-cols-12 gap-8 mt-10">
          {/* Sidebar */}
          <aside className="col-span-4 bg-white rounded-3xl shadow-lg p-8 space-y-8">
            {/* Skills */}
            <section>
              <h2 className="text-xl font-semibold text-indigo-600 border-b-2 border-indigo-400 pb-2">
                🌟 Compétences
              </h2>
              <div className="mt-4 space-y-6">
                {data.competences.map((comp) => (
                    <div key={comp.id}>
                      <p className="text-gray-800 font-medium">{comp.nom}</p>
                      <div className="flex gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className={`h-2 w-8 rounded ${
                                    i < comp.niveau ? 'bg-indigo-500' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                      </div>
                    </div>
                ))}
              </div>
            </section>

            {/* Hobbies */}
            <section>
              <h2 className="text-xl font-semibold text-indigo-600 border-b-2 border-indigo-400 pb-2">
                🎭 Loisirs
              </h2>
              <ul className="list-disc list-inside mt-4 space-y-3">
                {data.loisirs.map((loisir) => (
                    <li key={loisir.id} className="text-gray-700 text-lg">
                      {loisir.nom}
                    </li>
                ))}
              </ul>
            </section>
          </aside>

          {/* Main Content */}
          <main className="col-span-8 space-y-10">
            {/* Professional Experiences */}
            <section className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-indigo-600 border-b-4 border-indigo-400 pb-3">
                💼 Expériences Professionnelles
              </h2>
              <div className="mt-6 space-y-8">
                {data.experiences.map((exp) => (
                    <div key={exp.id}>
                      <h3 className="text-xl font-bold text-gray-800">{exp.poste}</h3>
                      <p className="text-sm text-gray-500 italic">{exp.debut} - {exp.fin}</p>
                      <p className="text-lg text-indigo-600 mt-1">{exp.entreprise}</p>
                      <p className="text-gray-700 mt-3">{exp.description}</p>
                    </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-indigo-600 border-b-4 border-indigo-400 pb-3">
                🎓 Formation
              </h2>
              <div className="mt-6 space-y-8">
                {data.formations.map((form) => (
                    <div key={form.id}>
                      <h3 className="text-xl font-bold text-gray-800">{form.diplome}</h3>
                      <p className="text-sm text-gray-500 italic">{form.annee}</p>
                      <p className="text-lg text-indigo-600 mt-1">{form.etablissement}</p>
                      <p className="text-gray-700 mt-3">{form.description}</p>
                    </div>
                ))}
              </div>
            </section>
          </main>
        </div>

        {/* Footer */}
        <footer className="mt-10 text-center bg-gradient-to-r from-pink-500 to-indigo-500 text-white p-6 rounded-b-3xl shadow-lg">
          <p className="text-lg font-medium">
            🚀 Disponible pour relever de nouveaux défis professionnels ! Merci pour votre attention. ✨
          </p>
        </footer>
      </div>
  );
};

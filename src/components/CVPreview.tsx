import React from 'react';
import { CVData } from '../types/cv';

interface Props {
  data: CVData;
}

export const CVPreview: React.FC<Props> = ({ data }) => {
  return (
    <div id="cv-preview" className="bg-white p-8 shadow-lg max-w-4xl mx-auto">
      <div className="grid grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="col-span-1 space-y-6">
          {data.personalInfo.photo && (
            <img
              src={data.personalInfo.photo}
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover mx-auto"
            />
          )}
          <div className="space-y-2">
            <h2 className="text-xl font-bold border-b-2 border-blue-500 pb-2">
              Contact
            </h2>
            <p>{data.personalInfo.adresse}</p>
            <p>{data.personalInfo.telephone}</p>
            <p>{data.personalInfo.email}</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold border-b-2 border-blue-500 pb-2">
              Compétences
            </h2>
            {data.competences.map((comp) => (
              <div key={comp.id} className="space-y-1">
                <p className="font-medium">{comp.nom}</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 w-full rounded ${
                        i < comp.niveau
                          ? 'bg-blue-500'
                          : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold border-b-2 border-blue-500 pb-2">
              Loisirs
            </h2>
            <ul className="list-disc list-inside">
              {data.loisirs.map((loisir) => (
                <li key={loisir.id}>{loisir.nom}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-2 space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold">
              {data.personalInfo.prenom} {data.personalInfo.nom}
            </h1>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2">
              Expériences Professionnelles
            </h2>
            {data.experiences.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold">{exp.poste}</h3>
                  <p className="text-gray-600">
                    {exp.debut} - {exp.fin}
                  </p>
                </div>
                <p className="text-lg text-blue-600">{exp.entreprise}</p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2">
              Formation
            </h2>
            {data.formations.map((form) => (
              <div key={form.id} className="space-y-2">
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold">{form.diplome}</h3>
                  <p className="text-gray-600">{form.annee}</p>
                </div>
                <p className="text-lg text-blue-600">{form.etablissement}</p>
                <p className="text-gray-700">{form.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
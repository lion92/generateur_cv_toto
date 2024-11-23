import React from 'react';
import { CVData } from '../types/cv';
import { Plus, Trash2 } from 'lucide-react';

interface Props {
  competences: CVData['competences'];
  onChange: (competences: CVData['competences']) => void;
}

export const CompetenceForm: React.FC<Props> = ({ competences, onChange }) => {
  const addCompetence = () => {
    onChange([
      ...competences,
      {
        id: crypto.randomUUID(),
        nom: '',
        niveau: 3,
      },
    ]);
  };

  const removeCompetence = (id: string) => {
    onChange(competences.filter((comp) => comp.id !== id));
  };

  const updateCompetence = (
    id: string,
    field: string,
    value: string | number
  ) => {
    onChange(
      competences.map((comp) =>
        comp.id === id ? { ...comp, [field]: value } : comp
      )
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Compétences</h2>
        <button
          onClick={addCompetence}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          <Plus size={20} /> Ajouter
        </button>
      </div>
      {competences.map((comp) => (
        <div key={comp.id} className="border p-4 rounded space-y-4">
          <div className="flex justify-end">
            <button
              onClick={() => removeCompetence(comp.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={20} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Compétence"
              value={comp.nom}
              onChange={(e) => updateCompetence(comp.id, 'nom', e.target.value)}
              className="border rounded p-2"
            />
            <input
              type="range"
              min="1"
              max="5"
              value={comp.niveau}
              onChange={(e) =>
                updateCompetence(comp.id, 'niveau', parseInt(e.target.value))
              }
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
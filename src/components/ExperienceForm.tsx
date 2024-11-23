import React from 'react';
import { CVData } from '../types/cv';
import { Plus, Trash2 } from 'lucide-react';

interface Props {
  experiences: CVData['experiences'];
  onChange: (experiences: CVData['experiences']) => void;
}

export const ExperienceForm: React.FC<Props> = ({ experiences, onChange }) => {
  const addExperience = () => {
    onChange([
      ...experiences,
      {
        id: crypto.randomUUID(),
        poste: '',
        entreprise: '',
        debut: '',
        fin: '',
        description: '',
      },
    ]);
  };

  const removeExperience = (id: string) => {
    onChange(experiences.filter((exp) => exp.id !== id));
  };

  const updateExperience = (id: string, field: string, value: string) => {
    onChange(
      experiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Expériences Professionnelles</h2>
        <button
          onClick={addExperience}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          <Plus size={20} /> Ajouter
        </button>
      </div>
      {experiences.map((exp) => (
        <div key={exp.id} className="border p-4 rounded space-y-4">
          <div className="flex justify-end">
            <button
              onClick={() => removeExperience(exp.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={20} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Poste"
              value={exp.poste}
              onChange={(e) => updateExperience(exp.id, 'poste', e.target.value)}
              className="border rounded p-2"
            />
            <input
              type="text"
              placeholder="Entreprise"
              value={exp.entreprise}
              onChange={(e) =>
                updateExperience(exp.id, 'entreprise', e.target.value)
              }
              className="border rounded p-2"
            />
            <input
              type="text"
              placeholder="Date de début"
              value={exp.debut}
              onChange={(e) => updateExperience(exp.id, 'debut', e.target.value)}
              className="border rounded p-2"
            />
            <input
              type="text"
              placeholder="Date de fin"
              value={exp.fin}
              onChange={(e) => updateExperience(exp.id, 'fin', e.target.value)}
              className="border rounded p-2"
            />
          </div>
          <textarea
            placeholder="Description"
            value={exp.description}
            onChange={(e) =>
              updateExperience(exp.id, 'description', e.target.value)
            }
            className="border rounded p-2 w-full"
            rows={3}
          />
        </div>
      ))}
    </div>
  );
};
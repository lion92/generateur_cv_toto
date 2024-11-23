import React from 'react';
import { CVData } from '../types/cv';
import { Plus, Trash2 } from 'lucide-react';

interface Props {
  formations: CVData['formations'];
  onChange: (formations: CVData['formations']) => void;
}

export const FormationForm: React.FC<Props> = ({ formations, onChange }) => {
  const addFormation = () => {
    onChange([
      ...formations,
      {
        id: crypto.randomUUID(),
        diplome: '',
        etablissement: '',
        annee: '',
        description: '',
      },
    ]);
  };

  const removeFormation = (id: string) => {
    onChange(formations.filter((form) => form.id !== id));
  };

  const updateFormation = (id: string, field: string, value: string) => {
    onChange(
      formations.map((form) =>
        form.id === id ? { ...form, [field]: value } : form
      )
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Formations</h2>
        <button
          onClick={addFormation}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          <Plus size={20} /> Ajouter
        </button>
      </div>
      {formations.map((form) => (
        <div key={form.id} className="border p-4 rounded space-y-4">
          <div className="flex justify-end">
            <button
              onClick={() => removeFormation(form.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={20} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Diplôme"
              value={form.diplome}
              onChange={(e) =>
                updateFormation(form.id, 'diplome', e.target.value)
              }
              className="border rounded p-2"
            />
            <input
              type="text"
              placeholder="Établissement"
              value={form.etablissement}
              onChange={(e) =>
                updateFormation(form.id, 'etablissement', e.target.value)
              }
              className="border rounded p-2"
            />
            <input
              type="text"
              placeholder="Année"
              value={form.annee}
              onChange={(e) => updateFormation(form.id, 'annee', e.target.value)}
              className="border rounded p-2"
            />
          </div>
          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              updateFormation(form.id, 'description', e.target.value)
            }
            className="border rounded p-2 w-full"
            rows={3}
          />
        </div>
      ))}
    </div>
  );
};
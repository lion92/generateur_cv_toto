import React from 'react';
import { CVData } from '../types/cv';
import { Plus, Trash2 } from 'lucide-react';

interface Props {
  loisirs: CVData['loisirs'];
  onChange: (loisirs: CVData['loisirs']) => void;
}

export const LoisirForm: React.FC<Props> = ({ loisirs, onChange }) => {
  const addLoisir = () => {
    onChange([
      ...loisirs,
      {
        id: crypto.randomUUID(),
        nom: '',
      },
    ]);
  };

  const removeLoisir = (id: string) => {
    onChange(loisirs.filter((loisir) => loisir.id !== id));
  };

  const updateLoisir = (id: string, value: string) => {
    onChange(
      loisirs.map((loisir) =>
        loisir.id === id ? { ...loisir, nom: value } : loisir
      )
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Loisirs</h2>
        <button
          onClick={addLoisir}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          <Plus size={20} /> Ajouter
        </button>
      </div>
      {loisirs.map((loisir) => (
        <div key={loisir.id} className="border p-4 rounded flex gap-4">
          <input
            type="text"
            placeholder="Loisir"
            value={loisir.nom}
            onChange={(e) => updateLoisir(loisir.id, e.target.value)}
            className="border rounded p-2 flex-1"
          />
          <button
            onClick={() => removeLoisir(loisir.id)}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}
    </div>
  );
};
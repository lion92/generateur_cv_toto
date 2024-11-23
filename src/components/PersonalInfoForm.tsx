import React from 'react';
import { CVData } from '../types/cv';

interface Props {
  data: CVData['personalInfo'];
  onChange: (data: CVData['personalInfo']) => void;
}

export const PersonalInfoForm: React.FC<Props> = ({ data, onChange }) => {
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange({ ...data, photo: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Informations Personnelles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Nom"
          value={data.nom}
          onChange={(e) => onChange({ ...data, nom: e.target.value })}
          className="border rounded p-2"
        />
        <input
          type="text"
          placeholder="Prénom"
          value={data.prenom}
          onChange={(e) => onChange({ ...data, prenom: e.target.value })}
          className="border rounded p-2"
        />
        <input
          type="text"
          placeholder="Adresse"
          value={data.adresse}
          onChange={(e) => onChange({ ...data, adresse: e.target.value })}
          className="border rounded p-2"
        />
        <input
          type="tel"
          placeholder="Téléphone"
          value={data.telephone}
          onChange={(e) => onChange({ ...data, telephone: e.target.value })}
          className="border rounded p-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => onChange({ ...data, email: e.target.value })}
          className="border rounded p-2"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="border rounded p-2"
        />
      </div>
    </div>
  );
};
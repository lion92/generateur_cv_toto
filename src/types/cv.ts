export interface CVData {
  personalInfo: {
    nom: string;
    prenom: string;
    adresse: string;
    telephone: string;
    email: string;
    photo: string;
  };
  experiences: Array<{
    id: string;
    poste: string;
    entreprise: string;
    debut: string;
    fin: string;
    description: string;
  }>;
  formations: Array<{
    id: string;
    diplome: string;
    etablissement: string;
    annee: string;
    description: string;
  }>;
  competences: Array<{
    id: string;
    nom: string;
    niveau: number;
  }>;
  loisirs: Array<{
    id: string;
    nom: string;
  }>;
}
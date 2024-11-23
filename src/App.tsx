import React, { useState } from 'react';
import { CVData } from './types/cv';
import { PersonalInfoForm } from './components/PersonalInfoForm';
import { ExperienceForm } from './components/ExperienceForm';
import { FormationForm } from './components/FormationForm';
import { CompetenceForm } from './components/CompetenceForm';
import { LoisirForm } from './components/LoisirForm';
import { CVPreview } from './components/CVPreview';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Download } from 'lucide-react';

const initialData: CVData = {
  personalInfo: {
    nom: '',
    prenom: '',
    adresse: '',
    telephone: '',
    email: '',
    photo: '',
  },
  experiences: [],
  formations: [],
  competences: [],
  loisirs: [],
};

function App() {
  const [data, setData] = useState<CVData>(initialData);
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');

  const downloadPDF = async () => {
    const element = document.getElementById('cv-preview');
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth;
      const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save(`CV_${data.personalInfo.nom}_${data.personalInfo.prenom}.pdf`);
    } catch (error) {
      console.error('Erreur lors de la génération du PDF:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Générateur de CV</h1>
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('edit')}
              className={`px-4 py-2 rounded ${
                activeTab === 'edit'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700'
              }`}
            >
              Éditer
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-4 py-2 rounded ${
                activeTab === 'preview'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700'
              }`}
            >
              Aperçu
            </button>
            <button
              onClick={downloadPDF}
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              <Download size={20} /> Télécharger PDF
            </button>
          </div>
        </div>

        {activeTab === 'edit' ? (
          <div className="space-y-8">
            <PersonalInfoForm
              data={data.personalInfo}
              onChange={(personalInfo) => setData({ ...data, personalInfo })}
            />
            <ExperienceForm
              experiences={data.experiences}
              onChange={(experiences) => setData({ ...data, experiences })}
            />
            <FormationForm
              formations={data.formations}
              onChange={(formations) => setData({ ...data, formations })}
            />
            <CompetenceForm
              competences={data.competences}
              onChange={(competences) => setData({ ...data, competences })}
            />
            <LoisirForm
              loisirs={data.loisirs}
              onChange={(loisirs) => setData({ ...data, loisirs })}
            />
          </div>
        ) : (
          <CVPreview data={data} />
        )}
      </div>
    </div>
  );
}

export default App;
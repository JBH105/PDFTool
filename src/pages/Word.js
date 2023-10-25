import React, { useState } from 'react';

function Home() {
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPdfFile(file);
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();

    if (!pdfFile) {
      console.error('No PDF file selected.');
      return;
    }

    const formData = new FormData();
    formData.append('pdf', pdfFile);

    try {
      const response = await fetch('/api/convertPdfToWord', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Conversion successful');
      } else {
        console.error('Conversion failed');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div>
      <h1>PDF to Word Converter</h1>
      <form onSubmit={handleFileUpload}>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <button type="submit">Convert</button>
      </form>
    </div>
  );
}

export default Home;

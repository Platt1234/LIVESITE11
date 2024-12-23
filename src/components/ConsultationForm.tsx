import React from 'react';

export function ConsultationForm() {
  return (
    <iframe 
      width="100%" 
      height="800px" 
      src="https://forms.office.com/e/KEidL5R91X?embed=true" 
      frameBorder="0" 
      style={{
        border: 'none',
        maxWidth: '100%',
        maxHeight: '100vh',
        background: 'transparent'
      }}
      allowFullScreen
    />
  );
}
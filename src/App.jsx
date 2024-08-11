import  { useState } from 'react';
import MatrixInput from './MatrixInput';
import { toEchelonForm, toReducedEchelonForm } from './matrixUtils';

const App = () => {
  const [echelonMatrix, setEchelonMatrix] = useState([]);
  const [reducedEchelonMatrix, setReducedEchelonMatrix] = useState([]);

  const handleMatrixChange = (newMatrix) => {
    setEchelonMatrix(toEchelonForm(newMatrix));
    setReducedEchelonMatrix(toReducedEchelonForm(newMatrix));
  };

  const formatMatrixValue = (value) => {
    return Math.round(value); // Round to the nearest integer
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Matrix Echelon Form Converter</h1>
      <MatrixInput onMatrixChange={handleMatrixChange} />
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">Echelon Form</h2>
        <div className="matrix-output">
          {echelonMatrix.map((row, i) => (
            <div key={i} className="matrix-row">
              {row.map((val, j) => (
                <div key={j} className="matrix-cell">
                  {formatMatrixValue(val)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4 text-red-600">Reduced Echelon Form</h2>
        <div className="matrix-output">
          {reducedEchelonMatrix.map((row, i) => (
            <div key={i} className="matrix-row">
              {row.map((val, j) => (
                <div key={j} className="matrix-cell">
                  {formatMatrixValue(val)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

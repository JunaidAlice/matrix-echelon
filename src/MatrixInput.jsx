import { useState } from 'react';
import PropTypes from 'prop-types';

const MatrixInput = ({ onMatrixChange }) => {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [matrix, setMatrix] = useState(Array.from({ length: 3 }, () => Array(3).fill(0)));

  const handleChange = (e, row, col) => {
    const value = parseFloat(e.target.value) || 0;
    const newMatrix = matrix.map((r, i) =>
      r.map((val, j) => (i === row && j === col ? value : val))
    );
    setMatrix(newMatrix);
  };

  const handleSizeChange = () => {
    const newMatrix = Array.from({ length: rows }, () => Array(cols).fill(0));
    setMatrix(newMatrix);
  };

  const handleSubmit = () => {
    onMatrixChange(matrix);
  };

  return (
    <div>
      <div className="flex mb-4">
        <input 
          type="number" 
          value={rows} 
          onChange={(e) => setRows(Number(e.target.value))}
          className="mr-2 p-2 border border-gray-400 rounded"
          min="1"
        />
        <input 
          type="number" 
          value={cols} 
          onChange={(e) => setCols(Number(e.target.value))}
          className="p-2 border border-gray-400 rounded"
          min="1"
        />
        <button onClick={handleSizeChange} className="ml-2 p-2 bg-blue-500 text-white rounded">Set Size</button>
      </div>
      <div>
        {matrix.map((row, i) => (
          <div key={i} className="flex mb-2">
            {row.map((val, j) => (
              <input 
                key={j}
                type="number"
                value={val}
                onChange={(e) => handleChange(e, i, j)}
                className="mr-2 p-2 border border-gray-400 rounded"
              />
            ))}
          </div>
        ))}
      </div>
      <button onClick={handleSubmit} className="mt-4 p-2 bg-green-500 text-white rounded">Submit Matrix</button>
    </div>
  );
};

MatrixInput.propTypes = {
  onMatrixChange: PropTypes.func.isRequired,
};

export default MatrixInput;
